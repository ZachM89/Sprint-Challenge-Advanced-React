import React, { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState('dark-mode', false);
    console.log(darkMode);
    console.log(setDarkMode);

    return [darkMode, setDarkMode];
}