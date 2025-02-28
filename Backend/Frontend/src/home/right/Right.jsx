import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'
import useConversation from "../../statemanage/useConversation.js";
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { CiMenuFries } from 'react-icons/ci';

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className='w-full h-screen border-white bg-slate-950 text-white'>
      {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <Messages />
            <Type />
          </>
        )
      }  
    </div>
  )
}

export default Right;


const NoChatSelected = () => {

  const [authUser]=useAuth();
  console.log(authUser);

  return (
    <>
      <div className="relative">
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );

};