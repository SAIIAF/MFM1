import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const columnsRef = useRef<HTMLDivElement>(null);
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

        if (columnsRef.current) {
            tl.fromTo(
                columnsRef.current.children,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }

        
    }, []);

    return (
        <section ref={sectionRef} className="philosophy" id="services">
            <div className="philosophy-container">
                <div ref={columnsRef} className="philosophy-columns">
                    <div className="philosophy-column">
                        <div className="philosophy-icon">01</div>
                        <h3 className="philosophy-title">Systematic Approach</h3>
                        <p className="philosophy-description">
                            We believe in a methodical and structured approach to every project. Our systematic methodology ensures consistency, quality, and measurable results across all client engagements. By following proven frameworks and best practices, we deliver solutions that are both innovative and reliable.
                        </p>
                    </div>

                    <div className="philosophy-column">
                        <div className="philosophy-icon">02</div>
                        <h3 className="philosophy-title">Respect Matters</h3>
                        <p className="philosophy-description">
                            Respect is the foundation of every relationship we build. We treat our clients, partners, and team members with the highest level of professionalism and consideration. This mutual respect creates an environment where creativity flourishes and collaboration thrives.
                        </p>
                    </div>

                    <div className="philosophy-column">
                        <div className="philosophy-icon">03</div>
                        <h3 className="philosophy-title">Positive Message</h3>
                        <p className="philosophy-description">
                            We are committed to spreading positivity through every campaign and interaction. Our communications are designed to inspire, engage, and create meaningful connections. By focusing on optimistic and authentic messaging, we help brands build lasting emotional bonds with their audiences.
                        </p>
                    </div>
                </div>

                <button ref={buttonRef} className="philosophy-cta" id="contact">
                    <Phone className="cta-icon" size={24} />
                    <span>Call or mail to schedule your complimentary consult</span>
                </button>
            </div>
        </section>
    );
};

export default Philosophy;
