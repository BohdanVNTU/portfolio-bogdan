import React, {useContext} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Typography, Button, Tooltip} from '@mui/material';
import {ThemeContext} from '../themeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

/**
 * The Navigation component renders the navigation bar at the top of the page.
 */

const Navigation: React.FC = () => {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <RouterLink to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                        <Typography variant="h6">Photographer</Typography>
                    </RouterLink>
                </IconButton>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/gallery">
                    Gallery
                </Button>
                <Button color="inherit" component={RouterLink} to="/contact">
                    Contact
                </Button>
                <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
