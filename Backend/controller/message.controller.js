import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../SocketIO/server.js";
import { io } from "../SocketIO/server.js";

export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // current logged in user

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },//This condition is asking MongoDB to find documents where the members array contains both senderId and receiverId.
        });

        if (!conversation) {
            conversation = await Conversation.create({
              members: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]); // run parallel
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("error in sending message",error);
        return res.status(500).json({error:"Internal server error"});
        
    }
};

export const getMessages=async(req,res)=>{
    try {
        const {id:chatUser}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            members: { $all: [senderId, chatUser] },
        }).populate("messages");  //It allows you to automatically replace the ObjectId references with the actual data from the related collections.

        if(!conversation){
            return res.status(201).json([]);
        }

        const messages = conversation.messages;
        res.status(201).json(messages);
    } catch (error) {
        console.log("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
