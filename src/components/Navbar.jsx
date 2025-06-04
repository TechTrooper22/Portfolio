import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  // State to track whether navbar is visible
  const [show, setShow] = useState(true);
  // State to track scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  // State to control mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  // Close menu on resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // Navigation items
  const navItems = [
    { name: "About", to: "about", offset: -100 },
    // { name: "Experience", to: "experience", offset: -80 },
    { name: "Work", to: "projects", offset: -80 },
    { name: "Contact", to: "contact", offset: -40 },
  ];

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <nav>
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <svg width="42" height="42" viewBox="0 0 100 100">
              <polygon
                points="50,5 95,25 95,75 50,95 5,75 5,25"
                stroke="var(--green)"
                strokeWidth="5"
                fill="none"
              />
              <text
                x="50"
                y="70"
                textAnchor="middle"
                fill="var(--green)"
                fontSize="50"
                fontFamily="var(--font-mono)"
              >
                T
              </text>
            </svg>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ol>
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  onClick={() => {
                    setMenuOpen(false);
                    document.body.style.overflow = "auto";
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ol>
          <div className="resume-button">
            <a
              href="../../Files\resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
