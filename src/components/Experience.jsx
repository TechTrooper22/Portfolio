import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = ({ data }) => {
  // Fallback data in case API call fails
  const fallbackData = [
    {
      company: "Google",
      title: "Software Engineer",
      range: "January 2020 - Present",
      url: "https://www.google.com",
      description: [
        "Developed and maintained critical infrastructure for internal tools",
        "Collaborated with UX team to implement responsive designs",
        "Optimized application for maximum speed and scalability",
        "Built and shipped new features for the flagship product"
      ]
    },
    {
      company: "Facebook",
      title: "Frontend Developer",
      range: "July 2017 - December 2019",
      url: "https://www.facebook.com",
      description: [
        "Worked on a team responsible for developing new features for the news feed",
        "Improved the architecture of the company's flagship application",
        "Implemented reusable components that improved development speed by 40%",
        "Collaborated with cross-functional teams to deliver projects on schedule"
      ]
    },
    {
      company: "Amazon",
      title: "Junior Developer",
      range: "March 2015 - June 2017",
      url: "https://www.amazon.com",
      description: [
        "Implemented responsive web design principles to ensure compatibility across all devices",
        "Developed and maintained code for client websites primarily using HTML, CSS, JavaScript, and jQuery",
        "Assisted in debugging and troubleshooting website issues",
        "Coordinated with design team to implement new features and design changes"
      ]
    }
  ];

  // Use actual data or fallback if API call fails
  const jobs = data.length > 0 ? data : fallbackData;
  
  // State to track active tab
  const [activeTabId, setActiveTabId] = useState(0);
  
  // Refs for animations
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const highlighterRef = useRef(null);

  // Update highlighter position when active tab changes
  useEffect(() => {
    const activeTab = document.getElementById(`tab-${activeTabId}`);
    const highlighter = highlighterRef.current;
    
    if (activeTab && highlighter) {
      highlighter.style.transform = `translateY(${activeTab.offsetTop}px)`;
      highlighter.style.height = `${activeTab.offsetHeight}px`;
    }
  }, [activeTabId]);

  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      {/* Section heading */}
      <div className="section-heading">
        <span className="heading-number">02.</span>
        <h2>Where I've Worked</h2>
      </div>

      <div className="jobs-container">
        {/* Tab navigation bar */}
        <div className="tabs" role="tablist" aria-label="Job tabs" ref={tabsRef}>
          {/* Animated highlighter */}
          <span className="highlighter" ref={highlighterRef}></span>
          
          {/* Tab buttons for each job */}
          {jobs.map((job, i) => (
            <button
              key={i}
              id={`tab-${i}`}
              className={`tab ${activeTabId === i ? 'active' : ''}`}
              onClick={() => setActiveTabId(i)}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
        </div>

        {/* Tab panels that show job details */}
        <div className="content">
          {jobs.map((job, i) => (
            <div
              key={i}
              id={`panel-${i}`}
              className={`job-panel ${activeTabId === i ? 'active' : ''}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}
            >
              <h3 className="title">
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="range">{job.range}</p>
              <ul className="description">
                {job.description.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;