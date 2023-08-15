const express = require('express'); // Import the Express framework
const mongoose = require('mongoose'); // Import the Mongoose library for database connection
const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 3000; // Define the port for the server to listen on

// Middleware
app.use(express.json()); // Use the Express built-in middleware for parsing JSON requests

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to the MongoDB database'); // Log successful database connection
    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Log that the server is running
    });
  })
  .catch(error => {
    console.error('Error connecting to the MongoDB database:', error); // Log database connection error
  });

// Include and use your route files
const userRoutes = require('./../routes/userRoutes'); // Import user route file
const thoughtRoutes = require('./../routes/thoughtRoutes'); // Import thought route file
const reactionRoutes = require('./../routes/reactionRoutes'); // Import reaction route file

app.use('/api/users', userRoutes); // Use user routes at /api/users
app.use('/api/thoughts', thoughtRoutes); // Use thought routes at /api/thoughts
app.use('/api/reactions', reactionRoutes); // Use reaction routes at /api/reactions

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' }); // Respond with a 404 error message
});
