import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';
import EditProfile from '../components/EditProfile/EditProfile';
import UserProfile from '../components/UserProfile/UserProfile';

const AccountView = ({ userData, formattedDate }: any) => {
  const { setActiveTab } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setActiveTab('account');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>
      <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>

        {isEditing ? (
          <EditProfile isEditing={isEditing} setIsEditing={setIsEditing} />
        ) : (
          <UserProfile isEditing={isEditing} setIsEditing={setIsEditing} userData={userData} formattedDate={formattedDate} />
        )}

      </div>
    </div>
  )
}

export default AccountView;