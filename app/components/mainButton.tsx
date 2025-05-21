"use client"; // to convert to client component
import React from 'react'
import styles from '../components/Styling/MainButton.module.css';

type Props = {
    Name: string
    onClickFunc?: () => void
    className?: string
}

function MainButton({ Name,onClickFunc = ()=>{}, className }: Props) {
  return (
    <button className={`${styles.button} bg-black hover:bg-blue-700 ${className}`} onClick={onClickFunc}>{Name}</button>
  )
}

export default MainButton