'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

interface PreloaderProps {
    images: string[];
    onLoaded: () => void;
}

export default function Preloader({ images, onLoaded }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let loadedCount = 0;

        const updateProgress = () => {
            loadedCount++;
            const percent = Math.round((loadedCount / images.length) * 100);
            setProgress(percent);

            if (loadedCount === images.length) {
                // خروج احترافي
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    scale: 1.1,
                    duration: 1,
                    ease: 'power3.inOut',
                    onComplete: onLoaded,
                });
            }
        };

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = updateProgress;
            img.onerror = updateProgress;
        });

        // Pulse Animation
        gsap.to('.logo', {
            scale: 1.1,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });

    }, [images, onLoaded]);

    return (
        <div className="preloader" ref={loaderRef}>
            <div className="loader-content">
                <div className="logo">SAIF</div>

                <div className="loading-text">
                    Loading <span>{progress}%</span>
                </div>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
