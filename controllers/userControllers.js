// Import the User model
const User = require('../../models/User');

// Define userController object to hold controller methods
const userController = {
  // Fetch all users
  getAllUsers: async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.find();
      res.status(200).json(users); // Send the users as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Fetch a user by ID
  getUserById: async (req, res) => {
    try {
      // Find a user by the provided user ID
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // Return a 404 if user doesn't exist
      }
      res.status(200).json(user); // Send the user as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    try {
      // Create a new user using data from the request body
      const newUser = await User.create(req.body);
      res.status(201).json(newUser); // Send the created user as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' }); // Handle validation or creation error
    }
  },

  // Update a user by ID
  updateUserById: async (req, res) => {
    try {
      // Update the user by ID with the data from the request body
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' }); // Return a 404 if user doesn't exist
      }
      res.status(200).json(updatedUser); // Send the updated user as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' }); // Handle validation or update error
    }
  },

  // Delete a user by ID
  deleteUserById: async (req, res) => {
    try {
      // Delete the user by ID
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' }); // Return a 404 if user doesn't exist
      }
      res.status(200).json({ message: 'User deleted' }); // Send a success message
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  }
};

// Export the userController object to be used in other parts of the application
module.exports = userController;
