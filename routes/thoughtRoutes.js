const express = require('express'); // Import the Express framework
const router = express.Router(); // Create an instance of Express Router
const thoughtController = require('../controllers/thoughtController'); // Import the thought controller

// Define thought routes
router.get('/', thoughtController.getAllThoughts); // Handle GET request to fetch all thoughts
router.get('/:thoughtId', thoughtController.getThoughtById); // Handle GET request to fetch a thought by ID
router.post('/', thoughtController.createThought); // Handle POST request to create a new thought
router.put('/:thoughtId', thoughtController.updateThoughtById); // Handle PUT request to update a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThoughtById); // Handle DELETE request to delete a thought by ID

module.exports = router; // Export the router to be used in the main application
