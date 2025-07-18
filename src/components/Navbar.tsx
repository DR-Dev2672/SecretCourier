'use client'
import React from 'react'
import { useSession ,signOut} from 'next-auth/react'
import { User } from 'next-auth';
import { Button } from '@react-email/components';
import Link from 'next/link';


function Navbar() {
    const {data:session}=useSession();
    const user: User=session?.user;
  return (
   
   <>
   <nav className='className="p-4 md:p-6 shadow-md bg-gray-900 text-white"'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">True Feedback</a>
        {session?
        (
            <>
            <span>Welcome,{user.username||user.email}</span>
            <Button  onClick={()=>signOut} className="w-full md:w-auto bg-slate-100 text-black" >Logout</Button>
            </>
        ):(
            <Link href="/sign-in">
                <Button className="w-full md:w-auto bg-slate-100 text-black">Login</Button>
            </Link>

        )
    }
        
    </div>

   </nav>
   </>
  )
}

export default Navbar
