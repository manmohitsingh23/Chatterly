import React from 'react'
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from '../../context/socketContext.jsx';

const ChatUser = () => {
  const {selectedConversation} = useConversation();
  console.log(selectedConversation);
  const {socket ,onlineUsers} = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (
    <div className='h-[14vh] flex items-center p-3 gap-4 bg-gray-900 hover:bg-gray-600 cursor-pointer'>
      <div>
        <div className="avatar online">
            <div className="w-15 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-white">{selectedConversation.fullname}</h1>
                <span className="text-sm text-gray-500">{getOnlineUsersStatus(selectedConversation._id)}</span>
            <div/> 
        </div>       
    </div>
  )
}

export default ChatUser
