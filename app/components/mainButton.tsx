"use client"; // to convert to client component
import React from 'react'
import styles from './MainButton.module.css';

type Props = {
    Name: string
    onClickFunc?: () => void
}

function MainButton({ Name,onClickFunc = ()=>{} }: Props) {
  return (
    <button className={styles.button} onClick={onClickFunc}>{Name}</button>
  )
}

export default MainButton