const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *                 description: Username of the user
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *                 description: Email address of the user
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *                 description: Password for the account
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: string
 *                   description: JWT token for authentication
 *                 id:
 *                   type: string
 *                   example: string
 *                   description: User ID
 *                 username:
 *                   type: string
 *                   example: string
 *                   description: Username of the user
 *                 email:
 *                   type: string
 *                   example: string
 *                   description: Email address of the user
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: student@example.com
 *               password:
 *                 type: string
 *                 example: securepass
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: string
 *                   description: JWT token for authentication
 *                 id:
 *                   type: string
 *                   example: string
 *                   description: User ID
 *                 username:
 *                   type: string
 *                   example: string
 *                   description: Username of the user
 *                 email:
 *                   type: string
 *                   example: string
 *                   description: Email address of the user
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', login);

module.exports = router;
