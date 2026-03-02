import { animate, scroll, cubicBezier } from 'https://cdn.jsdelivr.net/npm/motion@11.11.16/+esm';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const galleries = document.querySelectorAll('.scroll-grid-gallery');

    galleries.forEach((gallery) => {
        const image = gallery.querySelector('.sg-scaler img');
        const firstSection = gallery.querySelector('.sg-scroll-space');
        const layers = gallery.querySelectorAll('.sg-grid > .sg-layer');

        if (!image || !firstSection || layers.length === 0) {
            return;
        }

        const naturalWidth = image.offsetWidth;
        const naturalHeight = image.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        scroll(
            animate(
                image,
                {
                    width: [viewportWidth, naturalWidth],
                    height: [viewportHeight, naturalHeight]
                },
                {
                    width: { easing: cubicBezier(0.65, 0, 0.35, 1) },
                    height: { easing: cubicBezier(0.42, 0, 0.58, 1) }
                }
            ),
            {
                target: firstSection,
                offset: ['start start', 'end end']
            }
        );

        const scaleEasings = [
            cubicBezier(0.42, 0, 0.58, 1),
            cubicBezier(0.76, 0, 0.24, 1),
            cubicBezier(0.87, 0, 0.13, 1)
        ];

        layers.forEach((layer, index) => {
            const fadeHold = 0.45 + (index * 0.08);
            const scaleHold = 0.2 + (index * 0.06);

            scroll(
                animate(
                    layer,
                    { opacity: [0, 0, 1] },
                    {
                        offset: [0, Math.min(fadeHold, 0.8), 1],
                        easing: cubicBezier(0.61, 1, 0.88, 1)
                    }
                ),
                {
                    target: firstSection,
                    offset: ['start start', 'end end']
                }
            );

            scroll(
                animate(
                    layer,
                    { scale: [0, 0, 1] },
                    {
                        offset: [0, Math.min(scaleHold, 0.55), 1],
                        easing: scaleEasings[index] || scaleEasings[scaleEasings.length - 1]
                    }
                ),
                {
                    target: firstSection,
                    offset: ['start start', 'end end']
                }
            );
        });
    });
}