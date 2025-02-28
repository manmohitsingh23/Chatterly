import React, { useState } from 'react';
import { CiLogout, CiMenuFries } from "react-icons/ci"; // Import CiMenuFries
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

const Logout = ({ toggleDrawer }) => {  // Added toggleDrawer as a prop
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };

  return (
    <div className="h-screen w-[8vw] border-white bg-slate-900 text-white flex flex-col justify-between">
      {/* CiMenuFries Button for Drawer */}
      <button 
        className="hover:cursor-pointer" // Added responsive text sizes
        onClick={toggleDrawer} // Toggle the drawer when clicked
      >
        <CiMenuFries className="rounded-lg text-3xl md:text-4xl lg:text-5xl p-2 mx-auto hover:bg-slate-700 my-3 transition-all duration-200" /> {/* Responsive Icon Size */}
      </button>

      {/* Logout Button */}
      <button className="hover:cursor-pointer" onClick={handleLogout}>
        <CiLogout className="rounded-lg text-3xl md:text-4xl lg:text-5xl p-2 mx-auto hover:bg-slate-700 my-3 transition-all duration-200" />
      </button>
    </div>
  );
};

export default Logout;
