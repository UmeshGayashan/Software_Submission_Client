import React from 'react'
import MainTextField from './MainTextField'
import MainButton from './mainButton'

type Props ={
    heading?: string
    content?: string
    width?: number
    height?: number
    backgroundColor?: string
    borderRadius?: number
    fields?: Array<{
        title: string
        isPassword: boolean
    }>
}

const handleClick = () => {
    console.log("Button clicked");
}

function Card({heading, content, width, height, backgroundColor, borderRadius, fields}: Props) {   
  return (
    <form className='bg-white p-30 m-20 rounded-lg shadow-md'>
        <h2 className='text-black font-bold'>{heading}</h2>
            <p>{content}</p>
            {fields?.map((field, index) => (
                <MainTextField key={index} title={field.title} isPassword={field.isPassword} />
            ))}
            <MainTextField title="UserName" isPassword={false} />
            <MainTextField title="Password" isPassword={true} />
            <MainButton Name="Login" onClickFunc={handleClick} />
    </form>
  )
}

export default Card