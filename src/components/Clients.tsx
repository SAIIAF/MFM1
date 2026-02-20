// Clients.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Clients.css';
import client1 from '../assets/صور/about/abot1.jpg';
import client2 from '../assets/صور/about/about2.jpg';
import client3 from '../assets/صور/about/about3.jpg';
import client4 from '../assets/صور/لوجو/لوجو.webp';
import client5 from '../assets/صور/لوجو/لوجو2.webp';
import client6 from '../assets/صور/about/abot1.jpg';
import client7 from '../assets/صور/about/about2.jpg';
import client8 from '../assets/صور/about/about3.jpg';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const clientLogos = [client1, client2, client3, client4, client5, client6, client7, client8];

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = trackWidth - viewportWidth;

        // Horizontal scroll animation
        const horizontalScroll = gsap.to(track, {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance + viewportWidth / 2}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Each logo fade + scale animation
        track.querySelectorAll('.client-logo-item').forEach((logo) => {
            gsap.fromTo(
                logo,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: logo,
                        containerAnimation: horizontalScroll,
                        start: 'left 80%',
                        end: 'center 50%',
                        scrub: true,
                    },
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="clients" id="clients">
            <div className="clients-container">
                <h2 className="clients-title">Our Clients</h2>
                <p className="clients-subtitle">Trusted by leading brands worldwide</p>
                <div ref={trackRef} className="clients-track">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="client-logo-item">
                            <img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
