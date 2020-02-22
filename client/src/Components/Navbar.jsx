import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = (props) => {
    const [darkMode, setDarkMode] = useDarkMode();
    //console.log(useDarkMode);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
        console.log(darkMode);
        props.setTestDarkMode(!props.testDarkMode)
    };
    
    return (
        <nav className="navbar">
        <h1>Soccer Players</h1>
        <div className="dark-mode__toggle">
            <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
        </nav>
    );
};

export default Navbar;