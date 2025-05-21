"use client"; // to convert to client component
import React from 'react'

type Props = {
    Name: string
    onClickFunc?: () => void
}

function MainButton({ Name,onClickFunc = ()=>{} }: Props) {
  return (
    <button onClick={onClickFunc}>{Name}</button>
  )
}

export default MainButton