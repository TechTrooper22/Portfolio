import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
  // State for animation timing
  const [animate, setAnimate] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${animate ? "animate" : ""}`}>
        {/* Small greeting text */}
        <p className="greeting">Hi, my name is</p>

        {/* Name and title with animated reveal */}
        <h1 className="name">Tejas Shrikhande.</h1>
        <h2 className="tagline">I build things for the web.</h2>

        {/* Description */}
        <p className="description">
          I'm a web developer with a passion for building fast, responsive, and
          scalable web applications. I specialize in turning ideas into clean,
          functional code using modern web technologies.
        </p>

        {/* CTA Button */}
        <div className="cta">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn cta-btn"
          >
            Check out my work!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;