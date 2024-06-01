import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/photo.jpg';  // Add your photo in the assets folder

const Home = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <section id="home">
            <h2>Welcome</h2>
            <img src={photo} alt="Sparsh Mittal" className="profile-photo" />
            <p>
                Hi, I'm Sparsh Mittal, a passionate Software Developer with a keen interest in AI/ML,
                Generative AI, and Data Science...
            </p>
        </section>
    </motion.div>
);

export default Home;
