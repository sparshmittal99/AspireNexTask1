import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Sparsh Mittal</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/work-experience">Work Experience</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
