(function () {
    const facebookWrap = document.getElementById('facebookEmbedWrap');
    if (!facebookWrap) return;

    const fbFallback = document.querySelector('[data-fallback="facebook"]');
    const iframe = facebookWrap.querySelector('iframe');

    if (!iframe || !fbFallback) return;

    let loaded = false;
    iframe.addEventListener('load', () => {
        loaded = true;
    });

    setTimeout(() => {
        if (!loaded) {
            fbFallback.style.display = 'block';
        }
    }, 3500);
})();