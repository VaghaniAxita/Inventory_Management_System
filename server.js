require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB  = require('./config/db');
const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to enventory management Api!');
});
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);


app.use(errorHandler);


app.listen(5000, () => console.log(`Server running on port 5000`));
