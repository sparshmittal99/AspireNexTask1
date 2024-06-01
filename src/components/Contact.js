import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:sparshmittal8b@gmail.com">sparshmittal8b@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/sparsh-mittal99" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sparsh-mittal99</a></p>
            <p>GitHub: <a href="https://github.com/sparshmittal99" target="_blank" rel="noopener noreferrer">https://github.com/sparshmittal99</a></p>
            <p>Download my resume: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>
        </section>
    </motion.div>
);

export default Contact;
