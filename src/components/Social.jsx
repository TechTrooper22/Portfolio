import React, { useState, useEffect } from "react";
import "../styles/Social.css";

const Social = () => {
  // State to control animation
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/TechTrooper22",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-github"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejas-shrikhande/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Tejas_220203",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-twitter"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_.t.e.j.a.s.22._/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "CodePen",
      url: "https://codepen.io/TechTrooper22",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-codepen"
        >
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className={`social ${isMounted ? "show" : ""}`}>
      <ul className="social-list">
        {socialLinks.map(({ name, url, icon }, i) => (
          <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
