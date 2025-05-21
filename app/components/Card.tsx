import React from 'react'
import MainTextField from './MainTextField'

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

function Card({heading, content, width, height, backgroundColor, borderRadius, fields}: Props) {   
  return (
    <form>
        <h2>{heading}</h2>
            <p>{content}</p>
            {fields?.map((field, index) => (
                <MainTextField key={index} title={field.title} isPassword={field.isPassword} />
            ))}
            <MainTextField title="UserName" isPassword={false} />
            <MainTextField title="Password" isPassword={true} />
    </form>
  )
}

export default Card