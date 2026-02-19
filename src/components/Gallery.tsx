// Gallery.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

// استيراد الصور من فولدر المشروع
import gallery1 from '../assets/صور/about/abot1.jpg';
import gallery2 from '../assets/صور/about/about2.jpg';
import gallery3 from '../assets/صور/about/about3.jpg';
import gallery4 from '../assets/صور/about/abot1.jpg';
import gallery5 from '../assets/صور/about/about2.jpg';
import gallery6 from '../assets/صور/لوجو/لوجو2.webp';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const trackWidth = track.scrollWidth;
        const amountToScroll = trackWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${amountToScroll + window.innerHeight}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        tl.to(track, {
            x: -amountToScroll,
            ease: 'none'
        });

        const imageWrappers = track.querySelectorAll('.gallery-image-wrapper');
        imageWrappers.forEach((img) => {
            gsap.fromTo(
                img,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: img,
                        start: 'left right',
                        end: 'center center',
                        scrub: 1,
                        containerAnimation: tl
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="gallery">
            <div className="gallery-header">
                <h2 className="gallery-title">Our Work</h2>
                <p className="gallery-subtitle">Explore our portfolio of successful campaigns</p>
            </div>
            <div ref={trackRef} className="gallery-track">
                {images.map((src, index) => (
                    <div key={index} className="gallery-image-wrapper">
                        <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
