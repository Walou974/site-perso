import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './navbar.jsx';

function Header({ className, navbarSelectedSection, navbarOnSectionChange }) {
  const headerRef = useRef(null);

  const roles = [
  "Systems & Network Administrator",
    "Virtualization & Network Security",
  "Golden Rule: Always follow the 3-2-1 backup strategy.",

  "Linux & Windows Systems Admin",
  "Automation with Bash & Python",
  "Have you tried turning it off and on again?",

  "Infrastructure & Operations Specialist",
  "International IT Support & Monitoring",
  "No printer can resist my troubleshooting skills.",

];

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        // Calcule la hauteur exacte (inclut le titre + Typewriter + Navbar)
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight(); // Calcul au chargement initial

    // Observe les changements de taille du Header (redimensionnement écran, wrap de texte, etc.)
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={className}>
      <div className="header-content">
      <h1>Mael Albany</h1>

      <Typewriter
        options={{
          strings: roles,
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 75,
        }}
      />
      </div>
      <Navbar selectedSection={navbarSelectedSection} onSelectSection={navbarOnSectionChange} />
    </header>
  );
}

export default Header;