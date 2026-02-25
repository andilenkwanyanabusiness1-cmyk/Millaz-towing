import os
import glob

base_dir = r"c:\Users\User\OneDrive\Desktop\millaz towing"
html_files = [os.path.join(base_dir, "index.html")] + glob.glob(os.path.join(base_dir, "authority-hub", "*.html"))

back_to_top_html = """
    <button id="back-to-top-btn" class="back-to-top-button" aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</body>"""

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Logo replacement for index.html
    if "assets/millaz_logo_final.png" in content and "authority-hub" not in filepath:
        old_logo_html = """            <div class="logo">
                <img src="assets/millaz_logo_final.png" alt="Millaz Towing Logo">
            </div>"""
        new_logo_html = """            <a href="/" class="logo" id="logo-link">
                <img src="assets/millaz_logo_final.png" alt="Millaz Towing Logo">
            </a>"""
        content = content.replace(old_logo_html, new_logo_html)

    # Logo replacement for authority-hub pages
    if "authority-hub" in filepath:
        old_logo_html = """            <div class="logo">
                <a href="../index.html" aria-label="Millaz Towing Home">
                    <img src="../assets/millaz_logo_final.png" alt="Millaz Towing Logo">
                </a>
            </div>"""
        new_logo_html = """            <a href="/" class="logo" id="logo-link" aria-label="Millaz Towing Home">
                <img src="../assets/millaz_logo_final.png" alt="Millaz Towing Logo">
            </a>"""
        content = content.replace(old_logo_html, new_logo_html)

    # Add back to top button before </body>
    if "</body" in content and "back-to-top-btn" not in content:
        content = content.replace("</body>", back_to_top_html)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Processed {len(html_files)} files.")
