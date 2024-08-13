import React from 'react'
import { Button } from 'react-bootstrap'
import styles from '../button.module.css'
import classNames from "classnames"

type PropTypes = {
  type?: "primary" | "danger" | "warning" | "success"
  children?: React.ReactNode;
}

export default function B7({type, children}: PropTypes) {
  return (
    <button className={classNames(styles.button, {
      [styles.button_primary]: type === "primary",
      [styles.button_danger]: type === "danger",
      [styles.button_warning]: type === "warning",
      [styles.button_success]: type === "success"
    })}>
       {children}
    </button>
  )
}
