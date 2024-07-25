
import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography, Alert, Grid, Box, IconButton, Divider } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';


const Cart = ({ cart = [], removeFromCart, addToCart, submitOrder }) => {
  const [formData, setFormData] = useState({
    empcode: '',
    name: '',
    address: '',
    mob: '',
    email: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm({ ...formData, [name]: value });
  };


  const validateForm = ({ name, address, email, mob, empcode }) => {
    if (
      cart.length > 0 &&
      name.trim() !== '' &&
      address.trim() !== '' &&
      email.trim() !== '' &&
      mob.trim() !== '' &&
      empcode.trim() !== ''
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };


  const handleAddToCart = (productId) => {
    addToCart(productId); 
  };


  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (cart.length === 0) {
      setError('Your cart is empty. Please add some products to the cart before submitting.');
      return;
    }

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalQuantity > 5) {
      setError('You cannot buy more than 5 products in a day');
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    // Format name and address fields
    const formattedName = formData.name.trim().replace(/\b\w/g, (char) => char.toUpperCase());
    const formattedAddress = formData.address.trim().replace(/\b\w/g, (char) => char.toUpperCase());

    const formattedCart = cart.map((item) => ({
      productId: item._id, 
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post('http://localhost:8000/submit-order', {
        ...formData,
        name: formattedName,
        address: formattedAddress,
        cart: formattedCart,
      });
      console.log('Order submitted successfully:', response.data);
      // Assuming `submitOrder` and `setOrderSubmitted` are defined elsewhere in your component
      submitOrder(formData);
      setOrderSubmitted(true);
      setTimeout(() => setOrderSubmitted(false), 3000);
      setFormData({ empcode: '', name: '', address: '', mob: '', email: '' });
      setSubmitDisabled(true);
    } catch (error) {
      setError('There was an error submitting the order.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Cart</Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Total Quantity: {totalQuantity}</Typography>
          <Typography variant="h5" gutterBottom>Total Price: ₹{totalPrice.toFixed(2)}</Typography>
          <Typography variant="h6" style={{ fontSize: '14px', opacity: 0.5 }}>
          Only one order request per day is applicable
</Typography>

          <Divider sx={{ marginBottom: '10px' }} />
          <Grid container spacing={2}>
            {cart.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product._id}>
                <Card>
                <CardContent style={{ padding: '16px', lineHeight: '1.6' }}>
  <Typography variant="h6" style={{ display: 'inline-block', flexGrow: 1, marginRight: '16px' }}>{product.name}</Typography>
  <Typography variant="body1" style={{ marginRight: '16px' }}>Price: ₹{product.price.toFixed(2)}</Typography>
  <Typography variant="body2" style={{ marginRight: '16px' }}>Quantity: {product.quantity}</Typography>
  <Button onClick={() => handleRemoveFromCart(product._id)} style={{ backgroundColor: 'grey', color: 'white', padding: '3px 8px', borderRadius: '4px', marginRight: '8px' }}>-1</Button>
  <Button onClick={() => handleAddToCart(product._id)} style={{ backgroundColor: 'rgb(255, 102, 0)', color: 'white', padding: '3px 8px', borderRadius: '4px' }}>+1</Button>
</CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
  
      <form onSubmit={handleSubmit}>
        <Typography  variant="h5" gutterBottom style={{ marginTop: '20px' }}>Order Details</Typography>
        <TextField
          label="EMPCode"
          name="empcode"
          value={formData.empcode}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required

        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Dept"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Mobile"
          name="mob"
          value={formData.mob}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitDisabled || isSubmitting}
          style={{ marginTop: '10px' }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </Button>
      </form>

      {orderSubmitted && (
        <Alert severity="success" style={{ marginTop: '10px' }}>
          Order submitted successfully!
        </Alert>
      )}

      {error && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          {error}
        </Alert>
      )}
    </Box>

      </div>
  );  
};

export default Cart;
