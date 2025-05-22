'use client'
import React from 'react'
import styles from '../components/Styling/MainTextField.module.css';

type Props = {
    isPassword?: boolean
    title?: string
    className?: string
}

function MainTextField({isPassword,title,className}:Props) {
  {
    return(
        <div className={`${className}`}>
            <div className='py-2'>
                {title}
            </div>
            <input
                type={isPassword ? "password" : "text"}
                className={`${isPassword ? styles.inputPassword : styles.inputText} p-2`}
                placeholder={title}>
            </input>
        </div>
    )
  }
}

export default MainTextField