# Arnav Goel CSE1 Jewelry Shop Project

A full-stack web application for a jewelry shop, built with **React.js** (frontend), **Node.js** (backend), and **MongoDB** (database). Features include user authentication, product browsing, cart management, and order tracking.

## Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or MongoDB Atlas

### Folder Structure
```
.
├── Backend/                    # Backend server code
│   ├── config/                 # Database connection
│   ├── controllers/            # API logic
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── server.js               # Express server
│   └── .env                    # Environment variables
└── Frontend/                   # Frontend React app
    ├── public/                 # Static assets
    ├── src/                    # React components, pages
    ├── .gitignore              # Git ignore rules
    ├── package.json            # Dependencies and scripts
    └── tailwind.config.js      # Tailwind CSS config
```

## Running the Project

### 1. Backend Setup
1. Navigate to `Backend/`:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file in `Backend/`:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```
   Runs at `http://localhost:5000`.

### 2. Frontend Setup
1. Navigate to `Frontend/`:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file in `Frontend/`:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the React app:
   ```bash
   npm start
   ```
   Runs at `http://localhost:3000`.

## Features
**Frontend:**
- Product listings
- User authentication (signup/login)
- Cart and checkout

**Backend:**
- JWT-based authentication
- Order and inventory management
- Admin/user roles

## Video Demonstration
[Project Video](https://drive.google.com/file/d/1yXsSCTnPJViWJJlk1bwrCqPM-ORzcAZ-/view?usp=sharing)

Shows the app's functionality: login, product browsing, cart, and order completion.

## Project Report
[Project Report - Word File](your_drive_link_here)

Covers technical details, design, and implementation.

## Contributing
1. Fork the repository
2. Create a branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push (`git push origin feature-branch`)
5. Create a pull request

## License
MIT License - see the LICENSE file for details.
