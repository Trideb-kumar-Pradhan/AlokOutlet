









// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen width is small

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar style={{ backgroundColor: '#F98129' }}>
//         <Typography
//       variant="h6"
//       sx={{
//         flexGrow: 1,
//         color: 'white',
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 'bold',
//         paddingLeft: '7px',
//         letterSpacing: '0.1em',
//         textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
//         textTransform: 'uppercase',
//         fontSize: {
//           xs: '1.2rem',  // small screens
//           sm: '1.4rem',  // medium screens
//           md: '1.7rem'   // large screens
//         },
//       }}
//     >
//       FACTORY OUTLET
//     </Typography>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleDrawerOpen}
//             style={{ display: isSmallScreen ? 'block' : 'none', color: 'white' }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Button component={Link} to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', display: isSmallScreen ? 'none' : 'block' }}>
//             HOME
//           </Button>
//           <Button color="inherit" component={Link} to="/cart" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', display: isSmallScreen ? 'none' : 'block' }}>
//             CART
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
//       <List
//         sx={{
//           width: 80,
//           // backgroundColor: '#F98129', // Background color for the entire drawer
//           padding: '10px',
//           height: '100%', // Ensure the drawer height covers the full view
//           display: 'flex',
//           flexDirection: 'column',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//         }}
//       >
//         <ListItem
//           button
//           component={Link}
//           to="/"
//           onClick={handleDrawerClose}
//           sx={{
//             marginBottom: '10px', // Space between items
//             backgroundColor: '#F99000', // Different background color for list items
//             borderRadius: '4px', // Rounded corners for list items
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', // Shadow for list items
//             '&:hover': {
//               backgroundColor: '#FFC107', // Highlight color on hover
//             },
//           }}
//         >
//           <ListItemText primary="HOME" />
//         </ListItem>
//         <ListItem
//           button
//           component={Link}
//           to="/cart"
//           onClick={handleDrawerClose}
//           sx={{
            
//             backgroundColor: '#F99000', // Different background color for list items
//             borderRadius: '4px', // Rounded corners for list items
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', // Shadow for list items
//             '&:hover': {
//               backgroundColor: '#FFC107', // Highlight color on hover
//             },
//           }}
//         >
//           <ListItemText primary="CART" />
//         </ListItem>
//       </List>
//     </Drawer> */}
//     <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
//       <List
//         sx={{
//           width: 80,
//           padding: '10px',
//           height: '100%', // Ensure the drawer height covers the full view
//           display: 'flex',
//           flexDirection: 'column',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         }}
//       >
//         <ListItem
//           button
//           component={Link}
//           to="/"
//           onClick={handleDrawerClose}
//           sx={{
//             marginBottom: '10px', // Space between items
//             backgroundColor: '#F99000', // Background color for list items
//             borderRadius: '4px', // Rounded corners for list items
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', // Shadow for list items
//             '&:hover': {
//               backgroundColor: '#FFC107', // Highlight color on hover
//             },
//             padding: '6px 16px', // Reduce padding to make buttons smaller
//             height: '40px', // Set a specific height for buttons
//             alignItems: 'center', // Center items vertically
//             justifyContent: 'center', // Center items horizontally
//           }}
//         >
//           <ListItemText primary="HOME" />
//         </ListItem>
//         <ListItem
//           button
//           component={Link}
//           to="/cart"
//           onClick={handleDrawerClose}
//           sx={{
//             backgroundColor: '#F99000', // Background color for list items
//             borderRadius: '4px', // Rounded corners for list items
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', // Shadow for list items
//             '&:hover': {
//               backgroundColor: '#FFC107', // Highlight color on hover
//             },
//             padding: '6px 16px', // Reduce padding to make buttons smaller
//             height: '40px', // Set a specific height for buttons
//             alignItems: 'center', // Center items vertically
//             justifyContent: 'center', // Center items horizontally
//           }}
//         >
//           <ListItemText primary="CART" />
//         </ListItem>
//       </List>
//     </Drawer>
//     </>
//   );
// };

// export default Navbar;

import React from 'react'; 
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setToken, token }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
    setOpen(false); // Close the drawer on logout
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = token ? (
    <>
      <ListItem button component={Link} to="/home" onClick={handleDrawerClose}  sx={{
            margin: '10px', 
            backgroundColor: '#F99000', 
            borderRadius: '4px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
            '&:hover': {
              backgroundColor: '#FFC107', 
            },
            padding: '6px 16px',
          }}>
        <ListItemText primary="HOME" />
      </ListItem>
      <ListItem button component={Link} to="/cart" onClick={handleDrawerClose}  sx={{
            margin: '10px', 
            backgroundColor: '#F99000', 
            borderRadius: '4px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
            '&:hover': {
              backgroundColor: '#FFC107', 
            },
            padding: '6px 16px',
          }}>
        <ListItemText primary="CART" />
      </ListItem>
      <ListItem button onClick={handleLogout}  sx={{
            margin: '10px', 
            backgroundColor: '#F99000', 
            borderRadius: '4px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
            '&:hover': {
              backgroundColor: '#FFC107', 
            },
            padding: '6px 16px',
          }}>
        <ListItemText primary="LOGOUT" />
      </ListItem>
    </>
  ) : (
    <>
      <ListItem button component={Link} to="/login" onClick={handleDrawerClose}  sx={{
            margin: '10px', 
            backgroundColor: '#F99000',// Background color for list items
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
            '&:hover': {
              backgroundColor: '#FFC107',
            },
            padding: '6px 16px', 
          }}>
        <ListItemText primary="LOGIN" />
      </ListItem>
      <ListItem button component={Link} to="/signup" onClick={handleDrawerClose}  sx={{
            margin: '10px', 
            backgroundColor: '#F99000', 
            borderRadius: '4px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
            '&:hover': {
              backgroundColor: '#FFC107', 
            },
            padding: '6px 16px',
          }}>
        <ListItemText primary="SIGNUP" />
      </ListItem>
    </>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#F98129' }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              paddingLeft: '7px',
              letterSpacing: '0.1em',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
              textTransform: 'uppercase',
              fontSize: {
                xs: '1.2rem',
                sm: '1.4rem',
                md: '1.7rem'
              },
            }}
          >
            FACTORY OUTLET
          </Typography>

          {isSmallScreen ? (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {token ? (
                <>
                  <Button component={Link} to="/home" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                    HOME
                  </Button>
                  <Button color="inherit" component={Link} to="/cart" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                    CART
                  </Button>
                  <Button color="inherit" onClick={handleLogout} style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                    LOGOUT
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" component={Link} to="/login" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                    LOGIN
                  </Button>
                  <Button color="inherit" component={Link} to="/signup" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                    SIGNUP
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <List>
          {drawerItems }
        </List>
      </Drawer>


    </>
  );
};

export default Navbar;
