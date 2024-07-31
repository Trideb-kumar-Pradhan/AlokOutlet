

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor:'#F98129'}}>
            <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.7rem',
            paddingLeft:'14px',
            letterSpacing: '0.1em',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
            textTransform: 'uppercase',
          }}
        >
          FACTORY OUTLET
        </Typography>
        <Button   component={Link} to="/" style={{  color:'white', fontWeight:'bold',fontSize:'16px'}}>
          HOME
        </Button>
        <Button color="inherit" component={Link} to="/cart" style={{  color:'white',fontWeight:'bold',fontSize:'16px'}}>
          CART
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

