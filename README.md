# 📘 Student Learning Tracker

A full-stack web application to help students track their progress while solving Data Structures and Algorithms (DSA) problems, with curated resources, levels, and personalized checkboxes to mark subtopics as done or pending.

---

## 🚀 Features

- 🔐 User Authentication using JWT
- 📚 Student learning Topics & Subtopics organized by difficulty
- ✅ Checkboxes to mark subtopics as "Done" or "Pending"
- 📊 Progress summary per difficulty (Easy/Medium/Hard)
- 🔗 Resource links: LeetCode, YouTube, Articles

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Backend    | Node.js, Express.js     |
| Database   | MongoDB with Mongoose   |
| Auth       | JWT (JSON Web Tokens)   |
| API Docs   | Swagger / OpenAPI 3.0   |

---

## 📁 Project Structure


---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/student-learning-app.git
cd student-learning-app-server
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Environment Variables
Create a `.env` file in the root directory and add the following variables:
```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/student-learning-tracker
JWT_SECRET=your_jwt_secret_key
```
### 3. Start the MongoDB Server
### 4. Seed the Database
```bash
npm seed.js
```
### 5. Start the Application
```bash
node server.js
```

### 6. Access the API Documentation
Open http://localhost:5000/api-docs in your browser to view the API documentation.

## 📄 API Endpoints
### User Authentication
| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register user     |
| POST   | /api/auth/login    | Login and get JWT |

### Topics & Subtopics
| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| GET    | /api/topics           | Fetch topics + subtopics      |
| POST   | /api/subtopics/status | Mark subtopic Done or Pending |

### Progress Summary
| Method | Endpoint           | Description                   |
| ------ |--------------------| ----------------------------- |
| GET    | /api/user/progress | Summary % by Easy/Medium/Hard |

## Swagger Docs
You can view the API documentation at `/api-docs` after starting the server.
Open http://localhost:5000 in your browser.

Use the "Authorize" button to add your JWT.

## Contributors
Puja Patil

### Student Learning Topics
