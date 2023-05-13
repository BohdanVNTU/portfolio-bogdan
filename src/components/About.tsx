import React from 'react';
import {Avatar, Typography, Button, Box} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import photo from '../static/images/avatar/1.jpg';

/**
 * The About component displays the main information about the photographer.
 */

interface AboutProps {
    darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
            padding={2}
        >
            <Avatar
                alt="Photographer"
                src={photo}
                sx={{width: 256, height: 256}}
            />
            <Typography variant="h2" component="div" gutterBottom>
                Bogdan
            </Typography>
            <Typography variant="h5" gutterBottom>
                Welcome to my photography portfolio! I specialize in landscape and portrait photography.
            </Typography>
            <Button style={{marginTop: 15, color: darkMode ? 'white' : 'black', border: `1px solid ${darkMode ? 'white' : 'black'}`, background: 'none'}} variant="contained" component={RouterLink} to="/gallery">
                View Gallery
            </Button>
        </Box>
    );
};

export default About;
