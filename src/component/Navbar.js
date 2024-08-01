
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen width is small

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        paddingLeft: '14px',
        letterSpacing: '0.1em',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
        textTransform: 'uppercase',
        fontSize: {
          xs: '1.2rem',  // small screens
          sm: '1.4rem',  // medium screens
          md: '1.7rem'   // large screens
        },
      }}
    >
      FACTORY OUTLET
    </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            style={{ display: isSmallScreen ? 'block' : 'none', color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', display: isSmallScreen ? 'none' : 'block' }}>
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/cart" style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', display: isSmallScreen ? 'none' : 'block' }}>
            CART
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button component={Link} to="/cart" onClick={handleDrawerClose}>
            <ListItemText primary="CART" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
