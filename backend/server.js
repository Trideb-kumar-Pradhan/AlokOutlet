
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 8000;


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


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
});
const Product = mongoose.model('Product', productSchema);


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


const orderSequenceSchema = new mongoose.Schema({
  _id: String,
  sequence_value: Number,
});
const OrderSequence = mongoose.model('OrderSequence', orderSequenceSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


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


app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products', error });
  }
});

app.post('/submit-order', async (req, res) => {
  const { empcode, name, address, mob, email, cart } = req.body;

  try {
    if (!Array.isArray(cart) || cart.length === 0) {
      throw new Error('Cart is empty or invalid.');
    }

    const orderId = await getNextOrderId();

    const newOrder = new Order({ orderId, empcode, name, address, mob, email, cart });
    await newOrder.save();

    const updateStockPromises = cart.map(async (item) => {
      const product = await Product.findById(item.productId);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }
      product.stock -= item.quantity;
      await product.save();
    });



    await Promise.all(updateStockPromises);

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
    console.error('Error submitting order:', error);
    res.status(500).send({ message: 'Error submitting order', error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


