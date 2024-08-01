// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import heroImage from '../assets/AB.png'; 

// const Hero = () => {
//   return (
//     <div>
 
//     <Box
//       sx={{
//         position: 'relative',
//         backgroundImage: `url(${heroImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundColor:'none',
//         paddingTop:'36px',
//         height: '70vh',
//         alignItems: 'center',
//         marginBottom:'10px'
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 1,
//         }}
//       />
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//           padding: '20px',
//         }}
//       >

//       </Box>
      
//     </Box>
//     </div>

//   );
// };

// export default Hero;

import React from 'react';
import { Box } from '@mui/material';
import heroImage from '../assets/XY.png';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:'none',
        // paddingTop:'36px',
        height: '70vh',
        alignItems: 'center',
        marginBottom:'10px',
        '@media (max-width: 600px)': {
          height: '20vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 600px) and (max-width: 799px)': {
          height: '30vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 800px) and (max-width: 900px)': {
          height: '45vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 901px) and (max-width: 1024px)': {
          height: '70vh',  // Adjust height for medium screens
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default Hero;
