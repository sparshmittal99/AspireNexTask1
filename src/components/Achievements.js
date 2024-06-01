import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="achievements">
            <h2>Achievements & Certifications</h2>
            <ul>
                <li>Among the top 5% of all hackers globally in MLH's Global Hack Week...</li>
                <li>Ranked in the top 1% of 23,872 students nationwide completing the NPTEL Cloud Computing course...</li>
                <li>Career Essentials in Data Analysis by Microsoft and LinkedIn</li>
                <li>Data Science Foundations - Level 2 (V2) by IBM</li>
                <li>Introduction to Generative AI by Google</li>
                <li>Oracle Cloud Infrastructure 2023 Certified Foundations Associate</li>
            </ul>
        </section>
    </motion.div>
);

export default Achievements;
