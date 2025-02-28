import React, { useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";
import { toast } from "react-hot-toast";
// import useRecepientPublicKey from "./useRecepientPublicKey.js";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages,setMessages, selectedConversation } = useConversation();
 
  const sendMessage = async (message) => {
    if (!selectedConversation || !selectedConversation._id) {
      // If no conversation is selected, show an error toast
      toast.error("Please select a conversation to send a message.");
      return;  // Exit early if no conversation is selected
    }

    // Encrypting the message
    // if (!recepientPublicKey) {
    //   toast.error("Recipient public key not available.");
    //   return;
    // }
    // console.log("recepientPublicKey",recepientPublicKey);
    // const { encryptedMessage} = await encryptMessage(message, recepientPublicKey);

    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      console.log("res.data",res.data);
      setMessages([...messages, res.data]);
      console.log("messages in send message",messages);
      setLoading(false);
      toast.success("Message sent!");
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
      toast.error("Failed to send message. Please try again.");
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
