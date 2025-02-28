import React from 'react'
import User from './User';
import useGetAllUsers from '../../context/useGetAllUsers.jsx';

const Users = () => {
  const [allUsers,loading]=useGetAllUsers();
  console.log("allUsers : ",allUsers);
  return (
    <div className='flex-ankit overflow-y-auto h-[74vh] custom-scrollbar'>
        {allUsers.map((user,index) => {
          return <User key={index} user={user} />
        })}
    </div>
  )
}

export default Users;
