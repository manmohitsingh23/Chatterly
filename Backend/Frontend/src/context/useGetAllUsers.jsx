import React, { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import toast from 'react-hot-toast';

//we are making a hook

const useGetAllUsers = () => {
    const [allUsers,setAllUsers]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const getUsers=async()=>{
            setLoading(true);
            try {
                // const token= Cookies.get("jwt");
                // console.log("token",Cookies.get("jwt"));  // Debugging
                // if (!token) {
                //     throw new Error("No token found. Please log in.");
                // }
                const response=await axios.get("/api/user/allusers",{
                    withCredentials:true, //Automatically includes HTTP-only cookies
                    // headers:{
                    //     Authorization:`Bearer ${token}`
                    // }
                });
                console.log("Users fetched:", response.data);  // Debugging

                setAllUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.log("error in userGetALlUsers",error);
                toast.error(error.response?.data?.error || "Something went wrong");
            }
        }
        getUsers();
    },[]);
  return [allUsers,loading]; // its a hook so we are returning the array
}

export default useGetAllUsers;
