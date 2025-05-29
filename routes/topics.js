const express = require('express');
const auth = require('../middleware/auth');
const { getTopics, markSubTopicAsComplete, setSubtopicStatus } = require('../controllers/topicController');
const router = express.Router();

/**
 * @swagger
 * /api/topics:
 *   get:
 *     summary: Get all topics and problems
 *     tags: [Topics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of DSA topics
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   topicName:
 *                     type: string
 *                   problems:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         level:
 *                           type: string
 *                         youtubeLink:
 *                           type: string
 *                         leetcodeLink:
 *                           type: string
 *                         articleLink:
 *                           type: string
 *                         subTopicId:
 *                           type: string
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth, getTopics);

/**
 * @swagger
 * /api/topics/status:
 *   post:
 *     summary: Update subtopic completion status
 *     description: Mark or unmark a subtopic as completed by the logged-in student.
 *     tags: [Topics]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subTopicId
 *               - status
 *             properties:
 *               subTopicId:
 *                 type: string
 *                 example: algo_sort_1
 *               status:
 *                 type: string
 *                 enum: [Done, Pending]
 *                 example: Done
 *     responses:
 *       200:
 *         description: Subtopic status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Subtopic marked as Done
 *       400:
 *         description: Invalid input or status
 *       401:
 *         description: Unauthorized - JWT required
 *       500:
 *         description: Internal server error
 */
router.post('/status', auth, setSubtopicStatus);

module.exports = router;
