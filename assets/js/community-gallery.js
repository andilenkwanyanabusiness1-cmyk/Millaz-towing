(function () {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxText = document.getElementById('lightboxText');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const loadMoreBtn = document.getElementById('galleryLoadMoreBtn');
    const filterBtns = Array.from(document.querySelectorAll('.community-gallery .filter-btn'));

    if (!galleryGrid || !lightbox) return;

    const fileNames = [
        'universal_upscale_0_a18049b6-54da-42dc-9d4d-4ab9ef871dfd_0.jpg',
        'WhatsApp Image 2025-11-05 at 2.07.29 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.30 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.31 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.31 PM (2).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.31 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.34 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.35 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.35 PM (2).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.35 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.36 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.36 PM (2).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.36 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.37 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.37 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.38 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.38 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.39 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.07.39 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.22 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.23 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.23 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.24 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.24 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.25 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.25 PM (2).jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.25 PM.jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.26 PM (1).jpeg',
        'WhatsApp Image 2025-11-05 at 2.08.26 PM.jpeg',
        'WhatsApp Image 2025-12-18 at 8.09.58 PM.jpeg',
        'WhatsApp Image 2025-12-19 at 12.56.55 PM.jpeg'
    ];

    const categories = ['fleet', 'recoveries', 'team', 'events'];
    const galleryItems = fileNames.map((file, i) => ({
        src: `assets/gallery/${file}`,
        alt: `Millaz community image ${i + 1}`,
        category: categories[i % categories.length],
        caption: `Millaz operation highlight #${i + 1}`
    }));

    let currentFilter = 'all';
    let visibleCount = 16;
    let currentIndex = 0;
    let touchStartX = 0;

    function filteredItems() {
        return currentFilter === 'all'
            ? galleryItems
            : galleryItems.filter(item => item.category === currentFilter);
    }

    function renderGallery() {
        const items = filteredItems();
        const toRender = items.slice(0, visibleCount);

        galleryGrid.innerHTML = toRender.map((item, idx) => `
            <div class="gallery-item" data-idx="${idx}">
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-caption">${item.caption}</span>
                    <i class="fas fa-search-plus" aria-hidden="true"></i>
                </div>
            </div>
        `).join('');

        loadMoreBtn.style.display = items.length > visibleCount ? 'block' : 'none';

        galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
            el.addEventListener('click', () => {
                currentIndex = Number(el.dataset.idx);
                openLightbox();
            });
        });
    }

    function openLightbox() {
        const items = filteredItems();
        const item = items[currentIndex];
        if (!item) return;

        lightboxImage.src = item.src;
        lightboxImage.alt = item.alt;
        lightboxText.textContent = item.caption;
        lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    function navigate(step) {
        const items = filteredItems();
        currentIndex = (currentIndex + step + items.length) % items.length;
        openLightbox();
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            visibleCount = 16;
            renderGallery();
        });
    });

    loadMoreBtn.addEventListener('click', () => {
        visibleCount += 8;
        renderGallery();
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'ArrowLeft') navigate(-1);
    });

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) navigate(1);
        else navigate(-1);
    }, { passive: true });

    renderGallery();
})();