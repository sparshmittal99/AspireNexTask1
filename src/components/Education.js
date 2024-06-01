import React from 'react';
import { motion } from 'framer-motion';

const Education = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="education">
            <h2>Education</h2>
            <p><strong>VIT Bhopal University</strong></p>
            <p>B.Tech. in Computer Science and Engineering</p>
            <p>Oct 2021 – Present | CGPA: 8.72/10</p>
        </section>
    </motion.div>
);

export default Education;
