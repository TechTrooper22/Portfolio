import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State for form submission status
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });
  
  // Reference to the contact section for scroll animations
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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Set submitting status
      setStatus({
        submitting: true,
        submitted: false,
        success: false,
        message: ''
      });
      
      // Simulate API call to backend (replace with actual API call)
      // const response = await sendContactForm(formData);
      
      // Simulate successful submission with timeout
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Section heading */}
      <div className="section-heading">
        <span className="heading-number">04.</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-content">
        <h2 className="title">Let's Talk!</h2>
        <p className="subtitle">
          Whether you have a question, want to discuss a project, or just want
          to say hi, my inbox is always open. I'll try my best to get back to
          you as soon as possible!
        </p>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn submit-btn"
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status message */}
          {status.submitted && (
            <div
              className={`status-message ${
                status.success ? "success" : "error"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        {/* Alternative contact method */}
        <div className="alt-contact">
          <p>
            Prefer to email me directly?{" "}
            <a href="mailto:shrikhandetejas2202@gmail.com">
              shrikhandetejas2202@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;