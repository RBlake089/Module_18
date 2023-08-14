// Import the Reaction model
const Reaction = require('../../models/Reaction');

// Define reactionController object to hold controller methods
const reactionController = {
  // Fetch all reactions
  getAllReactions: async (req, res) => {
    try {
      // Fetch all reactions from the database
      const reactions = await Reaction.find();
      res.status(200).json(reactions); // Send the reactions as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Fetch a reaction by ID
  getReactionById: async (req, res) => {
    try {
      // Find a reaction by the provided reaction ID
      const reaction = await Reaction.findById(req.params.reactionId);
      if (!reaction) {
        return res.status(404).json({ message: 'Reaction not found' }); // Return a 404 if reaction doesn't exist
      }
      res.status(200).json(reaction); // Send the reaction as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Create a new reaction
  createReaction: async (req, res) => {
    try {
      // Create a new reaction using data from the request body
      const newReaction = await Reaction.create(req.body);
      res.status(201).json(newReaction); // Send the created reaction as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' }); // Handle validation or creation error
    }
  },

  // Delete a reaction by ID
  deleteReactionById: async (req, res) => {
    try {
      // Delete the reaction by ID
      const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
      if (!deletedReaction) {
        return res.status(404).json({ message: 'Reaction not found' }); // Return a 404 if reaction doesn't exist
      }
      res.status(200).json({ message: 'Reaction deleted' }); // Send a success message
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  }
};

// Export the reactionController object to be used in other parts of the application
module.exports = reactionController;
