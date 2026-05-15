import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useInitAnimations = () => {
    const location = useLocation();

    useEffect(() => {
        const init = () => {
            const $ = window.$;
            if (!$) return;

            /* Init Counter */
            if ($('.counter').length) {
                $('.counter').counterUp({ delay: 6, time: 3000 });
            }

            /* Swiper Init */
            if (window.Swiper) {
                if ($('.hero-slider-layout').length) {
                    new window.Swiper('.hero-slider-layout .swiper', {
                        effect: 'fade',
                        slidesPerView : 1,
                        speed: 1000,
                        spaceBetween: 0,
                        loop: true,
                        autoplay: { delay: 4000 },
                        pagination: { el: '.hero-pagination', clickable: true },
                    });
                }
                
                if ($('.testimonial-slider').length) {
                    new window.Swiper('.testimonial-slider .swiper', {
                        slidesPerView : 1,
                        speed: 1000,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: { delay: 3000 },
                        pagination: { el: '.swiper-pagination', clickable: true },
                        navigation: { nextEl: '.testimonial-btn-next', prevEl: '.testimonial-btn-prev' },
                        breakpoints: {
                            768:{ slidesPerView: 1 },
                            991:{ slidesPerView: 1 }
                        }
                    });
                }
            }

            /* Text Effect Animation */
            if ($('.text-anime-style-1').length && window.SplitText && window.gsap) {
                let staggerAmount = 0.05,
                    delayValue = 0.5,
                    animatedTextElements = document.querySelectorAll('.text-anime-style-1');
                
                animatedTextElements.forEach((element) => {
                    let animationSplitText = new window.SplitText(element, { type: "chars, words" });
                    window.gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: 20,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        scrollTrigger: { trigger: element, start: "top 85%" },
                    });
                });		
            }
            
            if ($('.text-anime-style-2').length && window.SplitText && window.gsap) {				
                let staggerAmount = 0.03,
                    translateXValue = 20,
                    delayValue = 0.1,
                    easeType = "power2.out",
                    animatedTextElements = document.querySelectorAll('.text-anime-style-2');
                
                animatedTextElements.forEach((element) => {
                    let animationSplitText = new window.SplitText(element, { type: "chars, words" });
                    window.gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                        scrollTrigger: { trigger: element, start: "top 85%"},
                    });
                });		
            }
            
            if ($('.text-anime-style-3').length && window.SplitText && window.gsap) {		
                let animatedTextElements = document.querySelectorAll('.text-anime-style-3');
                
                animatedTextElements.forEach((element) => {
                    if (element.animation) {
                        element.animation.progress(1).kill();
                        element.split.revert();
                    }

                    element.split = new window.SplitText(element, {
                        type: "lines,words,chars",
                        linesClass: "split-line",
                    });
                    window.gsap.set(element, { perspective: 400 });

                    window.gsap.set(element.split.chars, {
                        opacity: 0,
                        x: "50",
                    });

                    element.animation = window.gsap.to(element.split.chars, {
                        scrollTrigger: { trigger: element,	start: "top 90%" },
                        x: "0",
                        y: "0",
                        rotateX: "0",
                        opacity: 1,
                        duration: 1,
                        ease: window.Back ? window.Back.easeOut : "back.out(1.7)",
                        stagger: 0.02,
                    });
                });		
            }

            /* Parallaxie js */
            if (window.$ && $.fn.parallaxie) {
                $('.parallaxie').parallaxie({
                    speed: 0.55,
                    offset: 0,
                });
            }

            /* Zoom Gallery screenshot */
            if ($('.gallery-items').length && $.fn.magnificPopup) {
                $('.gallery-items').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    closeOnContentClick: false,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom',
                    image: { verticalFit: true },
                    gallery: { enabled: true },
                    zoom: {
                        enabled: true,
                        duration: 300, 
                        opener: function(element) {
                            return element.find('img');
                        }
                    }
                });
            }

            /* Animated Wow Js */
            if (window.WOW) {
                if (!window.wowInstance) {
                    window.wowInstance = new window.WOW({
                        live: false // Do not use mutation observer, we will sync manually
                    });
                    window.wowInstance.init();
                } else {
                    // Sync wow elements
                    window.wowInstance.sync();
                }
                // Force wow elements to be visible if they are already in viewport (React sometimes causes timing issues)
                setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                }, 300);
            }

            /* Popup Video */
            if ($('.popup-video').length && $.fn.magnificPopup) {
                $('.popup-video').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            }
        };

        // Run after a slight delay to ensure DOM is rendered by React
        // We run it multiple times to ensure everything catches up
        const timer1 = setTimeout(init, 100);
        const timer2 = setTimeout(init, 500);
        const timer3 = setTimeout(init, 1000);
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [location]);
};
