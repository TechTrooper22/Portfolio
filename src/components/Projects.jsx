import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import StreamNest from "../../Files/StreamNest.jpg";
import SwiftBasket from "../../Files/SwiftBasket.png";
import PowerBI from "../../Files/PowerBI.png";

const Projects = ({ data }) => {
  // Fallback data in case API call fails
  const fallbackData = [
    {
      title: "SwiftBasket",
      description:
        "SwiftBasket is a MERN stack e-commerce app with JWT auth, product search/filters, real-time cart, and invoice emails. It has a Flipkart-like UI (CSS Grid/Flexbox), React Router, and CDN assets for fast performance. Clean, scalable, and lightweight.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Plain CSS",
        "JWT",
      ],
      github: "https://github.com/TechTrooper22/SwiftBasket",
      external: "https://swift-basket-9b26.vercel.app/",
      image: SwiftBasket,
    },
    {
      title: "StreamNest",
      description:
        "StreamNest is a responsive YouTube-like video streaming platform clone featuring a modern UI with dark/light mode toggle, sidebar navigation, video categories, and a grid layout for video thumbnails. It includes interactive elements like search functionality, sidebar toggle, and a clean user interface designed for both desktop and mobile devices.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github:
        "https://github.com/TechTrooper22/HTML_CSS_JS/tree/main/StreamNest",
      external: "https://techtrooper22.github.io/StreamNest/",
      image: StreamNest,
    },
    {
      title: "Laptop Power BI Dashboard",
      description:
        "The Laptop Details Power BI report offers a concise, interactive overview of various laptop specifications such as brand, processor, RAM, storage, and pricing. It features dynamic visuals like bar charts, tables, and slicers to allow real-time filtering and comparison. Designed for data-driven decision-making, the report helps users analyze product offerings, track pricing trends, and identify top-performing configurations for procurement or sales strategy.",
      technologies: ["Power BI", "Data Visualization"],
      github:
        "https://github.com/TechTrooper22/Power-BI/blob/main/Laptop%20Details.pbix",
      external:
        "https://github.com/TechTrooper22/Power-BI/blob/main/Laptop%20Details.pbix",
      image: PowerBI,
    },
    {
      title: "Task Management System",
      description:
        "A productivity app for managing tasks with features like drag-and-drop organization, priority levels, and deadline notifications.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/username/task-manager",
      external: "https://taskmanager-demo.com",
      image:
        "https://images.pexels.com/photos/5904932/pexels-photo-5904932.jpeg", // Replaced with a placeholder
    },
  ];

  // Use actual data or fallback if API call fails
  const projects = data.length > 0 ? data : fallbackData;

  // Reference to the projects section for scroll animations
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Add refs for each project
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects]);

  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [projects]);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Section heading */}
      <div className="section-heading">
        <span className="heading-number">03.</span>
        <h2>Some Things I've Built</h2>
      </div>

      <ul className="projects-grid">
        {projects.map((project, i) => (
          <li 
            key={i} 
            className="project"
            ref={el => projectRefs.current[i] = el}
          >
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.technologies.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.external} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;