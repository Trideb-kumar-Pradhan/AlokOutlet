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
        paddingTop:'100px',
        // height: '',
        alignItems: 'center',
        marginBottom:'10px',
        '@media (min-width: 280px)': {
          height: '1vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 320px)': {
          height: '3vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 370px)': {
          height: '5vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 400px)': {
          height: '7vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 450px)': {
          height: '9vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 500px)': {
          height: '11vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 550px)': {
          height: '13vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 600px)': {
          height: '15vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 700px)': {
          height: '17vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 800px)': {
          height: '19vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 850px)': {
          height: '21vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 900px)': {
          height: '23vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 950px)': {
          height: '25vh',  // Adjust height for smaller screens
        },
        '@media (min-width: 1000px)': {
          height: '27vh',  // Adjust height for smaller screens
        },
        '@media (max-width: 1054px)': {
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
