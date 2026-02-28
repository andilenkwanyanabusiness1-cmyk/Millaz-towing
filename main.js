// Final Main JS Implementation
// ---------------------------------------------------------

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Indicator
    gsap.to('#scroll-progress-bar', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            scrub: 0.3
        }
    });

    // Statistics Counter Animation - FIX: Ensure reliable triggering
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');

        ScrollTrigger.create({
            trigger: stat,
            start: "top 95%", // Trigger earlier when element enters viewport
            once: true,
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2, // Slightly faster for punchier feel
                    ease: "power1.out",
                    onUpdate: () => {
                        stat.textContent = Math.ceil(obj.val) + "+";
                    }
                });
            }
        });
    });

    // 2. Navigation Blur/Shrink Effect
    const nav = document.querySelector('nav');
    ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
            if (self.direction === 1) { // Scrolling down
                gsap.to(nav, {
                    y: -20,
                    padding: '0.5rem 1.5rem',
                    background: 'rgba(5, 5, 5, 0.8)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
                    duration: 0.3
                });
            } else { // Scrolling up
                gsap.to(nav, {
                    y: 0,
                    padding: '0.8rem 2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: 'var(--glass-shadow)',
                    duration: 0.3
                });
            }
        }
    });

    // 3. Hero Section Parallax & Reveal
    gsap.to('.hero-bg img', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });


    // 4. Section Reveals (Staggered) - Subtle animation without opacity flicker
    const animateSections = () => {
        document.querySelectorAll('section').forEach(section => {
            const elements = section.querySelectorAll('.animate-in');
            if (elements.length > 0) {
                gsap.from(elements, {
                    y: 30,
                    // Removed opacity animation to prevent flickering
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        });
    };
    animateSections();

    // 5. Magnetic Emergency Button Effect
    const emergencyBtn = document.querySelector('.btn-primary');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('mousemove', (e) => {
            const rect = emergencyBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(emergencyBtn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        emergencyBtn.addEventListener('mouseleave', () => {
            gsap.to(emergencyBtn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    }

    // 6. Form Handling (Keep Functional)
    const emergencyForm = document.getElementById('emergency-form');
    if (emergencyForm) {
        emergencyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = emergencyForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Dispatching...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Dispatched!';
                btn.style.background = '#00C9C8';
                btn.style.color = '#050505';
                emergencyForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // 7. Smooth Scrolling via GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power4.inOut'
            });
        });
    });

    // 8. Interactive Gallery Carousel
    const track = document.querySelector('.gallery-track');
    if (track) {
        const trackWidth = track.scrollWidth;
        const wrapperWidth = track.parentElement.offsetWidth;

        Draggable.create(track, {
            type: "x",
            bounds: {
                minX: -(trackWidth - wrapperWidth + (window.innerWidth * 0.1)),
                maxX: 0
            },
            inertia: true,
            edgeResistance: 0.65
        });

        const moveAmount = 450;
        document.getElementById('next-btn').addEventListener('click', () => {
            gsap.to(track, {
                x: `-=${moveAmount}`,
                duration: 0.8,
                ease: "power2.out",
                modifiers: {
                    x: gsap.utils.unitize(x => {
                        const min = -(trackWidth - wrapperWidth + (window.innerWidth * 0.1));
                        return Math.max(min, x);
                    })
                }
            });
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            gsap.to(track, {
                x: `+=${moveAmount}`,
                duration: 0.8,
                ease: "power2.out",
                modifiers: {
                    x: gsap.utils.unitize(x => Math.min(0, x))
                }
            });
        });
    }
    // 9. Back to Top & Logo Navigation
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            const currentPath = window.location.pathname;
            const isHomePage = currentPath === '/' ||
                currentPath === '/index.html' ||
                (currentPath.endsWith('/') && !currentPath.includes('/authority-hub')) ||
                (currentPath.endsWith('/index.html') && !currentPath.includes('/authority-hub'));

            if (isHomePage) {
                // Only scroll to top if we are truly on the root homepage
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
});
