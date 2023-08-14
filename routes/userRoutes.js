const express = require('express'); // Import the Express framework
const router = express.Router(); // Create an instance of Express Router
const userController = require('../controllers/userController'); // Import the user controller

// Define user routes
router.get('/', userController.getAllUsers); // Handle GET request to fetch all users
router.get('/:userId', userController.getUserById); // Handle GET request to fetch a user by ID
router.post('/', userController.createUser); // Handle POST request to create a new user
router.put('/:userId', userController.updateUserById); // Handle PUT request to update a user by ID
router.delete('/:userId', userController.deleteUserById); // Handle DELETE request to delete a user by ID

module.exports = router; // Export the router to be used in the main application
