import React from 'react'
import styles from '../cart.module.css'
import classNames from "classnames"

type PropTypes = {
    type?: "primary"
    children?: React.ReactNode;
    content?: string;
    title?: string;
    image?: string
  }

export default function B10({type, children, content, title, image}: PropTypes) {
  return (
   <div className='cart-item'>
    <img src={image} alt="" />
    <p style={{textAlign: "center", fontWeight: "bold"}}>{title}</p>
    <p style={{textAlign: "center"}}>{content}</p>
    <button className={classNames(styles.cart, {
        [styles.button_primary]: type === "primary",
    })}>
        {children}
    </button>
   </div>
  )
}
