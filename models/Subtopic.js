// models/Problem.js
const mongoose = require('mongoose');

const SubtopicSchema = new mongoose.Schema({
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    subTopicId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    youtubeLink: String,
    leetcodeLink: String,
    articleLink: String,
});

module.exports = mongoose.model('sub_topic', SubtopicSchema);
