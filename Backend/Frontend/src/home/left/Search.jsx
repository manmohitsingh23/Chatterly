import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import useGetAllUsers from '../../context/useGetAllUsers.jsx';
import useConversation from '../../statemanage/useConversation.js';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers]=useGetAllUsers();
  const {setSelectedConversation}=useConversation();
  // const [filteredUsers,setFilteredUsers]=useState(allUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className='h-[10vh]'>
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 md:gap-3">
          {/* Input Field */}
          <input
            type="text"
            className="mx-2 border-none w-full px-5 py-2 rounded-full text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          
          {/* Search Icon Button */}
          <button
            type="submit"
            className="p-1 mx-2 text-white rounded-full hover:bg-blue-400 hover:scale-110 transition-all duration-300"
          >
            <IoSearch className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Search;
