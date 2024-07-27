
// // import React, { useState } from 'react';
// // import { Button, Card, CardContent, TextField, Typography, Alert, Grid, Box, IconButton, Divider } from '@mui/material';
// // import { Delete as DeleteIcon } from '@mui/icons-material';
// // import axios from 'axios';


// // const Cart = ({ cart = [], removeFromCart, addToCart, submitOrder }) => {
// //   const [formData, setFormData] = useState({
// //     empcode: '',
// //     name: '',
// //     address: '',
// //     mob: '',
// //     email: '',
// //   });
// //   const [orderSubmitted, setOrderSubmitted] = useState(false);
// //   const [error, setError] = useState('');
// //   const [submitDisabled, setSubmitDisabled] = useState(true);
// //   const [isSubmitting, setIsSubmitting] = useState(false);


// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //     validateForm({ ...formData, [name]: value });
// //   };


// //   const validateForm = ({ name, address, email, mob, empcode }) => {
// //     if (
// //       cart.length > 0 &&
// //       name.trim() !== '' &&
// //       address.trim() !== '' &&
// //       email.trim() !== '' &&
// //       mob.trim() !== '' &&
// //       empcode.trim() !== ''
// //     ) {
// //       setSubmitDisabled(false);
// //     } else {
// //       setSubmitDisabled(true);
// //     }
// //   };


// //   const handleAddToCart = (productId) => {
// //     addToCart(productId); 
// //   };


// //   const handleRemoveFromCart = (productId) => {
// //     removeFromCart(productId); 
// //   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
  
// //     if (cart.length === 0) {
// //       setError('Your cart is empty. Please add some products to the cart before submitting.');
// //       return;
// //     }
  
// //     const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
// //     if (totalQuantity > 15) {
// //       setError('You cannot buy more than 15 products in a day');
// //       return;
// //     }
  
// //     const empcodePattern = /^4\d{7}$/;
  
// //     if (!empcodePattern.test(formData.empcode)) {
// //       setError('EMPcode must start with 4 and not be larger than 8');
// //       return;
// //     }
  
// //     const emailPattern = /^[^\s@]+@alokind\.com$/;
// //     if (!emailPattern.test(formData.email)) {
// //       setError('Please enter a valid email address that ends with @alokind.com.');
// //       return;
// //     }
  
// //     const mobPattern = /^\d{10}$/;
// //     if (!mobPattern.test(formData.mob)) {
// //       setError('Mobile number must be exactly 10 digits.');
// //       return;
// //     }
  
// //     if (isSubmitting) return;
  
// //     setIsSubmitting(true);
  
// //     // Format name and address fields
// //     const formattedName = formData.name.trim().replace(/\b\w/g, (char) => char.toUpperCase());
// //     const formattedAddress = formData.address.trim().replace(/\b\w/g, (char) => char.toUpperCase());
  
// //     const formattedCart = cart.map((item) => ({
// //       productId: item._id, 
// //       name: item.name,
// //       price: item.price,
// //       quantity: item.quantity,
// //     }));
  
// //     try {
// //       const response = await axios.post('https://outletsp.onrender.com/submit-order', {
// //         ...formData,
// //         name: formattedName,
// //         address: formattedAddress,
// //         cart: formattedCart,
// //       });
// //       console.log('Order submitted successfully:', response.data);
// //       submitOrder(formData);
// //       setOrderSubmitted(true);
  
// //       // Reload page after a short delay to show success message
// //       setTimeout(() => {
// //         setOrderSubmitted(false);
// //         window.location.href = '/'; // Redirect to home page
// //       }, 3000);
  
// //       // Reset form and disable submit button
// //       setFormData({ empcode: '', name: '', address: '', mob: '', email: '' });
// //       setSubmitDisabled(true);
// //     } catch (error) {
// //       setError('There was an error submitting the order.');
// //       console.error('Error:', error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };
  

// //   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
// //   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

// //   return (
// //     <div>
// //     <Box sx={{ padding: '20px' }}>
// //       <Typography variant="h4" gutterBottom>Cart</Typography>

// //       {cart.length === 0 ? (
// //         <Typography variant="h6">Your cart is empty</Typography>
// //       ) : (
// //         <Box sx={{ marginBottom: '20px' }}>
// //           <Typography variant="h6" gutterBottom>Total Quantity: {totalQuantity}</Typography>
// //           <Typography variant="h5" gutterBottom>Total Price: ₹{totalPrice.toFixed(2)}</Typography>
// //           <Typography variant="h6" style={{ fontSize: '14px', opacity: 0.5 }}>
// //           Only one order request per day is applicable
// // </Typography>

// //           <Divider sx={{ marginBottom: '10px' }} />
// //           <Grid container spacing={2}>
// //             {cart.map((product) => (
// //               <Grid item xs={12} sm={6} md={3} key={product._id}>
// //                 <Card>
// //                 <CardContent style={{ padding: '16px', lineHeight: '1.6' }}>
// //   <Typography variant="h6" style={{ display: 'inline-block', flexGrow: 1, marginRight: '16px' }}>{product.name}</Typography>
// //   <Typography variant="body1" style={{ marginRight: '16px' }}>Price: ₹{product.price.toFixed(2)}</Typography>
// //   <Typography variant="body2" style={{ marginRight: '16px' }}>Quantity: {product.quantity}</Typography>
// //   <Button onClick={() => handleRemoveFromCart(product._id)} style={{ backgroundColor: 'grey', color: 'white', padding: '3px 8px', borderRadius: '4px', marginRight: '8px' }}>-1</Button>
// //   <Button onClick={() => handleAddToCart(product._id)} style={{ backgroundColor: 'rgb(255, 102, 0)', color: 'white', padding: '3px 8px', borderRadius: '4px' }}>+1</Button>
// // </CardContent>

// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Box>
// //       )}
  
// //       <form onSubmit={handleSubmit}>
// //         <Typography  variant="h5" gutterBottom style={{ marginTop: '20px' }}>Order Details</Typography>
// //         <TextField
// //           label="EMPCode"
// //           name="empcode"
// //           value={formData.empcode}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           variant="outlined"
// //           required

// //         />
// //         <TextField
// //           label="Name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           variant="outlined"
// //           required
// //         />
// //         <TextField
// //           label="Dept"
// //           name="address"
// //           value={formData.address}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           variant="outlined"
// //           required
// //         />
// //         <TextField
// //           label="Mobile"
// //           name="mob"
// //           value={formData.mob}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           variant="outlined"
// //           required
// //         />
// //         <TextField
// //           label="Email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           variant="outlined"
// //           required
// //         />
// //         <Button
// //           type="submit"
// //           variant="contained"
// //           color="primary"
// //           disabled={submitDisabled || isSubmitting}
// //           style={{ marginTop: '10px' }}
// //         >
// //           {isSubmitting ? 'Submitting...' : 'Submit Order'}
// //         </Button>
// //       </form>

// //       {orderSubmitted && (
// //         <Alert severity="success" style={{ marginTop: '10px' }}>
// //           Order submitted successfully!!
// //         </Alert>
// //       )}

// //       {error && (
// //         <Alert severity="error" style={{ marginTop: '10px' }}>
// //           {error}
// //         </Alert>
// //       )}
// //     </Box>

// //       </div>
// //   );  
// // };

// // export default Cart;




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
    if (totalQuantity > 15) {
      setError('You cannot buy more than 15 products in a day');
      return;
    }
  
    const empcodePattern = /^4\d{7}$/;
    if (!empcodePattern.test(formData.empcode)) {
      setError('EMPcode must start with 4 and not be larger than 8');
      return;
    }
  
    const emailPattern = /^[^\s@]+@alokind\.com$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address that ends with @alokind.com.');
      return;
    }
  
    const mobPattern = /^\d{10}$/;
    if (!mobPattern.test(formData.mob)) {
      setError('Mobile number must be exactly 10 digits.');
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
      // Check stock availability
      const stockResponse = await axios.post('https://outletsp.onrender.com/check-stock', { cart: formattedCart });
      
      if (stockResponse.data.status === 'error') {
        setError(stockResponse.data.message);
        return;
      }
  
      // Proceed to submit order
      const response = await axios.post('https://outletsp.onrender.com/submit-order', {
        ...formData,
        name: formattedName,
        address: formattedAddress,
        cart: formattedCart,
      });
  
      console.log('Order submitted successfully:', response.data);
      submitOrder(formData);
      setOrderSubmitted(true);
  
      // Reload page after a short delay to show success message
      setTimeout(() => {
        setOrderSubmitted(false);
        window.location.href = '/'; // Redirect to home page
      }, 3000);
  
      // Reset form and disable submit button
      setFormData({ empcode: '', name: '', address: '', mob: '', email: '' });
      setSubmitDisabled(true);
    } catch (error) {
      setError('Selected combination of Stock not Available Now !! Refresh the home screnn and check updated stock available for product');
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
      <Typography variant="h4" gutterBottom>Carta</Typography>

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
              <Grid item xs={12} sm={6} md={4} key={product._id}>
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
          Order submitted successfully!!
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


















// import React, { useState } from 'react';
// import { Button, Card, CardContent, TextField, Typography, Alert, Grid, Box, Divider } from '@mui/material';
// import axios from 'axios';

// const Cart = ({ cart = [], removeFromCart, addToCart, submitOrder }) => {
//   const [formData, setFormData] = useState({
//     empcode: '',
//     name: '',
//     address: '',
//     mob: '',
//     email: '',
//   });
//   const [orderSubmitted, setOrderSubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const [submitDisabled, setSubmitDisabled] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     validateForm({ ...formData, [name]: value });
//   };

//   const validateForm = ({ name, address, email, mob, empcode }) => {
//     if (
//       cart.length > 0 &&
//       name.trim() !== '' &&
//       address.trim() !== '' &&
//       email.trim() !== '' &&
//       mob.trim() !== '' &&
//       empcode.trim() !== ''
//     ) {
//       setSubmitDisabled(false);
//     } else {
//       setSubmitDisabled(true);
//     }
//   };

//   const handleAddToCart = (productId) => {
//     addToCart(productId);
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };

//   const handleSubmitOrder = async () => {
//     if (submitDisabled) return;

//     setIsSubmitting(true);
//     setError('');
//     setOrderSubmitted(false);

//     try {
//       // Check stock before submitting order
//       const { data } = await axios.post('http://localhost:8000/check-stock', { cart });
//       if (data.status === 'error') {
//         setError(data.message);
//         setIsSubmitting(false);
//         return;
//       }

//       // Submit order
//       const response = await axios.post('http://localhost:8000/submit-order', {
//         ...formData,
//         cart,
//       });

//       if (response.data.message === 'Order submitted successfully!') {
//         setOrderSubmitted(true);
//         setError('');
//         // Clear cart
//         cart.forEach((item) => removeFromCart(item.productId));
//       } else {
//         setError('Error submitting order');
//       }
//     } catch (err) {
//       setError('Error submitting order');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Cart
//       </Typography>
//       {error && <Alert severity="error">{error}</Alert>}
//       {orderSubmitted && <Alert severity="success">Order submitted successfully!</Alert>}
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={8}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5">Your Cart</Typography>
//               <Divider />
//               {cart.map((item) => (
//                 <Card key={item.productId} sx={{ mb: 2 }}>
//                   <CardContent>
//                     <Typography variant="h6">{item.name}</Typography>
//                     <Typography>Quantity: {item.quantity}</Typography>
//                     <Typography>Price: ₹{item.price}</Typography>
//                     <Button variant="contained" color="error" onClick={() => handleRemoveFromCart(item.productId)}>Remove</Button>
//                   </CardContent>
//                 </Card>
//               ))}
//               <Typography variant="h6">Total: ₹{calculateTotal().toFixed(2)}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5">Order Details</Typography>
//               <TextField
//                 label="Employee Code"
//                 name="empcode"
//                 value={formData.empcode}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Mobile Number"
//                 name="mob"
//                 value={formData.mob}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmitOrder}
//                 disabled={submitDisabled || isSubmitting}
//                 fullWidth
//                 sx={{ mt: 2 }}
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Order'}
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Cart;
