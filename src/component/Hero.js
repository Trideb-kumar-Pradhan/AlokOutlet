import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../assets/AB.png'; 
import logo from '../assets/ad.png';

const Hero = () => {
  return (
    <div>
 
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:'none',
        paddingTop:'36px',
        height: '70vh',
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        // color: 'white',
        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        marginBottom:'10px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '20px',
        }}
      >

      </Box>
      
    </Box>
    </div>

  );
};

export default Hero;