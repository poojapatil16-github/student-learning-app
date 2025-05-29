const Topic = require('../models/Topic');
const UserProgress = require('../models/UserProgress');
const Subtopic = require('../models/Subtopic');

exports.getTopics = async (req, res) => {
    try {
        const userId = req.user.id;

        const topics = await Topic.find();
        const allProblems = await Subtopic.find();
        const userProgress = await UserProgress.find({ userId });

        const completedSet = new Set(userProgress.map(p => p.subTopicId));

        // Combine: group problems under their topic
        const topicWithProblems = topics.map(topic => {
            const problems = allProblems
                .filter(p => p.topicId.toString() === topic._id.toString())
                .map(p => ({
                    ...p._doc,
                    status: completedSet.has(p.subTopicId) ? 'Done' : 'Pending'
                }));

            return {
                topicId: topic._id,
                topicName: topic.topicName,
                subTopics: problems
            };
        });

        res.json(topicWithProblems);
    } catch (err) {
        console.error('Error fetching topics:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.setSubtopicStatus = async (req, res) => {
    const { subTopicId, status } = req.body;
    const userId = req.user.id;

    if (!['Done', 'Pending'].includes(status)) {
        return res.status(400).json({ msg: 'Invalid status' });
    }

    try {
        const existing = await UserProgress.findOne({ userId, subTopicId });

        if (existing) {
            if (status === 'Pending') {
                await UserProgress.deleteOne({ userId, subTopicId });
            } else {
                existing.status = 'Done';
                existing.completedAt = new Date();
                await existing.save();
            }
        } else if (status === 'Done') {
            await UserProgress.create({ userId, subTopicId, status: 'Done' });
        }

        res.json({ msg: `Subtopic marked as ${status}` });
    } catch (err) {
        console.error('Error updating status:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};
