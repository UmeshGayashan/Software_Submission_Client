"use client"; // to convert to client component
import React from 'react'
import styles from './MainButton.module.css';

type Props = {
    Name: string
    onClickFunc?: () => void
}

function MainButton({ Name,onClickFunc = ()=>{} }: Props) {
  return (
    <button className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-
      " onClick={onClickFunc}>{Name}</button>
  )
}

export default MainButton