// Define the schema for the Reaction model
const reactionSchema = new mongoose.Schema({
  // The body of the reaction, required and with a maximum length of 280 characters
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  // Username of the user who posted the reaction, required
  username: {
    type: String,
    required: true
  },
  // Date when the reaction was created, defaulting to the current date
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Reaction model using the reactionSchema
const Reaction = mongoose.model('Reaction', reactionSchema);

// Export the Reaction model to be used in other parts of the application
module.exports = Reaction;
