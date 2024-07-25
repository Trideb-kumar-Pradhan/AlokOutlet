import React, { useState } from 'react';
import axios from 'axios';

const OrderDetails = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/products/orderdetails', {
        params: { fromDate, toDate },
      });

      setOrders(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching order details:', error);
      setError('Error fetching order details. Please try again later.');
      setOrders([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchOrders();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          From Date:
          <input type="date" value={fromDate} onChange={handleFromDateChange} />
        </label>
        <label>
          To Date:
          <input type="date" value={toDate} onChange={handleToDateChange} />
        </label>
        <button type="submit">Filter Orders</button>
      </form>

      {error && <p>{error}</p>}

      <h2>Order Details</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <strong>Order ID:</strong> {order.orderId}<br />
            <strong>Name:</strong> {order.name}<br />
            <strong>Address:</strong> {order.address}<br />
            <strong>Mobile:</strong> {order.mob}<br />
            {/* Display other relevant order details */}
            <strong>Products:</strong>
            <ul>
              {order.cart.map((item) => (
                <li key={item.productId._id}>
                  {item.name} - {item.price} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
