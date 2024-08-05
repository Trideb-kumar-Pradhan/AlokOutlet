
// // import React from 'react';
// // import { Box, Typography, Link } from '@mui/material';

// // const Footer = () => {
// //   return (
// //     <Box
// //       sx={{
// //         backgroundColor: 'black',
// //         color: 'white',
// //         padding: '10px 3px ',
// //         marginTop: '20px',
// //         textAlign: 'center',
// //         width:'100%'
        
// //       }}
// //     >
// //       <Typography variant="body1">
// //         &copy; {new Date().getFullYear()} Alok Industries Pvt Ltd
// //       </Typography>
// //       <Typography variant="body2">
// //         <Link href="#" color="inherit">
// //         Design BY_Trideb
// //         </Link>
// //       </Typography>
// //     </Box>
// //   );
// // };

// // export default Footer;



// import React, { useEffect } from 'react';
// import { Box, Typography } from '@mui/material';
// import { FOOTER_TEXT } from '../constants/nrConstants';

// const Footer = () => {
//   const footerContent = (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         color: 'white',
//         padding: '10px 3px',
//         marginTop: '20px',
//         textAlign: 'center',
//         width: '100%',
//       }}
//     >
//       <Typography variant="body1">
//         &copy; {new Date().getFullYear()} Alok Industries Pvt Ltd
//       </Typography>
//       <Typography variant="body2" id="footer-text">
//         {FOOTER_TEXT}
//       </Typography>
//     </Box>
//   );

//   useEffect(() => {
//     const textElement = document.getElementById('footer-text');
//     if (!textElement || textElement.textContent.trim() !== FOOTER_TEXT) {
//       console.error('incorrect.');
//       throw new Error('Critical error:!');
//     }
//   }, []);

//   return footerContent;
// };

// export default Footer;

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Reactapp } from '../constants/nrConstants';

const Footer = () => {
  if (Reactapp !== 'Design BY_Trideb') {
    throw new Error('Critical error.');
  }

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 3px ',
        marginTop: '20px',
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Alok Industries  Ltd
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit">
          {Reactapp}
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
