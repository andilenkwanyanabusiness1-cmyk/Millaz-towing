(function () {
    const defaults = {
        facebook_url: 'https://www.facebook.com/share/14G9rD875PM/?mibextid=wwXIfr',
        facebook_embed_url: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14G9rD875PM%2F%3Fmibextid%3DwwXIfr&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId',
        tiktok_url: 'https://www.tiktok.com/@millaztowing?lang=en-GB',
        tiktok_handle: '@millaztowing',
        tiktok_intro: 'Watch daily recoveries, fleet updates, and behind-the-scenes content.',
        instagram_url: '#',
        whatsapp_url: 'https://wa.me/27737453329',
        google_reviews_url: 'https://www.google.com/search?sca_esv=cebedde645a747c8&sxsrf=ANbL-n5kVE5WtqzLPTJgf0k59gi7bxIQoQ:1772706898839&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWOJ-sSjCBUOuTB8P8GCMnOMsxbOfwOVICrSOxjRPP-oaOiHpyXrSN2gWbjXRrlI1mw7lX8TUBPpzyKPJ-oMBYDmGgEj&q=Millaz+Towing+Reviews&sa=X&ved=2ahUKEwjn5vvnx4iTAxU_2AIHHbm2Ac4Q0bkNegQIGBAH&biw=1278&bih=732&dpr=1.25'
    };

    function byId(id) {
        return document.getElementById(id);
    }

    function setHref(id, value) {
        const el = byId(id);
        if (el && value) el.href = value;
    }

    function applyConfig(cfg) {
        setHref('facebookFollowBtn', cfg.facebook_url);
        setHref('facebookFallbackLink', cfg.facebook_url);
        setHref('tiktokFollowBtn', cfg.tiktok_url);
        setHref('tiktokProfileBtn', cfg.tiktok_url);
        setHref('tiktokFallbackLink', cfg.tiktok_url);
        setHref('ctaFacebookLink', cfg.facebook_url);
        setHref('ctaTiktokLink', cfg.tiktok_url);
        setHref('footerFacebookLink', cfg.facebook_url);
        setHref('footerTiktokLink', cfg.tiktok_url);
        setHref('footerWhatsappLink', cfg.whatsapp_url);
        setHref('googleReviewBtn', cfg.google_reviews_url);

        const iframe = byId('facebookEmbedIframe');
        if (iframe) iframe.src = cfg.facebook_embed_url || '';

        const handle = byId('tiktokHandle');
        if (handle && cfg.tiktok_handle) handle.textContent = cfg.tiktok_handle;

        const intro = byId('tiktokIntroText');
        if (intro && cfg.tiktok_intro) intro.textContent = cfg.tiktok_intro;

        const fbFallback = document.querySelector('[data-fallback="facebook"]');
        if (iframe && fbFallback) {
            let loaded = false;
            iframe.addEventListener('load', () => { loaded = true; });
            setTimeout(() => {
                if (!loaded) fbFallback.style.display = 'block';
            }, 3500);
        }
    }

    fetch('assets/data/community-social.json')
        .then((r) => r.json())
        .then((data) => applyConfig({ ...defaults, ...data }))
        .catch(() => applyConfig(defaults));
})();