import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

import './styles.css';

const App = () => (
    <Router>
        <Header />
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    </Router>
);

export default App;
