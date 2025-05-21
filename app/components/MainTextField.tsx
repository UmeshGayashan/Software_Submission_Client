'use client'
import React from 'react'
import styles from '../components/Styling/MainTextField.module.css';

type Props = {
    isPassword?: boolean
    title?: string
}

function MainTextField({isPassword,title}:Props) {
  {
    return(
        <div>
            <div>
                {title}
            </div>
            <input
                type={isPassword ? "password" : "text"}
                className={isPassword ? styles.inputPassword : styles.inputText}
                placeholder={title}>
            </input>
        </div>
    )
  }
}

export default MainTextField