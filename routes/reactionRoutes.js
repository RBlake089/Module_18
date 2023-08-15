const express = require('express'); // Import the Express framework
const router = express.Router(); // Create an instance of Express Router
const reactionController = require('../controllers/reactionController'); // Import the reaction controller

// Define reaction routes
router.get('/', reactionController.getAllReactions); // Handle GET request to fetch all reactions
router.get('/:reactionId', reactionController.getReactionById); // Handle GET request to fetch a reaction by ID
router.post('/', reactionController.createReaction); // Handle POST request to create a new reaction
router.delete('/:reactionId', reactionController.deleteReactionById); // Handle DELETE request to delete a reaction by ID

module.exports = router; // Export the router to be used in the main application
