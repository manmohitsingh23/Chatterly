import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext.jsx'
import useConversation from '../statemanage/useConversation.js';
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    console.log("useGetSocketMessage",socket);
    const {messages,setMessages}=useConversation();

    useEffect(() => {
        if (!socket) {
            console.warn('Socket is not initialized.');
            return;
        }
        socket.on("newMessage", (newMessage) => {
            console.log("newMessage",newMessage);
            const notification = new Audio(sound);
            notification.play();
            setMessages([...messages, newMessage]);
        });

        return () => {
            socket.off("newMessage");
        };
    }, [socket,messages,setMessages]);
}

export default useGetSocketMessage;
