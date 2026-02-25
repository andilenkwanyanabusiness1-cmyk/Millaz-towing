import os
import glob

base_dir = r"c:\Users\User\OneDrive\Desktop\millaz towing"
html_files = [os.path.join(base_dir, "index.html")] + glob.glob(os.path.join(base_dir, "authority-hub", "*.html"))

js_snippet = """
<script>
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to top functionality
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Logo click to top
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            const path = window.location.pathname;
            if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
});
</script>
</body>"""

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Avoid adding multiple times
    if "document.getElementById('back-to-top-btn')" not in content:
        content = content.replace("</body>", js_snippet)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print(f"Processed JS injection in {len(html_files)} files.")
