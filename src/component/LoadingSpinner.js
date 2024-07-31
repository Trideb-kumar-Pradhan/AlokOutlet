// LoadingSpinner.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop:'0px' }}>
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;