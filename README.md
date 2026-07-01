#  ClubVerse

ClubVerse is a full-stack MERN web application designed to simplify college club management. It provides a centralized platform where students can explore clubs, register for events, and manage memberships, while coordinators can organize events and oversee club activities.

---

##  Features

###  Student
- Browse all clubs
- View upcoming events
- Filter events by category and price
- Register for free events
- Book paid events
- Join clubs
- View club details

###  Club Coordinator
- Coordinator Dashboard
- Create Events
- Update Events
- Delete Events
- View all created events
- Dashboard statistics
  - Total Events
  - Free Events
  - Paid Events

###  Authentication (In Progress)
- Student Login
- Coordinator Login
- JWT Authentication
- Protected Routes

### 📋 Membership (Upcoming)
- Join Club Requests
- Approve Members
- Reject Members
- View Club Members

---

#  Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Zod Validation

---

# 📂 Project Structure

```
ClubVerse
│
├── frontend
│   ├── src
│   │
│   ├── components
│   │   ├── coordinator
│   │   ├── events
│   │   ├── clubs
│   │   └── common
│   │
│   ├── pages
│   ├── api
│   ├── hooks
│   ├── utils
│   └── App.jsx
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── validators
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ClubVerse.git

cd ClubVerse
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/clubverse

JWT_SECRET=your_secret_key
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Application runs at

```
http://localhost:5173
```

Backend runs at

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Events

| Method   | Endpoint          | Description     |
|----------|-------------------|-----------------|
| GET      | `/api/events`     | Get all events  |
| GET      | `/api/events/:id` | Get event by ID |
| POST     | `/api/events`     | Create event    |
| PUT      | `/api/events/:id` | Update event    |
| DELETE   | `/api/events/:id` | Delete event    |


# 👨‍💻 Contributors

- **Bhavya**
- **Amanpreet Kaur Garcha**

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.
