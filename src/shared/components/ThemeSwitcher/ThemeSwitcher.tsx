import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.dataset['theme'] = 'dark'
        } else {
            root.dataset["theme"] = 'ligth'
        }

    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer float-right relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 ${darkMode ? "bg-industrial" : "bg-rice"
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full  bg-industrial dark:bg-rice transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    );
};

export default ThemeToggle;
