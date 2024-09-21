// // import React from 'react';
// // import { Box } from '@mui/material';
// // import heroImage from '../assets/Offer3.jpg';

// // const Hero = () => {
// //   return (
// //     <Box
// //       sx={{
// //         position: 'relative',
// //         backgroundImage: `url(${heroImage})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         backgroundColor:'none',
// //         paddingTop:'99px',
// //         // height: '',
// //         alignItems: 'center',
// //         marginBottom:'10px',
// //         '@media (min-width: 280px)': {
// //           height: '1vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 320px)': {
// //           height: '4vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 360px)': {
// //           height: '5vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 370px)': {
// //           height: '7vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 400px)': {
// //           height: '10vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 450px)': {
// //           height: '13vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 500px)': {
// //           height: '16vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 550px)': {
// //           height: '18vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 600px)': {
// //           height: '22vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 700px)': {
// //           height: '27vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 800px)': {
// //           height: '25vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 870px)': {
// //           height: '29vh',  // Adjust height for smaller screens
// //         },
// //         '@media (min-width: 901px)': {
// //           height: '39vh',  // Adjust height for medium screens
// //         },
// //         '@media (min-width: 1000px)': {
// //           height: '45vh',  // Adjust height for medium screens
// //         },
// //         '@media (min-width: 1100px)': {
// //           height: '49vh',  // Adjust height for medium screens
// //         },
// //         '@media (min-width: 1200px)': {
// //           height: '54vh',  // Adjust height for medium screens
// //         },
// //         '@media (min-width: 1300px)': {
// //           height: '59vh',  // Adjust height for medium screens
// //         },
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           position: 'relative',
// //           zIndex: 2,
// //           textAlign: 'center',
// //           padding: '20px',
// //         }}
// //       >
// //         {/* Content goes here */}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Hero;

// import React from 'react';
// import { Box } from '@mui/material';
// import heroImage from '../assets/AB.png';

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         backgroundImage: `url(${heroImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundColor:'none',
//         paddingTop:'99px',
//         // margin: '-100px',
//         // height: '',
//         alignItems: 'center',
//         marginTop:'10px',
//         marginBottom:'10px',
//         '@media (min-width: 280px)': {
//           height: '1vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 320px)': {
//           height: '4vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 360px)': {
//           height: '5vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 370px)': {
//           height: '7vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 400px)': {
//           height: '10vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 450px)': {
//           height: '13vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 500px)': {
//           height: '16vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 550px)': {
//           height: '18vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 600px)': {
//           height: '22vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 700px)': {
//           height: '27vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 800px)': {
//           height: '25vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 870px)': {
//           height: '29vh',  // Adjust height for smaller screens
//         },
//         '@media (min-width: 901px)': {
//           height: '39vh',  // Adjust height for medium screens
//         },
//         '@media (min-width: 1000px)': {
//           height: '45vh',  // Adjust height for medium screens
//         },
//         '@media (min-width: 1100px)': {
//           height: '49vh',  // Adjust height for medium screens
//         },
//         '@media (min-width: 1200px)': {
//           height: '54vh',  // Adjust height for medium screens
//         },
//         '@media (min-width: 1300px)': {
//           height: '59vh',  // Adjust height for medium screens
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//           padding: '20px',
//         }}
//       >
//         {/* Content goes here */}
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
import React from 'react';
import { Box } from '@mui/material';
import heroImage from '../assets/ABG.png';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <img 
        src={heroImage} 
        alt="Hero" 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: 'auto', // Adjust height automatically to maintain aspect ratio
          transform: 'translate(-50%, -50%)', // Center the image
          objectFit: 'cover', // Ensures the image covers the area
        }} 
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white', // Change text color for visibility
        }}
      >
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default Hero;

// import React from 'react';
// import { Box } from '@mui/material';
// import heroImage from '../assets/ABG.png';

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         height: {
//           xs: '20vh', // For extra-small screens (mobile)
//           sm: '50vh', // For small screens (tablets)
//           md: '65vh', // For medium screens (desktops)
//           lg: '75vh', // For large screens
//         },
//         width: '100%',
//         overflow: 'hidden',
//       }}
//     >
//       <img 
//         src={heroImage} 
//         alt="Hero" 
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           width: '100%',
//           height: 'auto', // Adjust height automatically to maintain aspect ratio
//           transform: 'translate(-50%, -50%)', // Center the image
//           objectFit: 'cover', // Ensures the image covers the area
//         }} 
//       />
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//           color: 'white', // Change text color for visibility
//         }}
//       >
//         {/* Content goes here */}
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
