// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true,unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    completedProblems: [String], // Store problem IDs
});

module.exports = mongoose.model('user', UserSchema);
