import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = 'http://localhost:5000/api';

// Get About section data
export const fetchAboutData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/about`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about data:', error);
    return null; // Return null to use fallback data
  }
};

// Get Experience section data
export const fetchExperienceData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/experience`);
    return response.data;
  } catch (error) {
    console.error('Error fetching experience data:', error);
    return []; // Return empty array to use fallback data
  }
};

// Get Projects section data
export const fetchProjectsData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects data:', error);
    return []; // Return empty array to use fallback data
  }
};

// Send contact form data
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error; // Re-throw to handle in component
  }
};