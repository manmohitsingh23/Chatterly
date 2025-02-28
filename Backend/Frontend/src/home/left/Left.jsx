import React from 'react'
import Search from './Search';
import Users from './Users';

const Left = () => {
  return (
    <div className='w-full h-screen border-white bg-black text-white'>
        <h1 className='font-bold p-2 px-11 text-3xl'>Chats</h1>
        <Search />
        <hr className='p-2'/>
        <Users />
    </div>
  )
}

export default Left;
