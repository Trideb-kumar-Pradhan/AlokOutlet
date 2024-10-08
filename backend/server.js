
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

// // Product Schema with optimistic locking
// const productSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   name: String,
//   tc: String,
//   pdes: String,
//   ss: String,
//   pc: String,
//   blend: String,
//   originalprice: Number,
//   price: Number,
//   stock: Number,
//   image: String
// }, { versionKey: '_v' });

// const Product = mongoose.model('Product', productSchema);

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   orderId: { type: String, unique: true },
//   empcode: String,
//   name: String,
//   address: String,
//   mob: String,
//   email: String,
//   timestamp: { type: Date, default: Date.now },
//   cart: [
//     {
//       productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//       name: String,
//       price: Number,
//       quantity: Number,
//     },
//   ],
// });

// const Order = mongoose.model('Order', orderSchema);

// // Order Sequence Schema
// const orderSequenceSchema = new mongoose.Schema({
//   _id: String,
//   sequence_value: Number,
// });

// const OrderSequence = mongoose.model('OrderSequence', orderSequenceSchema);

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Function to get the next order ID
// const getNextOrderId = async () => {
//   const sequence = await OrderSequence.findByIdAndUpdate(
//     'order_id',
//     { $inc: { sequence_value: 1 } },
//     { new: true, upsert: true }
//   );
//   const nextId = `AS${String(sequence.sequence_value + 1).padStart(5, '0')}`;
//   return nextId;
// };

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Get products
// app.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).send({ message: 'Error fetching products', error });
//   }
// });

// // Check stock
// app.post('/check-stock', async (req, res) => {
//   const { cart } = req.body;

//   try {
//     if (!Array.isArray(cart) || cart.length === 0) {
//       return res.status(400).send({ status: 'error', message: 'Cart is empty or invalid.' });
//     }

//     for (const item of cart) {
//       const product = await Product.findOne({ name: item.name });
//       if (!product) {
//         return res.status(404).send({ status: 'error', message: `Product with name ${item.name} not found.` });
//       }
//       if (product.stock < item.quantity) {
//         return res.status(400).send({ status: 'error', message: `Not enough stock for product with name ${item.name}` });
//       }
//     }

//     res.status(200).send({ status: 'success', message: 'Stock is available.' });
//   } catch (error) {
//     console.error('Error checking stock:', error);
//     res.status(500).send({ status: 'error', message: 'Error checking stock' });
//   }
// });

// // Submit order
// app.post('/submit-order', async (req, res) => {
//   const { empcode, name, address, mob, email, cart } = req.body;

//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     if (!Array.isArray(cart) || cart.length === 0) {
//       throw new Error('Cart is empty or invalid.');
//     }

//     const orderId = await getNextOrderId();

//     // Check stock availability
//     for (const item of cart) {
//       const product = await Product.findById(item.productId).session(session);
//       if (!product) {
//         throw new Error(`Product with ID ${item.productId} not found.`);
//       }
//       if (product.stock < item.quantity) {
//         throw new Error(`Not enough stock for product with ID ${item.productId}`);
//       }
//     }

//     const newOrder = new Order({ orderId, empcode, name, address, mob, email, cart });
//     await newOrder.save({ session });

//     // Update stock with optimistic locking
//     const updateStockPromises = cart.map(async (item) => {
//       while (true) {
//         const product = await Product.findById(item.productId).session(session);
//         if (!product) throw new Error(`Product with ID ${item.productId} not found.`);
//         if (product.stock < item.quantity) throw new Error(`Not enough stock for product with ID ${item.productId}`);

//         product.stock -= item.quantity;
//         const result = await Product.findByIdAndUpdate(item.productId, product, { session, new: true });
//         if (result) break;
//       }
//     });

//     await Promise.all(updateStockPromises);

//     // Commit transaction
//     await session.commitTransaction();
//     session.endSession();

//     // Send confirmation email and respond to the client
//     const productDetailsHTML = cart.map(item => `<li>${item.name} - ${item.quantity} items - ₹${(item.price * item.quantity).toFixed(2)}</li>`).join('');

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Order Confirmation',
//       html: `<p style="font-size: 16px; font-weight: bold;">Dear ${name},</p>
//              <p>Thank you for your order. Your order has been received</p>
//              <p>Contact Number: ${mob}</p>
//              <p>Emp Code: ${empcode}</p>
//              <p>Dept: ${address}</p>
//              <p>Order ID: ${orderId}</p>
//              <p>Order Details:</p>
//              <ul>
//                ${productDetailsHTML}
//              </ul>
//              <p>Total Quantity: ${cart.reduce((total, item) => total + item.quantity, 0)}</p>
//              <p>Total Price: ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
//              <p style="font-size: 16px; font-weight: bold;">Regards,</p>
//              <p style="font-size: 16px; font-weight: bold;">Alok Outlet</p>`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send({ message: 'Error sending email', error });
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(200).json({ message: 'Order submitted successfully!' });
//       }
//     });

//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     console.error('Error submitting order:', error);
//     res.status(500).send({ message: 'Error submitting order', error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  deptname: String,
});

const User = mongoose.model('User', userSchema);

// Product Schema with optimistic locking
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  tc: String,
  pdes: String,
  ss: String,
  pc: String,
  blend: String,
  originalprice: Number,
  price: Number,
  stock: Number,
  image: String
}, { versionKey: '_v' });

const Product = mongoose.model('Product', productSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  empcode: String,
  name: String,
  address: String,
  mob: String,
  email: String,
  timestamp: { type: Date, default: Date.now },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

// Order Sequence Schema
const orderSequenceSchema = new mongoose.Schema({
  _id: String,
  sequence_value: Number,
});

const OrderSequence = mongoose.model('OrderSequence', orderSequenceSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to get the next order ID
const getNextOrderId = async () => {
  const sequence = await OrderSequence.findByIdAndUpdate(
    'order_id',
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  const nextId = `AS${String(sequence.sequence_value + 1).padStart(5, '0')}`;
  return nextId;
};

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));


app.post('/signup', async (req, res) => {
  const { username, password, deptname } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, deptname });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});




app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid username or password' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Error logging in', error });
  }
});

// Get products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products', error });
  }
});

// Check stock
app.post('/check-stock', async (req, res) => {
  const { cart } = req.body;

  try {
    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).send({ status: 'error', message: 'Cart is empty or invalid.' });
    }

    for (const item of cart) {
      const product = await Product.findOne({ name: item.name });
      if (!product) {
        return res.status(404).send({ status: 'error', message: `Product with name ${item.name} not found.` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).send({ status: 'error', message: `Not enough stock for product with name ${item.name}` });
      }
    }

    res.status(200).send({ status: 'success', message: 'Stock is available.' });
  } catch (error) {
    console.error('Error checking stock:', error);
    res.status(500).send({ status: 'error', message: 'Error checking stock' });
  }
});

// Submit order
app.post('/submit-order', async (req, res) => {
  const { empcode, name, address, mob, email, cart } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (!Array.isArray(cart) || cart.length === 0) {
      throw new Error('Cart is empty or invalid.');
    }

    const orderId = await getNextOrderId();

    // Check stock availability
    for (const item of cart) {
      const product = await Product.findById(item.productId).session(session);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }
      if (product.stock < item.quantity) {
        throw new Error(`Not enough stock for product with ID ${item.productId}`);
      }
    }

    const newOrder = new Order({ orderId, empcode, name, address, mob, email, cart });
    await newOrder.save({ session });

    // Update stock with optimistic locking
    const updateStockPromises = cart.map(async (item) => {
      while (true) {
        const product = await Product.findById(item.productId).session(session);
        if (!product) throw new Error(`Product with ID ${item.productId} not found.`);
        if (product.stock < item.quantity) throw new Error(`Not enough stock for product with ID ${item.productId}`);

        product.stock -= item.quantity;
        const result = await Product.findByIdAndUpdate(item.productId, product, { session, new: true });
        if (result) break;
      }
    });

    await Promise.all(updateStockPromises);

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    // Send confirmation email and respond to the client
    const productDetailsHTML = cart.map(item => `<li>${item.name} - ${item.quantity} items - ₹${(item.price * item.quantity).toFixed(2)}</li>`).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Order Confirmation',
      html: `<p style="font-size: 16px; font-weight: bold;">Dear ${name},</p>
             <p>Thank you for your order. Your order has been received</p>
             <p>Contact Number: ${mob}</p>
             <p>Emp Code: ${empcode}</p>
             <p>Dept: ${address}</p>
             <p>Order ID: ${orderId}</p>
             <p>Order Details:</p>
             <ul>
               ${productDetailsHTML}
             </ul>
             <p>Total Quantity: ${cart.reduce((total, item) => total + item.quantity, 0)}</p>
             <p>Total Price: ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
             <p style="font-size: 16px; font-weight: bold;">Regards,</p>
             <p style="font-size: 16px; font-weight: bold;">Alok Outlet</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Error sending email', error });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Order submitted successfully!' });
      }
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error('Error submitting order:', error);
    res.status(500).send({ message: 'Error submitting order', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





