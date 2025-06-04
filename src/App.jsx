import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Email from './components/Email';
import Loader from './components/Loader';
import { fetchAboutData, fetchExperienceData, fetchProjectsData } from './services/api';

const App = () => {
  // State to store data fetched from the backend
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect to fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data in parallel for better performance
        const [about, experience, projects] = await Promise.all([
          fetchAboutData(),
          fetchExperienceData(),
          fetchProjectsData()
        ]);

        // Update state with fetched data
        setAboutData(about);
        setExperienceData(experience);
        setProjectsData(projects);
        
        // Set loading to false after data is fetched
        setTimeout(() => setLoading(false), 2000);  // Add a minimum loading time for effect
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <About data={aboutData} />
        {/* <Experience data={experienceData} /> */}
        <Projects data={projectsData} />
        <Contact />
      </main>
      
      {/* Side elements */}
      <Social />
      <Email />
    </div>
  );
};

export default App;