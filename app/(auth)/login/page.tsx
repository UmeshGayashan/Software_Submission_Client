"use client";
import MainButton from '@/app/components/mainButton'
import React from 'react'

function Home() {
    const Name = "Login1"

    const handleClick = () => {
        console.log("Button clicked");
    }
  return (
    <div>
        <MainButton onClickFunc={handleClick} Name={Name}/>
    </div>
  )
}

export default Home