import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    // Theme Function
    // Toggle between light and dark
    const toggleTheme = () => {
        // setTheme(selectedTheme);
        setTheme((prevTheme) => prevTheme === 'dark' ? "light" : "dark")
    };

    useEffect(() => {
        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Check system preference if no saved theme
            const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(systemPreference ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        // Apply the theme to the root element
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            // System theme detection
            const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", systemPreference);
            localStorage.setItem("theme", "system");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
