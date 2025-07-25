<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <h1>Chatterly 💬 - Real-Time Chat Application</h1>


  <h2>Project Overview 🚀</h2>
  <p>Chatterly is a full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It allows users to sign up, log in, and chat in real-time with other online users.</p>

  <h2>Features ✨</h2>
  <ul>
    <li>User authentication with secure password hashing 🔒.</li>
    <li>Real-time messaging using Socket.IO ⚡.</li>
    <li>Private conversations with message history stored in MongoDB 📚.</li>
    <li>Responsive UI built with React and context-based auth management 🖥️📱.</li>
    <li>Ability to see online users and manage chat sessions 👥.</li>
    <li>Secure JWT-based sessions with cookie storage 🍪.</li>
  </ul>

  <h2>Technology Stack 🛠️</h2>
  <ul>
    <li>Frontend: React, React Router, React Hot Toast 🔥</li>
    <li>Backend: Node.js, Express, Socket.IO 🔄</li>
    <li>Database: MongoDB with Mongoose 🍃</li>
    <li>Authentication: bcrypt for password hashing, JWT tokens 🔐</li>
    <li>Others: dotenv for environment variables, cors, cookie-parser 🧩</li>
  </ul>

  <h2>Setup & Installation 🧰</h2>
  <ol>
    <li>Clone the repository:<br />
      <code>git clone https://github.com/manmohitsingh23/Chatterly.git</code>
    </li>
    <li>Navigate into backend and frontend folders:<br />
      <code>cd Chatterly/Backend</code><br />
      <code>npm install</code><br />
      <code>cd ../Frontend</code><br />
      <code>npm install</code>
    </li>
    <li>Create a <code>.env</code> file in the backend folder with your MongoDB URI and other config:<br />
      <code>MONGODB_URI=your_mongo_connection_string</code><br />
      <code>PORT=5002</code>
    </li>
    <li>Start the backend server:<br />
      <code>npm run dev</code>
    </li>
    <li>Start the frontend server:<br />
      <code>npm start</code>
    </li>
    <li>Open <code>http://localhost:4001</code> in your browser to use the app 🌐.</li>
  </ol>

  <h2>Usage 🧑‍💻</h2>
  <ul>
    <li>Register a new user or log in with existing credentials 🔑.</li>
    <li>See online users and click on them to start a chat 💬.</li>
    <li>Send and receive messages instantly in real-time ⚡.</li>
    <li>Logout when done 🚪.</li>
  </ul>

  <h2>Notes 📝</h2>
  <ul>
    <li>Make sure MongoDB is running and accessible via the connection string you provide 🗄️.</li>
    <li>The backend server must run on port 5002, frontend on 4001 (default) 🔌.</li>
    <li>Socket.IO communication is configured to accept connections only from <code>http://localhost:4001</code> 🔐.</li>
  </ul>

  <h2>License 📜</h2>
  <p>This project is licensed under
