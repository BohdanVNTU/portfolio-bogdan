import React from 'react';

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
    darkMode: false,
    toggleDarkMode: () => {},
});
