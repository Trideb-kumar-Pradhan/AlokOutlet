

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor:'white' }}>
        <Typography variant="h6" style={{ flexGrow: 1, backgroundColor:'white' }}>
          
        </Typography>
        <Button  component={Link} to="/" style={{  color:'black', fontWeight:'bold',fontSize:'16px'}}>
          HOME
        </Button>
        <Button color="inherit" component={Link} to="/cart" style={{  color:'black',fontWeight:'bold',fontSize:'16px'}}>
          CART
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
