(function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuCloseBtn = document.getElementById('menuCloseBtn');

    if (!hamburgerBtn || !mobileMenu || !menuCloseBtn) {
        return;
    }

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let lastFocusedElement = null;

    const normalizePath = (path) => {
        const normalized = (path || '/').replace(/index\.html$/i, '');
        return normalized.endsWith('/') ? normalized : `${normalized}/`;
    };

    const isHomePage = () => {
        const path = normalizePath(window.location.pathname);
        return path === '/';
    };

    const setMenuState = (isOpen) => {
        hamburgerBtn.classList.toggle('active', isOpen);
        mobileMenu.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        document.body.classList.toggle('mobile-menu-open', isOpen);
    };

    const focusFirstMenuItem = () => {
        const firstFocusable = mobileMenu.querySelector('.mobile-nav-item, .menu-close-btn, .menu-emergency-btn');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    };

    const openMenu = () => {
        lastFocusedElement = document.activeElement;
        setMenuState(true);
        window.requestAnimationFrame(focusFirstMenuItem);
    };

    const closeMenu = ({ restoreFocus = true } = {}) => {
        setMenuState(false);
        if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    };

    const trapFocus = (event) => {
        if (!mobileMenu.classList.contains('active') || event.key !== 'Tab') {
            return;
        }

        const focusables = Array.from(mobileMenu.querySelectorAll(focusableSelector))
            .filter((el) => el.offsetParent !== null);

        if (focusables.length === 0) {
            return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    const smoothScrollToHash = (hash) => {
        if (!hash || hash === '#') {
            return;
        }
        const target = document.querySelector(hash);
        if (!target) {
            return;
        }

        const top = target.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('active');
        if (isOpen) {
            closeMenu({ restoreFocus: false });
        } else {
            openMenu();
        }
    });

    menuCloseBtn.addEventListener('click', () => closeMenu());

    mobileMenu.addEventListener('click', (event) => {
        if (event.target === mobileMenu) {
            closeMenu();
        }
    });

    mobileMenu.querySelectorAll('.mobile-nav-item').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href') || '';

            if (href.startsWith('/#') && isHomePage()) {
                event.preventDefault();
                closeMenu({ restoreFocus: false });
                smoothScrollToHash(href.slice(1));
                return;
            }

            closeMenu({ restoreFocus: false });
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
        trapFocus(event);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
            closeMenu({ restoreFocus: false });
        }
    });

    const hash = window.location.hash;
    if (isHomePage() && (hash === '#community' || hash === '#services')) {
        window.setTimeout(() => smoothScrollToHash(hash), 60);
    }
})();
