import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

// ✅ استيراد الصور من على الجهاز
import aboutImage1 from '../assets/صور/about/abot1.jpg';
import aboutImage2 from '../assets/صور/about/about2.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        if (textContentRef.current) {
            tl.fromTo(
                textContentRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        }

        if (imagesRef.current) {
            tl.fromTo(
                imagesRef.current.children,
                { x: 100, opacity: 0, scale: 0.8 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                },
                '-=0.5'
            );
        }

        if (buttonRef.current) {
            tl.fromTo(
                buttonRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Floating animation للصور
        

    }, []);

    return (
        <section ref={sectionRef} className="about" id="about">
            <div className="about-container">
                <div ref={textContentRef} className="about-text">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">
                        With over 30 years of excellence in marketing facility management,
                        we have established ourselves as a leading integrated marketing
                        communications and public relations firm across Egypt, Qatar,
                        and KSA.
                        With over 30 years of excellence in marketing facility management,
                        we have established ourselves as a leading integrated marketing
                        communications and public relations firm across Egypt, Qatar,
                        and KSA.
                    </p>
                    <button ref={buttonRef} className="about-button">
                        Learn More
                    </button>
                </div>

                <div ref={imagesRef} className="about-images">
                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage1}
                            alt="Marketing team collaboration"
                            className="about-image"
                        />
                    </div>
                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage2}
                            alt="Professional meeting"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
