// models/Topic.js
const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    topicName: { type: String, required: true },
});

module.exports = mongoose.model('topic', TopicSchema);
