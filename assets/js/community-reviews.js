(function () {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('reviewsPrevBtn');
    const nextBtn = document.getElementById('reviewsNextBtn');
    const indicatorsWrap = document.getElementById('reviewsIndicators');
    const carousel = document.getElementById('reviewsCarousel');
    if (!track || !prevBtn || !nextBtn || !indicatorsWrap) return;

    let reviews = [];
    let index = 0;
    let autoplayId = null;
    let touchStart = 0;

    function cardsPerView() {
        return window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
    }

    function pageCount() {
        return Math.max(1, Math.ceil(reviews.length / cardsPerView()));
    }

    function renderIndicators() {
        const pages = pageCount();
        indicatorsWrap.innerHTML = '';
        for (let i = 0; i < pages; i += 1) {
            const dot = document.createElement('span');
            dot.className = `indicator ${i === index ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                index = i;
                update();
            });
            indicatorsWrap.appendChild(dot);
        }
    }

    function update() {
        const perView = cardsPerView();
        const card = track.querySelector('.review-card');
        if (!card) return;
        const cardWidth = card.getBoundingClientRect().width + 16;
        track.style.transform = `translateX(-${index * cardWidth * perView}px)`;

        Array.from(indicatorsWrap.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function next() {
        index = (index + 1) % pageCount();
        update();
    }

    function prev() {
        index = (index - 1 + pageCount()) % pageCount();
        update();
    }

    function renderReviews() {
        track.innerHTML = reviews.map(r => `
            <article class="review-card">
                <div class="review-top">
                    <div class="reviewer-meta">
                        <span class="avatar-pill">${r.initial || 'C'}</span>
                        <div>
                            <h4>${r.name}</h4>
                            <p>${r.location}</p>
                        </div>
                    </div>
                    <div class="stars" aria-label="${r.rating} star rating">${'★'.repeat(r.rating || 5)}</div>
                </div>
                <p class="review-body">"${r.text}"</p>
                <p class="review-date">${r.date}</p>
            </article>
        `).join('');
        renderIndicators();
        update();
    }

    function startAutoplay() {
        clearInterval(autoplayId);
        autoplayId = setInterval(next, 5000);
    }

    fetch('assets/data/reviews.json')
        .then(r => r.json())
        .then(data => {
            reviews = data.reviews || [];
            renderReviews();
            startAutoplay();
        })
        .catch(() => {
            reviews = [];
            track.innerHTML = '<p>Unable to load reviews right now.</p>';
        });

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    window.addEventListener('resize', () => {
        index = 0;
        renderIndicators();
        update();
    });

    carousel.addEventListener('mouseenter', () => clearInterval(autoplayId));
    carousel.addEventListener('mouseleave', startAutoplay);

    carousel.addEventListener('touchstart', (e) => {
        touchStart = e.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStart;
        if (Math.abs(dx) < 35) return;
        if (dx < 0) next(); else prev();
    }, { passive: true });
})();