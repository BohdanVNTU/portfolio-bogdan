import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import { ThemeContext } from './themeContext';

/**
 * The App component sets up the application routes and wraps everything in a theme provider.
 */

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#000000', // change to black
            },
            secondary: {
                main: '#ffffff', // change to white
            },
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<About darkMode={darkMode} />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<ContactForm />} />
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default App;
