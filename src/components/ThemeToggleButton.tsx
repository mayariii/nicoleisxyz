
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline/index.js'
import { useEffect, useState } from 'react';
import { backgroundPrimaryHover, iconSize6, typographySecondary } from '../styles/styles';

export interface ThemeToggleButtonUIProps {
    toggleTheme: () => void
}

const ThemeToggleButtonUI: React.FC<ThemeToggleButtonUIProps> = ({ toggleTheme }) =>
    <button id='menu-btn' type="button" className={`${typographySecondary} ${backgroundPrimaryHover} rounded-lg text-sm p-2.5 inline-flex items-center`}
        onClick={toggleTheme}
        aria-label="Toggle between Dark and Light mode">
        <SunIcon className={`${iconSize6} dark:hidden`} />
        <MoonIcon className={`${iconSize6} hidden dark:block`} />
    </button>



export default function ThemeToggleButton() {

    const [darkMode, setDarkMode] = useState(false);

    // check theme on component mount
    useEffect(() => {
        themeCheck();
    }, []);

    // check and reset theme when `darkMode` changes
    useEffect(() => {
        themeCheck();
    }, [darkMode]);


    // check and reset theme
    function themeCheck() {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }

    // handle toggle
    function toggleTheme() {
        const theme = localStorage.getItem("theme");
        if (theme) {
            localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        setDarkMode(!darkMode);
    };

    return (
        <ThemeToggleButtonUI toggleTheme={toggleTheme} />
    )
}


