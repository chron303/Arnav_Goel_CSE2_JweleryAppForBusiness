const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes'); 
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
mongoose.connect('mongodb://localhost:27017/harsiddhi-jewellers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err));
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
mongoose.connect("mongodb://localhost:27017/harsiddhi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
