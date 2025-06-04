import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import img from '../../Files/profile_photo.JPG'; // Adjust the path as necessary

const About = ({ data }) => {
  // Fallback data in case API call fails
  const fallbackData = {
    bio: [
      "Hi, I'm Tejas, a passionate MERN stack developer with a B.Tech in Electronics and Telecommunication.",
      "I am specialize in building scalable web applications and solving complex problems through clean, maintainable code. With a strong foundation in JavaScript, React, and Node.js, I thrive on creating seamless user experiences and efficient backend systems.",
      "I believe in the power of collaboration and am always eager to share knowledge and learn from others in the tech community. In my free time, I contribute to open-source projects and engage in coding challenges to sharpen my skills.",
      "I am excited to connect with like-minded individuals and create impactful solutions together.",
    ],
    skills: [
      "C / C++",
      "Python",
      "Java",
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Responsive Design",
      "MERN Stack Development",
      "Power BI",
    ],
    image: img,
  };

  // Use actual data or fallback if API call fails
  const aboutInfo = data || fallbackData;
  
  // Reference to the about section for scroll animations
  const sectionRef = useRef(null);

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
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Section heading */}
      <div className="section-heading">
        <span className="heading-number">01.</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          {/* Bio paragraphs */}
          {aboutInfo.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Skills list */}
          <ul className="skills-list">
            {aboutInfo.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Profile image with styled wrapper */}
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <img 
              src={aboutInfo.image} 
              alt="Profile" 
              className="about-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;