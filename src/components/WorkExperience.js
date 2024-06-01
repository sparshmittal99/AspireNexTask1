import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="work-experience">
            <h2>Work Experience</h2>
            <h3>Software Engineer Intern at Springer Capital</h3>
            <p>April 2024 – May 2024</p>
            <ul>
                <li>Assisted in the design, development, testing, and deployment of a real estate crowdfunding platform...</li>
                <li>Collaborated with cross-functional teams enhancing development efficiency by 30-40%...</li>
                <li>Participated in software testing to meet quality standards...</li>
            </ul>
            <h3>Open-Source Contributor at Kuberflow</h3>
            <p>Feb 2024 – Present</p>
            <ul>
                <li>Addressed validation issue of webhook for image names by containerizing with Docker...</li>
            </ul>
        </section>
    </motion.div>
);

export default WorkExperience;
