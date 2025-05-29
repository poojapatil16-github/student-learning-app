const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {get} = require("mongoose");
const { getUserProgressSummary } = require('../controllers/userController');
/**
 * @swagger
 * /api/user/progress:
 *   get:
 *     summary: Get user progress summary
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User progress summary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 summary:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       level:
 *                         type: string
 *                         example: "Easy"
 *                       total:
 *                         type: integer
 *                         example: 5
 *                       completed:
 *                         type: integer
 *                         example: 3
 *                       percentage:
 *                         type: string
 *                         example: "60.00"
 *       401:
 *         description: Unauthorized - JWT token missing or invalid
 *       500:
 *         description: Internal Server Error
 */
router.get('/progress', auth, getUserProgressSummary);

module.exports = router;