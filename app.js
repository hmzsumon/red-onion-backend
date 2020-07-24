const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routers/foodRoutes');
const userRoutes = require('./routers/userRoutes');
const cartRoutes = require('./routers/cartRoutes');
const orderRoutes = require('./routers/orderRoutes');
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/foods', foodRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome red Onion!' });
});

// unHandler routes
app.all('*', (req, res) => {
  res.send({ message: 'Not found' });
});

module.exports = app;
