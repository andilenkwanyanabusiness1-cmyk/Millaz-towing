(function () {
    'use strict';

    // Configuration
    const config = {
        frameCount: 181,
        framePath: 'assets/animated hero/ezgif-frame-{number}.jpg',
        scrollMultiplier: 1,
        mobileStep: 2, // Load every 2nd frame on mobile
    };

    // State
    const frames = [];
    const frameCount = config.frameCount;
    let currentFrame = 0;
    let loadedCount = 0;
    let canvas, ctx;
    let heroSection, heroScrollContainer, loadingOverlay, loadingProgress, scrollIndicator;
    let isMobile = window.innerWidth < 768;

    function init() {
        canvas = document.getElementById('hero-frames-canvas');
        heroSection = document.querySelector('.hero');
        heroScrollContainer = document.querySelector('.hero-scroll-container');
        loadingOverlay = document.getElementById('heroLoadingOverlay');
        loadingProgress = document.getElementById('loadingProgress');
        scrollIndicator = document.querySelector('.hero-scroll-indicator');

        if (!canvas) return;

        ctx = canvas.getContext('2d');

        // Handle resize
        window.addEventListener('resize', handleResize);
        handleResize();

        // Start preloading
        preloadFrames();
    }

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        isMobile = window.innerWidth < 768;

        if (frames[currentFrame]) {
            drawFrame(currentFrame);
        }
    }

    function getFramePath(index) {
        // ezgif-frame-001.jpg
        const paddedIndex = String(index).padStart(3, '0');
        return config.framePath.replace('{number}', paddedIndex);
    }

    function preloadFrames() {
        const step = isMobile ? config.mobileStep : 1;

        for (let i = 1; i <= frameCount; i++) {
            // On mobile, we only actually "load" every Nth frame, but keep indices for mapping
            if (isMobile && i % step !== 0 && i !== 1 && i !== frameCount) {
                frames[i - 1] = null; // Skip this one
                loadedCount++;
                continue;
            }

            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCount++;
                updateProgress();
                if (loadedCount === frameCount) {
                    onComplete();
                }
            };
            img.onerror = () => {
                console.error('Failed to load frame:', i);
                loadedCount++;
                updateProgress();
                if (loadedCount === frameCount) {
                    onComplete();
                }
            };
            frames[i - 1] = img;
        }
    }

    function updateProgress() {
        const progress = (loadedCount / frameCount) * 100;
        if (loadingProgress) {
            loadingProgress.style.width = `${progress}%`;
        }
    }

    function onComplete() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('loaded');
        }

        // Initial draw
        drawFrame(0);

        // Setup scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    function handleScroll() {
        if (!heroScrollContainer) return;

        const rect = heroScrollContainer.getBoundingClientRect();
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Progress within the scroll container
        // scrollY relative to container start is -rect.top
        const currentScroll = -rect.top;
        const maxScroll = containerHeight - viewportHeight;

        const scrollFraction = Math.max(0, Math.min(currentScroll / maxScroll, 1));
        const frameIndex = Math.floor(scrollFraction * (frameCount - 1));

        if (frameIndex !== currentFrame) {
            currentFrame = frameIndex;
            requestAnimationFrame(() => drawFrame(currentFrame));
        }

        // Fade indicator
        if (scrollIndicator) {
            scrollIndicator.style.opacity = currentScroll > 100 ? '0' : '1';
        }
    }

    function drawFrame(index) {
        let img = frames[index];

        // If image is missing (e.g. mobile step), find nearest loaded frame
        if (!img) {
            for (let i = 1; i < frameCount; i++) {
                if (frames[index - i]) { img = frames[index - i]; break; }
                if (frames[index + i]) { img = frames[index + i]; break; }
            }
        }

        if (!img || !img.complete) return;

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, x, y;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = drawWidth / imgRatio;
            x = 0;
            y = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = drawHeight * imgRatio;
            y = 0;
            x = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
