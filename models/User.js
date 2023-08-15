// Define the schema for the User model
const userSchema = new mongoose.Schema({
  // Username field, required and unique
  username: {
    type: String,
    required: true,
    unique: true
  },
  // Email field, required and unique
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Other user properties like name, profile picture, etc.
  name: {
    type: String,
    required: true
  },
  profilePicture: String, // You can customize this field as needed

  // Defining the relationship with friends
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Referring to the 'User' model
  }]
});

// Create the User model using the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;

