import React from 'react';
import {Box, Container} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firstPhoto from '../static/images/photos/1.jpg';
import secondPhoto from '../static/images/photos/2.jpg';
import thirdPhoto from '../static/images/photos/3.jpg';
import fourthPhoto from '../static/images/photos/4.jpg';
import fifthPhoto from '../static/images/photos/5.jpg';
import sixthPhoto from '../static/images/photos/6.jpg';

const Gallery: React.FC = () => {
    const images = [firstPhoto, secondPhoto, thirdPhoto, fourthPhoto, fifthPhoto, sixthPhoto];

    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
                style={{minHeight: '60vh', maxHeight: '60vh', width: '100%', paddingTop: '2rem'}}
            >
                <Carousel dynamicHeight useKeyboardArrows emulateTouch>
                    {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Landscape ${index + 1}`}/>
                        </div>
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default Gallery;
