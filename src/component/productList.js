
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box, Dialog, DialogContent, DialogActions, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import axios from 'axios';


const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    // Fetch products from backend when component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://outletsp.onrender.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Sort products alphabetically by name
  const sortedProducts = [...products].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleImageClick = (image) => {
    setPreviewImage(image);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product); 


    const updatedProducts = products.map((p) => {
      if (p._id === product._id) {
        return {
          ...p,
          stock: p.stock - 1,
        };
      }
      return p;
    });

    setProducts(updatedProducts);
  };

  return (
      <div>
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={product._id} style={{ marginTop: '15px' }}>
            <Card style={{ margin: '7px', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,4.1)', paddingBottom: '0px' }}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                src={`http://localhost:8000/images/${product.image}`} // Image URL from backend
                alt={product.name}
                style={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleImageClick(`https://outletsp.onrender.com/images/${product.image}`)}
              />
              <CardContent sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop: '0px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" style={{ color: 'red', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '23px', lineHeight: '1.8' }}>
                    {product.name}
                  </Typography>
                  <Tooltip title="Only for Alok employees">
                  <IconButton style={{ cursor: 'pointer', color: 'grey', opacity: 0.3 }}>
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <Typography variant="h5" style={{ color: 'black', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5' }}>{product.tc}</Typography>
                <Typography variant="h5" style={{ color: 'black', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5' }}>{product.pdes}</Typography>
                <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '13px', lineHeight: '1.5' }}>{product.ss}</Typography>
                <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '13px', lineHeight: '1.5' }}>{product.pc}</Typography>
                <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '14px', lineHeight: '1.5' }}>{product.blend}</Typography>
                <Typography variant="h6" style={{ lineHeight: '1', fontFamily: 'Times New Roman', fontSize: '16px' }}>
                  MRP ₹<span style={{ fontWeight: '', fontSize: '18px', textDecoration: 'line-through' }}>{product.originalprice}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '22px' }}> {product.price.toFixed(2)} </span>
                </Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Button
                  style={{ backgroundColor: product.stock > 0 ? 'rgb(255, 102, 0)' : 'gray', color: 'white' }}
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openPreview} onClose={handleClosePreview}>
        <DialogContent style={{ textAlign: 'center' }}>
          <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>

    </div>
  );
};

export default ProductList;
