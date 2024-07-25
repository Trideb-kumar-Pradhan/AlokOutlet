
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 3px ',
        marginTop: '20px',
        textAlign: 'center',
        width:'100%'
        
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Alok Industries Pvt Ltd
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit">
        Design BY_Trideb
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;