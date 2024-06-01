import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="projects">
            <h2>Projects</h2>
            <h3>Food Waste Management System (2022)</h3>
            <ul>
                <li>Developed a Food Donation Management System web application...</li>
                <li>Enhanced user authentication and donation submission processes using React and Django...</li>
            </ul>
            <h3>Hand Gesture Mouse and Voice Assistant (2022)</h3>
            <ul>
                <li>Created a hand gesture mouse and voice assistant application using real-time gesture recognition...</li>
                <li>Utilized OpenCV and Python to enable seamless interaction...</li>
            </ul>
            <h3>Credit Risk Analysis and Assessment (2023)</h3>
            <ul>
                <li>Developed a machine learning model to predict creditworthiness...</li>
            </ul>
            <h3>Real-Time Stock Price Prediction and Competitive Analysis for Portfolio (2024)</h3>
            <ul>
                <li>Built a web application to predict stock prices for the next week using machine learning algorithms...</li>
            </ul>
        </section>
    </motion.div>
);

export default Projects;
