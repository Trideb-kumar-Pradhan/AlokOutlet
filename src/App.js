
// // // import React, { useState, useEffect } from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import { Container } from '@mui/material';
// // // import ProductList from './component/productList'; 
// // // import Cart from './component/Cart';
// // // import Navbar from './component/Navbar';
// // // import Hero from './component/Hero';
// // // import Footer from './component/Footor';
// // // import axios from 'axios';
// // // // import OrderDetails from './component/Fatchorder';


// // // function App() {
// // //   const [products, setProducts] = useState([]);
// // //   const [cart, setCart] = useState([]);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await axios.get('https://outletsp.onrender.com/products'); 
// // //         console.log(response.data);
// // //         setProducts(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching products:', error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []); 
// // //   const addToCart = (productOrId) => {
// // //     let productToAdd;
// // //     if (typeof productOrId === 'string') {
// // //       productToAdd = products.find((product) => product._id === productOrId);
// // //     } else {
// // //       productToAdd = productOrId;
// // //     }
  
// // //     if (!productToAdd) {
// // //       console.error(`Product not found.`);
// // //       return;
// // //     }
  
// // //     const productInCart = cart.find((item) => item._id === productToAdd._id);
  
// // //     if (productToAdd.stock > 0) {
// // //       if (productInCart) {
// // //         if (productInCart.quantity) {
// // //           setCart(
// // //             cart.map((item) =>
// // //               item._id === productToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
// // //             )
// // //           );
// // //         } else {
// // //           alert('Maximum quantity reached for this product.');
// // //         }
// // //       } else {
// // //         setCart([...cart, { ...productToAdd, quantity: 1 }]);
// // //       }
  
// // //       setProducts(
// // //         products.map((item) =>
// // //           item._id === productToAdd._id ? { ...item, stock: item.stock - 1 } : item
// // //         )
// // //       );
// // //     } else {
// // //       alert('Product is out of stock');
// // //     }
// // //   };
  
  
  

// // //   const removeFromCart = (productId) => {
// // //     const productInCart = cart.find((item) => item._id === productId);
// // //     if (productInCart) {
// // //       if (productInCart.quantity > 1) {
// // //         setCart(cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
// // //       } else {
// // //         setCart(cart.filter((item) => item._id !== productId));
// // //       }

// // //       setProducts(products.map((item) => (item._id === productId ? { ...item, stock: item.stock + 1 } : item)));
// // //     }
// // //   };

// // //   const submitOrder = (formData) => {
// // //     console.log('Order Submitted:', formData, cart);
// // //     setCart([]); 
// // //   };


// // //   return (
// // //     <Router>
// // //       <Navbar />
// // //       <Routes>
// // //         <Route path="/" element={<Hero />} />
// // //       </Routes>
// // //       <Container>
// // //         <Routes>
// // //           <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
// // //           <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} submitOrder={submitOrder} />} />
// // //           {/* <Route path="/products/orderdetails" element={<OrderDetails/>} /> */}
// // //         </Routes>
// // //       </Container>
// // //       <Footer />
      
// // //       </Router>
// // //   );
// // // }

// // // export default App;

// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { Container } from '@mui/material';
// // import ProductList from './component/productList'; 
// // import Cart from './component/Cart';
// // import Hero from './component/Hero';
// // import Navbar from './component/Navbar';
// // import Signup from './component/Signup';
// // import Login from './component/Login';
// // import axios from 'axios';

// // function App() {
// //   const [token, setToken] = useState(null);
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);

// //   // Fetch products once when component mounts
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('https://outletsp.onrender.com/products');
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const addToCart = (productOrId) => {
// //     let productToAdd;
// //     if (typeof productOrId === 'string') {
// //       productToAdd = products.find((product) => product._id === productOrId);
// //     } else {
// //       productToAdd = productOrId;
// //     }
  
// //     if (!productToAdd) {
// //       console.error(`Product not found.`);
// //       return;
// //     }
  
// //     const productInCart = cart.find((item) => item._id === productToAdd._id);
  
// //     if (productToAdd.stock > 0) {
// //       if (productInCart) {
// //         if (productInCart.quantity < productToAdd.stock) {
// //           setCart(
// //             cart.map((item) =>
// //               item._id === productToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
// //             )
// //           );
// //         } else {
// //           alert('Maximum quantity reached for this product.');
// //         }
// //       } else {
// //         setCart([...cart, { ...productToAdd, quantity: 1 }]);
// //       }
  
// //       setProducts(
// //         products.map((item) =>
// //           item._id === productToAdd._id ? { ...item, stock: item.stock - 1 } : item
// //         )
// //       );
// //     } else {
// //       alert('Product is out of stock');
// //     }
// //   };

// //   const removeFromCart = (productId) => {
// //     const productInCart = cart.find((item) => item._id === productId);
// //     if (productInCart) {
// //       if (productInCart.quantity > 1) {
// //         setCart(cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
// //       } else {
// //         setCart(cart.filter((item) => item._id !== productId));
// //       }

// //       setProducts(products.map((item) => (item._id === productId ? { ...item, stock: item.stock + 1 } : item)));
// //     }
// //   };

// //   const submitOrder = (formData) => {
// //     console.log('Order Submitted:', formData, cart);
// //     setCart([]);
// //   };

// //   return (
// //     <Router>
// //       <Navbar setToken={setToken} token={token} />
// //       <Container>
// //         <Routes>
// //           {!token ? (
// //             <>
// //               <Route path="/signup" element={<Signup />} />
// //               <Route path="/login" element={<Login setToken={setToken} />} />
// //             </>
// //           ) : (
// //             <>
// //               <Route path="/" element={<Hero />} />
// //               <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
// //               <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} submitOrder={submitOrder} />} />
// //             </>
// //           )}
// //         </Routes>
// //       </Container>
// //     </Router>
// //   );
// // }

// // export default App;


// // import React, { useState, useEffect } from 'react'; 
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { Container } from '@mui/material';
// // import ProductList from './component/productList'; 
// // import Cart from './component/Cart';
// // import Hero from './component/Hero';
// // import Navbar from './component/Navbar';
// // import Footer from './component/Footor';
// // import Signup from './component/Signup';
// // import Login from './component/Login';
// // import axios from 'axios';

// // function App() {
// //   const [token, setToken] = useState(null);
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);

// //   // Fetch products once when component mounts
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('https://outletsp.onrender.com/products');
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const addToCart = (productOrId) => {
// //     let productToAdd;
// //     if (typeof productOrId === 'string') {
// //       productToAdd = products.find((product) => product._id === productOrId);
// //     } else {
// //       productToAdd = productOrId;
// //     }

// //     if (!productToAdd) {
// //       console.error(`Product not found.`);
// //       return;
// //     }

// //     const productInCart = cart.find((item) => item._id === productToAdd._id);

// //     if (productToAdd.stock > 0) {
// //       if (productInCart) {
// //         if (productInCart.quantity < productToAdd.stock) {
// //           setCart(
// //             cart.map((item) =>
// //               item._id === productToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
// //             )
// //           );
// //         } else {
// //           alert('Maximum quantity reached for this product.');
// //         }
// //       } else {
// //         setCart([...cart, { ...productToAdd, quantity: 1 }]);
// //       }

// //       setProducts(
// //         products.map((item) =>
// //           item._id === productToAdd._id ? { ...item, stock: item.stock - 1 } : item
// //         )
// //       );
// //     } else {
// //       alert('Product is out of stock');
// //     }
// //   };

// //   const removeFromCart = (productId) => {
// //     const productInCart = cart.find((item) => item._id === productId);
// //     if (productInCart) {
// //       if (productInCart.quantity > 1) {
// //         setCart(cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
// //       } else {
// //         setCart(cart.filter((item) => item._id !== productId));
// //       }

// //       setProducts(products.map((item) => (item._id === productId ? { ...item, stock: item.stock + 1 } : item)));
// //     }
// //   };

// //   const submitOrder = (formData) => {
// //     console.log('Order Submitted:', formData, cart);
// //     setCart([]);
// //   };

// //   return (
// //     <Router>
// //       <Navbar setToken={setToken} token={token} />
// //       <Container>
// //         <Routes>
// //           <Route path="/home" element={<Hero />} />
// //           <Route path="/product" element={<ProductList products={products} addToCart={addToCart} />} />
// //           <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} submitOrder={submitOrder} />} />
// //           {!token ? (
// //             <>
// //             <Route path="/home" element={<Hero />} />
// //               <Route path="/signup" element={<Signup />} />
// //               <Route path="/login" element={<Login setToken={setToken} />} />
// //             </>
// //           ) : null}
// //         </Routes>
// //       </Container>
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from '@mui/material';
// import ProductList from './component/productList'; 
// import Cart from './component/Cart';
// import Hero from './component/Hero';
// import ProtectedRoute from './component/ProtectedRoute'; // Import the ProtectedRoute component
// import Navbar from './component/Navbar';
// import Footer from './component/Footor';
// import Signup from './component/Signup';
// import Login from './component/Login';
// import axios from 'axios';

// function App() {
//   const [token, setToken] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Fetch products function
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://outletsp.onrender.com/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Fetch products once when component mounts or token changes
//   useEffect(() => {
//     fetchProducts();
//   }, [token]);

//   const addToCart = (productOrId) => {
//     let productToAdd;
//     if (typeof productOrId === 'string') {
//       productToAdd = products.find((product) => product._id === productOrId);
//     } else {
//       productToAdd = productOrId;
//     }

//     if (!productToAdd) {
//       console.error(`Product not found.`);
//       return;
//     }

//     const productInCart = cart.find((item) => item._id === productToAdd._id);

//     if (productToAdd.stock > 0) {
//       if (productInCart) {
//         if (productInCart.quantity < productToAdd.stock) {
//           setCart(
//             cart.map((item) =>
//               item._id === productToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//           );
//         } else {
//           alert('Maximum quantity reached for this product.');
//         }
//       } else {
//         setCart([...cart, { ...productToAdd, quantity: 1 }]);
//       }

//       setProducts(
//         products.map((item) =>
//           item._id === productToAdd._id ? { ...item, stock: item.stock - 1 } : item
//         )
//       );
//     } else {
//       alert('Product is out of stock');
//     }
//   };

//   const removeFromCart = (productId) => {
//     const productInCart = cart.find((item) => item._id === productId);
//     if (productInCart) {
//       if (productInCart.quantity > 1) {
//         setCart(cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
//       } else {
//         setCart(cart.filter((item) => item._id !== productId));
//       }

//       setProducts(products.map((item) => (item._id === productId ? { ...item, stock: item.stock + 1 } : item)));
//     }
//   };

//   const submitOrder = (formData) => {
//     console.log('Order Submitted:', formData, cart);
//     setCart([]);
//   };

//   return (
//     <Router>
//       <Navbar setToken={setToken} token={token} />
//       <Container>
//         <Hero />
//         <Routes>
//           {/* Protected routes */}
//           <Route path="/home" element={<ProtectedRoute element={<ProductList products={products} addToCart={addToCart} />} token={token} />} />
//           <Route path="/cart" element={<ProtectedRoute element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} submitOrder={submitOrder} />} token={token} />} />
          
//           {/* Unprotected routes */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login setToken={setToken} />} />
//         </Routes>
//       </Container>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ProductList from './component/productList'; 
import Cart from './component/Cart';
import Hero from './component/Hero';
import ProtectedRoute from './component/ProtectedRoute';
import Navbar from './component/Navbar';
import Footer from './component/Footor';
import Signup from './component/Signup';
import Login from './component/Login';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://outletsp.onrender.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products once when component mounts or token changes
  useEffect(() => {
    fetchProducts();
  }, [token]);

  const addToCart = (productOrId) => {
    let productToAdd;
    if (typeof productOrId === 'string') {
      productToAdd = products.find((product) => product._id === productOrId);
    } else {
      productToAdd = productOrId;
    }

    if (!productToAdd) {
      console.error(`Product not found.`);
      return;
    }

    const productInCart = cart.find((item) => item._id === productToAdd._id);

    if (productToAdd.stock > 0) {
      if (productInCart) {
        if (productInCart.quantity < productToAdd.stock) {
          setCart(
            cart.map((item) =>
              item._id === productToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        } else {
          alert('Maximum quantity reached for this product.');
        }
      } else {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }

      setProducts(
        products.map((item) =>
          item._id === productToAdd._id ? { ...item, stock: item.stock - 1 } : item
        )
      );
    } else {
      alert('Product is out of stock');
    }
  };

  const removeFromCart = (productId) => {
    const productInCart = cart.find((item) => item._id === productId);
    if (productInCart) {
      if (productInCart.quantity > 1) {
        setCart(cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
      } else {
        setCart(cart.filter((item) => item._id !== productId));
      }

      setProducts(products.map((item) => (item._id === productId ? { ...item, stock: item.stock + 1 } : item)));
    }
  };

  const submitOrder = (formData) => {
    console.log('Order Submitted:', formData, cart);
    setCart([]);
  };

  return (
    <Router>
      <Navbar setToken={setToken} token={token} />
      <Container>
        <Routes>
          <Route 
            path="/home" 
            element={
              <>
                <Hero />
                <ProtectedRoute 
                  element={<ProductList products={products} addToCart={addToCart} />} 
                  token={token} 
                />
              </>
            } 
          />
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute 
                element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} submitOrder={submitOrder} />} 
                token={token} 
              />
            } 
          />
          {/* Unprotected routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
