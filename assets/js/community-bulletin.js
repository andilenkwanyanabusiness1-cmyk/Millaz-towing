(function () {
    const grid = document.getElementById('bulletinGrid');
    const loadMoreBtn = document.getElementById('loadMorePostsBtn');
    const filters = Array.from(document.querySelectorAll('.community-bulletin .filter-btn'));
    if (!grid || !loadMoreBtn) return;

    let posts = [];
    let activeFilter = 'all';
    let visible = 6;

    function formatDate(dateStr, fallback) {
        if (fallback) return fallback;
        const date = new Date(dateStr);
        if (Number.isNaN(date.getTime())) return '';
        return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    function filteredPosts() {
        const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        if (activeFilter === 'all') return sorted;
        return sorted.filter(p => p.category === activeFilter);
    }

    function render() {
        const list = filteredPosts();
        const slice = list.slice(0, visible);

        grid.innerHTML = slice.map(p => `
            <article class="bulletin-post" data-category="${p.category}">
                <div class="post-header">
                    <span class="post-category">${p.icon || ''} ${p.categoryLabel || p.category}</span>
                    <span class="post-date">${formatDate(p.date, p.daysAgo)}</span>
                </div>
                <h3 class="post-title">${p.title}</h3>
                <p class="post-excerpt">${p.excerpt}</p>
                <div class="post-footer">
                    <span class="post-priority ${p.priority || 'low'}">${(p.priority || 'low').toUpperCase()} PRIORITY</span>
                </div>
            </article>
        `).join('');

        loadMoreBtn.style.display = list.length > visible ? 'block' : 'none';
    }

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            visible = 6;
            render();
        });
    });

    loadMoreBtn.addEventListener('click', () => {
        visible += 4;
        render();
    });

    fetch('assets/data/bulletin-posts.json')
        .then(r => r.json())
        .then(data => {
            posts = data.posts || [];
            render();
        })
        .catch(() => {
            grid.innerHTML = '<p>Unable to load bulletin updates right now.</p>';
            loadMoreBtn.style.display = 'none';
        });
})();