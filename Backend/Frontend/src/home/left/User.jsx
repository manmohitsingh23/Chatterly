import React from 'react'
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from '../../context/socketContext.jsx';

const User = ({user}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket ,onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  console.log("Selected Conversation:", selectedConversation);
  console.log("User Selected:", user);
  console.log("Is Online:", isOnline);

  const handleSelectConversation = () => {
    // if (selectedConversation && selectedConversation._id === user._id) {
    //   // Handle already selected state if needed
    //   return;
    // }

    setSelectedConversation(user);
    console.log("Set Selected Conversation in User:", selectedConversation);
  };

  return (
    <div onClick={handleSelectConversation} className={`${isSelected ? "bg-slate-700" : ""}`}>  
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-slate-700 hover:cursor-pointer transition-all duration-300 max-w-md mx-auto">
        {/* Avatar with online indicator */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-15 h-15 rounded-full ring-4 ring-blue-500 overflow-hidden">
            <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
                className="object-cover w-full h-full"
            />
            </div>
        </div>

        {/* User Information */}
        <div className="flex flex-col text-center md:text-left">
            <h1 className="text-xl font-semibold text-white">{user.fullname}</h1>
            <span className="text-sm text-gray-500">{user.email}</span>
        </div>
        </div>
    </div>
  )
}

export default User;
