<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: auto;
      padding: 20px;
      background: #f9f9f9;
      color: #222;
      line-height: 1.6;
    }
    h1, h2 {
      color: #333;
    }
    code {
      background: #eee;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
    pre {
      background: #eee;
      padding: 10px;
      overflow-x: auto;
      border-radius: 5px;
    }
    ul {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <h1>Chatterly - Real-Time Chat Application</h1>

  <p><strong>Author:</strong> Manmohit Singh (<a href="https://github.com/manmohitsingh23" target="_blank" rel="noopener noreferrer">GitHub Profile</a>)</p>

  <h2>Project Overview</h2>
  <p>Chatterly is a full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It allows users to sign up, log in, and chat in real-time with other online users.</p>

  <h2>Features</h2>
  <ul>
    <li>User authentication with secure password hashing.</li>
    <li>Real-time messaging using Socket.IO.</li>
    <li>Private conversations with message history stored in MongoDB.</li>
    <li>Responsive UI built with React and context-based auth management.</li>
    <li>Ability to see online users and manage chat sessions.</li>
    <li>Secure JWT-based sessions with cookie storage.</li>
  </ul>

  <h2>Technology Stack</h2>
  <ul>
    <li>Frontend: React, React Router, React Hot Toast</li>
    <li>Backend: Node.js, Express, Socket.IO</li>
    <li>Database: MongoDB with Mongoose</li>
    <li>Authentication: bcrypt for password hashing, JWT tokens</li>
    <li>Others: dotenv for environment variables, cors, cookie-parser</li>
  </ul>

  <h2>Setup & Installation</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/manmohitsingh23/Chatterly.git</code></pre>
    </li>
    <li>Navigate into backend and frontend folders:
      <pre><code>cd Chatterly/Backend
npm install
cd ../Frontend
npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the backend folder with your MongoDB URI and other config:
      <pre><code>MONGODB_URI=your_mongo_connection_string
PORT=5002</code></pre>
    </li>
    <li>Start the backend server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Start the frontend server:
      <pre><code>npm start</code></pre>
    </li>
    <li>Open <code>http://localhost:4001</code> in your browser to use the app.</li>
  </ol>

  <h2>Usage</h2>
  <ul>
    <li>Register a new user or log in with existing credentials.</li>
    <li>See online users and click on them to start a chat.</li>
    <li>Send and receive messages instantly in real-time.</li>
    <li>Logout when done.</li>
  </ul>

  <h2>Notes</h2>
  <ul>
    <li>Make sure MongoDB is running and accessible via the connection string you provide.</li>
    <li>The backend server must run on port 5002, frontend on 4001 (default).</li>
    <li>Socket.IO communication is configured to accept connections only from <code>http://localhost:4001</code>.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
  <p>
    Copyright &copy; 2025 Manmohit Singh<br />
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software...
  </p>

  <h2>Acknowledgments</h2>
  <p>Big thanks to everyone who inspires me to code and the open-source community that makes projects like this possible.</p>
  <p>If you use or modify this project, a shoutout to <strong>Manmohit Singh</strong> would be appreciated!</p>

  <hr />
  <p style="text-align:center; font-style: italic;">"Code, chat, and chill – because great conversations deserve great apps!" 🚀</p>
</body>
</html>
