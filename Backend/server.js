const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to mern');
});

app.listen(8000, () => {
  console.log("Server is running on port 8000!");
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'your-mongodb-uri';
mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
