
// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, Typography, CardMedia, Button, Box, Dialog, DialogContent, DialogActions, IconButton, Tooltip } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications'; 
// import axios from 'axios';


// const ProductList = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);
//   const [openPreview, setOpenPreview] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');

//   useEffect(() => {
//     // Fetch products from backend when component mounts
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://outletsp.onrender.com/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Sort products alphabetically by name
//   const sortedProducts = [...products].sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

//   const handleImageClick = (image) => {
//     setPreviewImage(image);
//     setOpenPreview(true);
//   };

//   const handleClosePreview = () => {
//     setOpenPreview(false);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product); 


//     const updatedProducts = products.map((p) => {
//       if (p._id === product._id) {
//         return {
//           ...p,
//           stock: p.stock - 1,
//         };
//       }
//       return p;
//     });

//     setProducts(updatedProducts);
//   };

//   return (
//       <div>
//     <Box sx={{ flexGrow: 1, padding: '20px' }}>
//       <Grid container spacing={3}>
//         {sortedProducts.map((product) => (
//           <Grid item xs={12} sm={12} md={6} lg={4} key={product._id} style={{ marginTop: '15px' }}>
//             <Card style={{ margin: '7px', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,4.1)', paddingBottom: '0px' }}>
//               <CardMedia
//                 component="img"
//                 height="100%"
//                 width="100%"
//                 src={`https://outletsp.onrender.com/images/${product.image}`} // Image URL from backend
//                 alt={product.name}
//                 style={{ objectFit: 'cover', cursor: 'pointer' }}
//                 onClick={() => handleImageClick(`https://outletsp.onrender.com/images/${product.image}`)}
//               />
//               <CardContent sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop: '0px' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <Typography variant="h4" style={{ color: 'red', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '23px', lineHeight: '1.8' }}>
//                     {product.name}
//                   </Typography>
//                   <Tooltip title="Only for Alok employees">
//                   <IconButton style={{ cursor: 'pointer', color: 'grey', opacity: 0.3 }}>
//                       <NotificationsIcon />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//                 <Typography variant="h5" style={{ color: 'black', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5' }}>{product.tc}</Typography>
//                 <Typography variant="h5" style={{ color: 'black', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5' }}>{product.pdes}</Typography>
//                 <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '13px', lineHeight: '1.5' }}>{product.ss}</Typography>
//                 <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '13px', lineHeight: '1.5' }}>{product.pc}</Typography>
//                 <Typography variant="h6" style={{ color: 'black', fontFamily: 'Times New Roman', fontSize: '14px', lineHeight: '1.5' }}>{product.blend}</Typography>
//                 <Typography variant="h6" style={{ lineHeight: '1', fontFamily: 'Times New Roman', fontSize: '16px' }}>
//                   MRP ₹<span style={{ fontWeight: '', fontSize: '18px', textDecoration: 'line-through' }}>{product.originalprice}</span>
//                   <span style={{ fontWeight: 'bold', fontSize: '22px' }}> {product.price.toFixed(2)} </span>
//                 </Typography>
//                 <Typography variant="body2">Stock: {product.stock}</Typography>
//                 <Button
//                   style={{ backgroundColor: product.stock > 0 ? 'rgb(255, 102, 0)' : 'gray', color: 'white' }}
//                   onClick={() => handleAddToCart(product)}
//                   disabled={product.stock === 0}
//                 >
//                   {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={openPreview} onClose={handleClosePreview}>
//         <DialogContent style={{ textAlign: 'center' }}>
//           <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClosePreview} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>

//     </div>
//   );
// };

// export default ProductList;












import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box, Dialog, DialogContent, DialogActions, IconButton, Tooltip  } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette'; 
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import LoadingSpinner from './LoadingSpinner'; 


const GradientIcon = styled(PaletteIcon)(({ theme }) => ({
  fontSize: '20px', 
  fill: 'url(#gradient)',
}));

const GradientSvg = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="10%" y2="50%">
        <stop offset="0%" style={{ stopColor: 'yellow', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

const ProductList = ({ products, addToCart }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if products are passed as prop
    if (products && products.length > 0) {
      setLoading(false); // Data is already available
    } else {
      // Simulate API call to fetch data if not passed
      const fetchData = async () => {
        try {
          // Replace this URL with your actual API endpoint
          const response = await fetch('https://outletshop.onrender.com/api/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          // Assuming the parent component will pass fetched data as props
          setLoading(false); // Data fetched successfully
        } catch (error) {
          console.error('Failed to fetch products', error);
          setLoading(false); // Stop loading even if fetching fails
        }
      };

      fetchData();
    }
  }, [products]); // Dependency on products to re-check loading state

  const handleImageClick = (image) => {
    setPreviewImage(image);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return <LoadingSpinner />; // Show spinner while loading
  }
    return (
      <div>
    <Box sx={{ flexGrow: 1, padding: '15px' }}>
      <Grid container spacing={6} >
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={product._id} style={{ marginTop: '17px' }}>
            <Card style={{  maxWidth: '400px', maxHeight: '600px',borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,4.1)', paddingBottom: '0px' }}>
              <CardMedia
                component="img"
                height="300px"
                width="100%"
                src={`https://outletsp.onrender.com/images/${product.image}`} // Image URL from backend
                alt={product.name}
                style={{ objectFit: 'cover', cursor: 'pointer',display: 'block',  maxWidth: '100%',  }}
                onClick={() => handleImageClick(`https://outletsp.onrender.com/images/${product.image}`)}
              />
              <CardContent sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop: '0px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" style={{ color: 'red', fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: '23px', lineHeight: '1.8' }}>
                    {product.name}
                  </Typography>
                  {/* <Tooltip title="Multiple color options available">
                  <IconButton style={{ cursor: 'pointer', color: 'grey', opacity: 0.3 }}>
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip> */}
                                     <Tooltip title="Multiple color options available">
                     <IconButton>
                       <GradientSvg /> 
                       <GradientIcon />
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
                <Typography  variant="body2">Stock: <span style={{ fontWeight: 'bold', fontSize: '18px' }}> {product.stock} </span></Typography>
                {/* <Typography variant="h6" style={{ fontSize: '14px', opacity: 0.7 }}>
                   <Tooltip title="">
                     <IconButton>
                       <GradientSvg /> 
                       <GradientIcon />
                     </IconButton>
                   </Tooltip>
                   Multiple color options available
                 </Typography> */}
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