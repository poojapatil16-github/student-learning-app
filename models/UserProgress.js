const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subTopicId: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Done'], default: 'Done' },
    completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user_progress',  UserProgressSchema);
