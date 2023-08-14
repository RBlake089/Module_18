const mongoose = require('mongoose');

// Define the schema for the Thought model
const thoughtSchema = new mongoose.Schema({
  // Text of the thought, required and with a maximum length of 280 characters
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280
  },
  // Date when the thought was created, defaulting to the current date
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Username of the user who posted the thought, required
  username: {
    type: String,
    required: true
  },
  // Defining the relationship with reactions
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reaction' // Referring to the 'Reaction' model
  }]
});

// Create the Thought model using the thoughtSchema
const Thought = mongoose.model('Thought', thoughtSchema);

// Export the Thought model to be used in other parts of the application
module.exports = Thought;
