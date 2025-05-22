"use client";
import MainButton from '@/app/components/mainButton'
import React from 'react'
import styles from './page.module.css';
import MainTextField from '@/app/components/MainTextField';
import Card from '@/app/components/Card';
import { usePathname } from 'next/navigation';

function Home() {
    const Name = "Login1"

    const pathName = usePathname();

    const handleClick = () => {
        console.log("Button clicked");
    }
  return (
    <div className='bg-gray-200 max-h-screen flex items-center justify-between'
    >
      {/* <MainTextField title="UserName" isPassword={false} /> */}
      <img src="/Software_Assignment_Submission.png" alt="Description" className='hidden md:block m-20 w-100 rounded-4xl'/>
        <Card
            heading="Login"
            content="Please enter your credentials"
            other="Don't have account yet?"
            otherUrl="/request" // for request page
            // otherUrl={`/request?from=${encodeURIComponent(pathName)}`} // for request page
            // width={400}
            // height={300}
            // backgroundColor="white"
            // borderRadius={10}
            // fields={[
            //     { title: "UserName", isPassword: false },
            //     { title: "Password", isPassword: true }
            // ]}
        />
    </div>
  )
}

export default Home