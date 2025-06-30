import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("darkTheme")
        setDarkMode(localStorageTheme !== "light");
        setHydrated(true)
    }, [])


    useEffect(() => {
        if (!hydrated) return;
        const theme = darkMode ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("darkTheme", theme);
    }, [darkMode]);

    if (!hydrated) return null;

    return (
        <button
            aria-label="change theme"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`mt-1 cursor-pointer float-right relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 ${darkMode ? "bg-industrial" : "bg-matcha"}`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-industrial dark:bg-matcha transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-1"}`}
            />
        </button>
    );
};

export default ThemeToggle;
