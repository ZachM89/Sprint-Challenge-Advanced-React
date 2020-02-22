import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Player } from './Components/Player';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './Components/Navbar';
import './styles.scss';

const App = () => {
    const [testDarkMode, setTestDarkMode] = useDarkMode();
    let [dMode, setDMode] = useState('App');

    useEffect(() => {
        // console.log(test);
        console.log(testDarkMode);
        //console.log(testSetDarkMode);
        
        if(testDarkMode) {
            setDMode('dark-mode');
        } else {
            setDMode('App');
            //console.log('test');
        }
    }, [testDarkMode]);

    return (
        <div className={dMode}>
            <Navbar testDarkMode={testDarkMode} setTestDarkMode={setTestDarkMode}/>
            <Player />
        </div>
    );
}

export default App;
