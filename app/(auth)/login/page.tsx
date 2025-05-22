"use client";
import MainButton from '@/app/components/mainButton'
import React from 'react'
import styles from './page.module.css';
import MainTextField from '@/app/components/MainTextField';
import Card from '@/app/components/Card';

function Home() {
    const Name = "Login1"

    const handleClick = () => {
        console.log("Button clicked");
    }
  return (
    <div className='bg-gray-200 h-screen flex items-center justify-between'>
      {/* <MainTextField title="UserName" isPassword={false} /> */}
        <MainTextField title="Password" isPassword={true} className='hidden md:block m-20' />
        <Card
            heading="Login"
            content="Please enter your credentials"
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