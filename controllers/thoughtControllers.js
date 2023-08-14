// Import the Thought model
const Thought = require('../../models/Thought');

// Define thoughtController object to hold controller methods
const thoughtController = {
  // Fetch all thoughts
  getAllThoughts: async (req, res) => {
    try {
      // Fetch all thoughts from the database
      const thoughts = await Thought.find();
      res.status(200).json(thoughts); // Send the thoughts as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Fetch a thought by ID
  getThoughtById: async (req, res) => {
    try {
      // Find a thought by the provided thought ID
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' }); // Return a 404 if thought doesn't exist
      }
      res.status(200).json(thought); // Send the thought as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  },

  // Create a new thought
  createThought: async (req, res) => {
    try {
      // Create a new thought using data from the request body
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought); // Send the created thought as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' }); // Handle validation or creation error
    }
  },

  // Update a thought by ID
  updateThoughtById: async (req, res) => {
    try {
      // Update the thought by ID with the data from the request body
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' }); // Return a 404 if thought doesn't exist
      }
      res.status(200).json(updatedThought); // Send the updated thought as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' }); // Handle validation or update error
    }
  },

  // Delete a thought by ID
  deleteThoughtById: async (req, res) => {
    try {
      // Delete the thought by ID
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' }); // Return a 404 if thought doesn't exist
      }
      res.status(200).json({ message: 'Thought deleted' }); // Send a success message
    } catch (error) {
      res.status(500).json({ message: 'Server error' }); // Handle error if database operation fails
    }
  }
};

// Export the thoughtController object to be used in other parts of the application
module.exports = thoughtController;
