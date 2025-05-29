const Subtopic = require('../models/Subtopic');
const UserProgress = require('../models/UserProgress');

exports.getUserProgressSummary = async (req, res) => {
    const userId = req.user.id;

    try {
        const allSubtopics = await Subtopic.find();

        const levelCounts = {
            Easy: 0,
            Medium: 0,
            Hard: 0,
        };

        allSubtopics.forEach(sub => {
            levelCounts[sub.level]++;
        });

        const userProgress = await UserProgress.find({ userId });
        const completedSubtopicIds = new Set(userProgress.map(p => p.subTopicId));

        const completedLevelCounts = {
            Easy: 0,
            Medium: 0,
            Hard: 0,
        };

        allSubtopics.forEach(sub => {
            if (completedSubtopicIds.has(sub.subTopicId)) {
                completedLevelCounts[sub.level]++;
            }
        });

        const summary = ['Easy', 'Medium', 'Hard'].map(level => ({
            level,
            total: levelCounts[level],
            completed: completedLevelCounts[level],
            percentage: levelCounts[level]
                ? ((completedLevelCounts[level] / levelCounts[level]) * 100).toFixed(2)
                : '0.00'
        }));

        res.json({ summary });
    } catch (err) {
        console.error('Error fetching progress summary:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};
