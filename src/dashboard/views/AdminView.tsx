import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';
import EditProfile from '../components/EditProfile/EditProfile';
import UserProfile from '../components/UserProfile/UserProfile';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Loader from '@/components/common/Loader';
import { AvatarIcon, BadgeIcon, Cross1Icon, ExitIcon, HamburgerMenuIcon, LockClosedIcon, Pencil2Icon, RocketIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import LockedTab from '../common/LockedTab';
import MembershipCmp from '../components/MembershipCmp/MembershipCmp';
import { Phone } from 'lucide-react';
import UpdatePass from '../components/UpdatePass/UpdatePass';
import RequestService from '../components/RequestService/RequestService';
import FeedbackCmp from '../components/FeedbackCmp/FeedbackCmp';
import WrongSession from '../common/WrongSession';

const AdminView = () => {
  const { setActiveTab, loading, userData, authenticated } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  const formattedDate = userData?.dob?.split("T")[0];

  const [navOpen, setNavOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("accountDetail");

  useEffect(() => {
    setActiveTab('account');
  }, [setActiveTab]);

  useEffect(() => {
    if (!authenticated) {
      const interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        router.push('/auth/login');
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [authenticated, router]);

  const logOutSession = () => {
    signOut({ callbackUrl: '/' });
  };

  useEffect(() => {
    setActiveTab('account');
  }, [setActiveTab]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : !authenticated ? (
        <WrongSession />
      ) : (
        <div className={`w-full h-auto min-h-screen flex flex-col gap-6 items-center justify-start relative bg-[#dddddd] overflow-hidden`}>

          <div className='w-full h-64 bg-blue-600 text-3xl font-semibold text-white flex items-center justify-center relative'>
            <div className='w-10/12 h-auto flex flex-row items-center justify-between top-10'>

              <div className='md:hidden flex text-base font-light transition-all bg-black hover:bg-black/70 text-white border-2 border-black hover:border-black/70 cursor-pointer rounded px-3 py-1' onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? (
                  <Cross1Icon className='h-6' />
                ) : (
                  <HamburgerMenuIcon className='h-6' />
                )}
              </div>

              <Link href='/' className='text-base font-light transition-all bg-black hover:bg-black/70 text-white border-2 border-black hover:border-black/70 cursor-pointer rounded px-3 py-1'>
                <span className='md:flex hidden'>Back to Home</span>
                <span className='md:hidden flex'>
                  <ExitIcon className='h-6' />
                </span>
              </Link>

            </div>

          </div>

          <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-start justify-center gap-6 mb-10'>

            <div className='w-96 md:flex hidden flex-col h-auto bg-white shadowBorder rounded'>

              <div className='w-full h-full relative overflow-hidden'>
                <Image src={userData?.profile ? `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${userData.profile}.png` : '/home/members/avatar.png'} alt='profile' width={384} height={384} priority={true} className='md:w-96 w-80 md:h-72 h-80 object-cover border-4 border-white rounded' />
              </div>

              <div className='flex flex-col pb-4'>

                <div onClick={() => setCurrentTab('accountDetail')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'accountDetail' && 'bg-[#2d5fa6] text-white'}`}>
                  <AvatarIcon className='w-6 h-6' />
                  <span>Account Details</span>
                </div>

                <div onClick={() => setCurrentTab('editAccount')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'editAccount' && 'bg-[#2d5fa6] text-white'}`}>
                  <Pencil2Icon className='w-6 h-6' />
                  <span>Edit Details</span>
                </div>

                <div onClick={() => setCurrentTab('membership')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'membership' && 'bg-[#2d5fa6] text-white'}`}>
                  <BadgeIcon className='w-6 h-6' />
                  <span>Membership</span>
                </div>

                <div onClick={() => setCurrentTab('password')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'password' && 'bg-[#2d5fa6] text-white'}`}>
                  <LockClosedIcon className='w-6 h-6' />
                  <span>Password</span>
                </div>

                <div onClick={() => setCurrentTab('services')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'services' && 'bg-[#2d5fa6] text-white'}`}>
                  <Phone className='w-6 h-6' />
                  <span>Request Service</span>
                </div>

                <div onClick={() => setCurrentTab('referral')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'referral' && 'bg-[#2d5fa6] text-white'}`}>
                  <RocketIcon className='w-6 h-6' />
                  <span>Feedback</span>
                </div>

                <div className='mt-10 flex flex-col gap-4 px-4'>
                  <Button onClick={logOutSession} className='px-4 flex flex-row text-base gap-2 items-center justify-start cursor-pointer'>
                    <ExitIcon className='min-w-6 min-h-6' />
                    <span>Signout</span>
                  </Button>

                  <div className='flex flex-col w-full py-3 px-2'>
                    <span className='text-sm'>You're logged in as</span>
                    <span className='font-bold uppercase text-[#3b3b3b] cursor-pointer'>{userData?.email}</span>
                  </div>
                </div>

              </div>
            </div>

            <div className={`fixed top-0 ${navOpen ? 'right-0' : '-right-72'} z-50 md:hidden flex flex-col w-72 h-screen bg-white shadowBorder rounded`}>

              <div className='flex flex-col pb-4'>

                <div onClick={() => setCurrentTab('accountDetail')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'accountDetail' && 'bg-[#2d5fa6] text-white'}`}>
                  <AvatarIcon className='w-6 h-6' />
                  <span>Account Details</span>
                </div>

                <div onClick={() => setCurrentTab('editAccount')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'editAccount' && 'bg-[#2d5fa6] text-white'}`}>
                  <Pencil2Icon className='w-6 h-6' />
                  <span>Edit Details</span>
                </div>

                <div onClick={() => setCurrentTab('membership')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'membership' && 'bg-[#2d5fa6] text-white'}`}>
                  <BadgeIcon className='w-6 h-6' />
                  <span>Membership</span>
                </div>

                <div onClick={() => setCurrentTab('password')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'password' && 'bg-[#2d5fa6] text-white'}`}>
                  <LockClosedIcon className='w-6 h-6' />
                  <span>Password</span>
                </div>

                <div onClick={() => setCurrentTab('services')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'services' && 'bg-[#2d5fa6] text-white'}`}>
                  <Phone className='w-6 h-6' />
                  <span>Request Service</span>
                </div>

                <div onClick={() => setCurrentTab('feedback')} className={`p-3 flex flex-row gap-2 items-center justify-start cursor-pointer ${currentTab === 'feedback' && 'bg-[#2d5fa6] text-white'}`}>
                  <RocketIcon className='w-6 h-6' />
                  <span>Feedback</span>
                </div>

                <div className='mt-10 flex flex-col gap-4 px-4'>
                  <Button onClick={logOutSession} className='px-4 flex flex-row text-base gap-2 items-center justify-start cursor-pointer'>
                    <ExitIcon className='min-w-6 min-h-6' />
                    <span>Signout</span>
                  </Button>

                  <div className='flex flex-col w-full py-3 px-2'>
                    <span className='text-sm'>You're logged in as</span>
                    <span className='font-bold uppercase text-[#3b3b3b] cursor-pointer'>{userData?.email}</span>
                  </div>
                </div>

              </div>
            </div>

            {currentTab === 'editAccount' && (
              <EditProfile isEditing={isEditing} setIsEditing={setIsEditing} />
            )}

            {currentTab === 'accountDetail' && (
              <UserProfile isEditing={isEditing} setIsEditing={setIsEditing} userData={userData} formattedDate={formattedDate} />
            )}

            {currentTab === 'membership' && (
              userData.verified ? (
                <MembershipCmp />
              ) : (
                <LockedTab />
              )
            )}

            {currentTab === 'password' && (
              userData.verified ? (
                <UpdatePass />
              ) : (
                <LockedTab />
              )
            )}

            {currentTab === 'services' && (
              userData.verified ? (
                <RequestService />
              ) : (
                <LockedTab />
              )
            )}

            {currentTab === 'referral' && (
              userData.verified ? (
                <FeedbackCmp />
              ) : (
                <LockedTab />
              )
            )}

          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default AdminView;