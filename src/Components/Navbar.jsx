import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

// Define navigation items with their icons, labels, and target hrefs
const navItems = [
  { icon: <FaHome />, label: 'Home', href: '#' }, // Changed to #about, assuming Hero is the about section
  { icon: <FaCode />, label: 'Skills', href: '#what-i-do' },
  { icon: <FaProjectDiagram />, label: 'Projects', href: '#projects' },
  { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
];

// Map navItems to their corresponding section IDs for scroll tracking
const sectionIds = navItems.map(item => item.href);

const Navbar = () => {
  const [active, setActive] = useState(0); // State to track the currently active navigation item
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility on scroll
  const prevScrollPos = React.useRef(window.pageYOffset); // Track previous scroll position

  // Effect to handle scroll events for active link highlighting and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a buffer for section activation to improve UX, e.g., 100px from top
      const offsetBuffer = 100; 

      // Get all section elements from the DOM
      const sections = sectionIds.map(id => {
        if (id === '#') return { id: '#', offsetTop: 0, scrollHeight: 0 }; // Special handling for home/top
        const el = document.querySelector(id);
        return el ? { id, offsetTop: el.offsetTop, scrollHeight: el.scrollHeight } : null;
      }).filter(Boolean); // Filter out any nulls if a section isn't found

      let currentActiveIndex = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        // Check if scrollY is within the bounds of the current section
        if (scrollY + offsetBuffer >= section.offsetTop) {
          currentActiveIndex = i;
          break;
        }
      }
      setActive(currentActiveIndex);

      // --- Navbar visibility on scroll ---
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos || currentScrollPos < 10) {
        setIsVisible(true); // Show if scrolling up or at top
      } else {
        setIsVisible(false); // Hide if scrolling down
      }
      prevScrollPos.current = currentScrollPos; // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handler for navigation item clicks
  const handleNavClick = (e, href, idx) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setActive(idx); // Set the clicked item as active

    let targetOffset = 0;
    if (href !== '#') {
      const el = document.querySelector(href);
      if (el) {
        // Adjust scroll position to account for a fixed header or desired offset
        targetOffset = el.offsetTop - 80; // Adjusted for a bit more padding from the top
      }
    }
    
    // Smooth scroll to the calculated target offset
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
  };

  return (
    // Responsive Navbar: bottom bar on mobile, right vertical on md+
    <nav 
      className={`fixed top-1/2 -translate-y-1/2 right-2 md:right-2 lg:right-12 z-50 
                  flex flex-col bg-[#1f1f2a] rounded-full shadow-2xl p-2 
                  transition-all duration-300 transform 
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-y-full md:translate-x-full opacity-0'}`}
      aria-label="Main Navigation"
    >
      <div className="flex flex-row md:flex-col items-center justify-center h-full w-full py-2 md:py-4 gap-4"> 
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={`Maps to ${item.label} section`}
            tabIndex={0}
            onClick={e => handleNavClick(e, item.href, idx)}
            className={`group relative flex items-center justify-center p-3 rounded-full 
                        transition-all duration-300 text-2xl 
                        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 
                        ${active === idx ? 'bg-yellow-500 text-[#181824] shadow-md' : 'text-gray-400 hover:text-yellow-400 hover:bg-[#2a2a3f]'}`}
          >
            <span className="relative z-10"> 
              {item.icon}
            </span>
            {active === idx && (
              <span className="absolute -right-1 md:static md:hidden top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse-slow"></span>
            )}
            <span className="absolute right-full md:right-auto md:left-full md:ml-4 ml-4 px-3 py-1 bg-[#2a2a3f] text-white text-sm rounded-md shadow-lg
                          opacity-0 group-hover:opacity-100 group-focus:opacity-100 
                          transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;