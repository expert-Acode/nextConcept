import ForgotPwd from '@/components/forgotPwd'
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "User Profile",
  description: "The all profile detils of users",
};

const Profile = () => {
  return (
    <div>
      <h1 className='font-bold text-blue-600'>$ My Profile $</h1>
      <Link href='/' replace>
        Home 
      </Link>
      <div>
      </div>
     
      <h2><ForgotPwd/></h2>
    </div>
  )
}

export default Profile
