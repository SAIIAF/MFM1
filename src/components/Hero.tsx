import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 1 });

        // Animate heading chars
        if (headingRef.current) {
            const chars = headingRef.current.textContent?.split('') || [];
            headingRef.current.innerHTML = chars
                .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
                .join('');

            tl.fromTo(
                headingRef.current.querySelectorAll('.char'),
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.02,
                    ease: 'power3.out'
                }
            );
        }

        // Animate subheading
        if (subheadingRef.current) {
            tl.fromTo(
                subheadingRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
            );
        }

        // Scroll button functionality
        if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.addEventListener('click', () => {
                const nextSection = document.getElementById('services'); // ضع هنا id السكشن اللي بعد الهيرو
                if (nextSection) {
                    const topPos = nextSection.offsetTop; // المسافة من أعلى الصفحة
                    window.scrollTo({
                        top: topPos,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }, []);

    return (
        <section className="hero" id="home">
            <video className="hero-video" autoPlay muted loop playsInline>
                <source src="/public/video/Screen Recording 2025-05-07.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 ref={headingRef} className="hero-heading">
                    Marketing Facility Management
                </h1>
                <p ref={subheadingRef} className="hero-subheading">
                    the company with more than 30 years experience in Egypt, Qatar, and KSA as an integrated marketing communications and public relations firm.
                </p>
            </div>
            <div ref={scrollIndicatorRef} className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
