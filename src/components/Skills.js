import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li><strong>Programming Languages:</strong> C/C++, Java, Python, Golang, HTML, CSS, JavaScript, TypeScript, SQL</li>
                <li><strong>Technologies & Tools:</strong> Oracle Cloud Infrastructure, Docker, Kubernetes, Git, JIRA, Data Structures, OOP, ML Algorithms, AI, NLP, LLM, API, Node.js, Agile Methodology, CI/CD (GitLab CI), Storage Concepts, Software Testing</li>
                <li><strong>Libraries/Frameworks:</strong> ReactJS, AngularJS, TensorFlow, PyTorch, Keras, NLTK, NumPy, Pandas, Scikit-Learn, Django</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
                <li><strong>Operating Systems:</strong> Linux, Windows</li>
                <li><strong>Soft Skills:</strong> Communication, Collaboration, Attention to Detail, Effective Teamwork, Analytical Problem-Solving, Adaptability, Interpersonal Skills, Willingness to Learn New Skills</li>
            </ul>
        </section>
    </motion.div>
);

export default Skills;
