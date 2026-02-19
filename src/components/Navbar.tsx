import {
    useEffect,
    useRef,
    useState
}

    from 'react';

import {
    gsap
}

    from 'gsap';
import './Navbar.css';
import logo from '../assets/صور/لوجو/لوجو.webp';

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const [mobileMenuOpen,
        setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        gsap.fromTo(nav,
            {
                y: -100, opacity: 0
            }

            ,
            {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5
            });

        const handleScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            }

            else {
                nav.classList.remove('scrolled');
            }
        }

            ;

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }

        , []);

    useEffect(() => {
        if (menuRef.current) {
            if (mobileMenuOpen) {
                gsap.to(menuRef.current, {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            else {
                gsap.to(menuRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        }
    }

        , [mobileMenuOpen]);

    return (<nav ref={
        navRef
    }

        className="navbar" > <div className="navbar-container" > <div className="navbar-left" > <a href="#home" className="nav-link" >Home</a> <a href="#about" className="nav-link" >About</a> </div> <div className="navbar-center" > <img src={
            logo
        }

            alt="Logo" className="navbar-logo" /> </div> <div className="navbar-right" > <a href="#services" className="nav-link" >Services</a> <a href="#contact" className="nav-link" >Contact</a> </div> <button className="mobile-menu-toggle"

                onClick={
                    () => setMobileMenuOpen(!mobileMenuOpen)
                }

                aria-label="Toggle menu"

            > <span></span> <span></span> <span></span> </button> </div> <div ref={
                menuRef
            }

                className="mobile-menu" > <a href="#home" className="mobile-nav-link" >Home</a> <a href="#about" className="mobile-nav-link" >About</a> <a href="#services" className="mobile-nav-link" >Services</a> <a href="#contact" className="mobile-nav-link" >Contact</a> </div> </nav>);
}

    ;

export default Navbar;