import os
import re
import datetime

# Base paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(BASE_DIR, 'content')
TEMPLATE_PATH = os.path.join(BASE_DIR, 'article-template.html')
HUB_INDEX_PATH = os.path.join(BASE_DIR, 'index.html')
MAIN_INDEX_PATH = os.path.join(os.path.dirname(BASE_DIR), 'index.html')

def parse_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple frontmatter parser
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', content, re.DOTALL)
    if not match:
        return None
    
    frontmatter_str = match.group(1)
    body = match.group(2)
    
    frontmatter = {}
    for line in frontmatter_str.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            frontmatter[key.strip()] = value.strip().strip('"')
    
    frontmatter['body'] = body.strip()
    return frontmatter

def markdown_to_html(markdown_text):
    """Very basic markdown to HTML converter for H2 and P"""
    lines = markdown_text.split('\n')
    html_parts = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        if line.startswith('## '):
            html_parts.append(f'<h2>{line[3:]}</h2>')
        elif line.startswith('# '):
            html_parts.append(f'<h1>{line[2:]}</h1>')
        elif line.startswith('- '):
            # Very basic list check
            html_parts.append(f'<li>{line[2:]}</li>')
        else:
            html_parts.append(f'<p>{line}</p>')
            
    # Wrap lists
    final_html = []
    in_list = False
    for item in html_parts:
        if item.startswith('<li>'):
            if not in_list:
                final_html.append('<ul>')
                in_list = True
            final_html.append(item)
        else:
            if in_list:
                final_html.append('</ul>')
                in_list = False
            final_html.append(item)
    if in_list:
        final_html.append('</ul>')
        
    return '\n'.join(final_html)

def generate_article_page(article, prev_article, next_article):
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        template = f.read()

    # Determine date_iso for metadata
    try:
        date_obj = datetime.datetime.strptime(article['date'], '%d %b %Y')
        date_iso = date_obj.strftime('%Y-%m-%d')
    except:
        date_iso = datetime.datetime.now().strftime('%Y-%m-%d')

    replacements = {
        '[ARTICLE_TITLE]': article['title'],
        '[ARTICLE_SLUG]': article['slug'],
        '[ARTICLE_DESCRIPTION]': article.get('excerpt', f"Read about {article['title']} - essential guide for KZN motorists."),
        '[ARTICLE_CATEGORY]': article['category'],
        '[ARTICLE_DATE]': article['date'],
        '[ARTICLE_DATE_ISO]': date_iso,
        '[READ_TIME]': f"{article['read_time']} min read",
        '[HERO_IMAGE_SRC]': article.get('featured_image', ''),
        '[HERO_IMAGE_ALT]': article['title'],
        '[PREV_ARTICLE_TITLE]': prev_article['title'],
        '[PREV_ARTICLE_HREF]': prev_article['slug'] + '.html',
        '[NEXT_ARTICLE_TITLE]': next_article['title'],
        '[NEXT_ARTICLE_HREF]': next_article['slug'] + '.html',
    }

    for key, value in replacements.items():
        template = template.replace(key, str(value))

    # Content Body
    body_html = markdown_to_html(article['body'])
    
    pattern = r'(<!-- ═══════════════════════════════════════════════════\s*ARTICLE CONTENT STARTS HERE[\s\S]*?ARTICLE CONTENT ENDS HERE\s*═══════════════════════════════════════════════════ -->)'
    template = re.sub(pattern, body_html, template)

    # Feature badge
    if str(article.get('featured', '')).lower() == 'true':
        template = template.replace('<span class="hub-tag">', '<span class="hub-tag" style="background:#FF6B2B; margin-right:8px;">FEATURED</span><span class="hub-tag">', 1)

    output_path = os.path.join(BASE_DIR, article['slug'] + '.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    print(f"Generated {article['slug']}.html")

def update_hub_index(articles):
    with open(HUB_INDEX_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find featured articles
    featured = [a for a in articles if str(a.get('featured', '')).lower() == 'true'][:2]
    
    # Update Featured Section (This is simple string replacement for now based on known structure)
    # In a real SSG this would be more robust, but for this project we'll target the IDs.
    
    # Update All Articles Grid
    # We'll regenerate the entire grid block
    grid_start = '<!-- Article 3: Towing Regulations -->'
    grid_end = '<!-- ── NEWSLETTER SIGNUP ── -->' # reliable end anchor
    
    # We actually want to replace from the first article card to the last.
    # The grid starts after <div class="articles-grid" id="articles-grid">
    
    grid_html = ['<div class="articles-grid" id="articles-grid">']
    for i, a in enumerate(articles, 1): # Sequential ID for all
        img_src = a.get('featured_image', 'assets/hub-recovery.jpg')
        if not img_src: img_src = 'assets/hub-recovery.jpg'
        # Ensure path is relative to the root for the hub index
        if img_src.startswith('/'): img_src = img_src[1:]
        
        card = f'''
                <!-- Article {i}: {a['title']} -->
                <a href="{a['slug']}.html" class="article-card hub-animate" id="article-card-{i}">
                    <div class="article-card-img-wrap">
                        <img src="../{img_src}" alt="{a['title']}" loading="lazy">
                    </div>
                    <div class="article-card-body">
                        <span class="hub-tag">{a['category']}</span>
                        <h3>{a['title']}</h3>
                        <p>{a.get('excerpt', '')}</p>
                        <div class="article-card-footer">
                            <span class="article-card-date">
                                <i class="fas fa-calendar-alt"></i> {a['date']}
                            </span>
                            <span class="btn-read-link">
                                Read More <i class="fas fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </a>'''
        grid_html.append(card)
    grid_html.append('            </div>')
    
    pattern = r'<div class="articles-grid" id="articles-grid">[\s\S]*?</div>'
    content = re.sub(pattern, '\n'.join(grid_html), content)

    with open(HUB_INDEX_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated Authority Hub index.html")

# Main execution
if __name__ == "__main__":
    article_files = [f for f in os.listdir(CONTENT_DIR) if f.endswith('.md')]
    all_articles = []
    for f in article_files:
        data = parse_markdown(os.path.join(CONTENT_DIR, f))
        if data:
            all_articles.append(data)
    
    # Sort by date (descending)
    def parse_date(a):
        try: return datetime.datetime.strptime(a['date'], '%d %b %Y')
        except: return datetime.datetime.min
    
    all_articles.sort(key=parse_date, reverse=True)

    for i, article in enumerate(all_articles):
        prev_idx = (i - 1) % len(all_articles)
        next_idx = (i + 1) % len(all_articles)
        generate_article_page(article, all_articles[prev_idx], all_articles[next_idx])

    update_hub_index(all_articles)
    print(f"Successfully processed {len(all_articles)} articles.")
