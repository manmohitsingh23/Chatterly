import React from 'react';
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
import { useState } from 'react';

const Type = () => {
  const [message, setMessage] = useState("");

  const {loading,sendMessage} = useSendMessage();
  // console.log(loading);
  // console.log(sendMessage);

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className='h-[11vh] w-full'>
      <div className='w-full h-full flex items-center justify-center p-4 bg-slate-800 shadow-md'>
        {/* Input Container */}
        <div className='flex w-full'>
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-none max-w-xl px-4 py-2 rounded-full bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Send Button */}
        <button
          className="ml-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <IoSend className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Type;
