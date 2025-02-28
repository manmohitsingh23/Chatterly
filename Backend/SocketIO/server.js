import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "https://chatterly-2.onrender.com",// The configuration ensures that only requests coming from "http://localhost:4001" are accepted by the server, which is important for security when you have a frontend and backend running on different domains or ports.
        methods: ["GET", "POST"]
    }
});

// realtime message code goes here
//This function allows you to look up a user's socket ID using their user ID. This is useful when you want to send a message to a specific user in real-time. For example, when a user sends a message to another user, you can find the receiver's socket ID and send the message to them directly.
export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
};

const users = {};  //Tracking Online Users: The users object is used to store the socket id of the users who are online. The key is the user id and the value is the socket id. This object is used to send events to specific users.

// used to listen events on server side.
io.on("connection", (socket) => { //This listens for a new connection from a client. Every time a new client connects, this event is triggered, and a new socket object is created. This object is used to communicate with the client.
    console.log("a user connected",socket.id);
    const userId = socket.handshake.query.userId; // When a client connects, they can pass some custom data along with their connection (in this case, a userId). This is typically done via URL parameters.
    if (userId) {
        users[userId] = socket.id;
        console.log("Hello ", users);
    }

    // used to send the events to all connected users
    io.emit("getOnlineUsers", Object.keys(users));  //Object.keys(users) gives an array of the user IDs of all currently connected users.

    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    });
});

export {app,io,server};