import React from "react"
import classnames from "classnames"
import styles from "./button.module.css"

export default ({ children, width, className }) => {
  return (
    <button
      className={classnames(styles.buttom, className)}
      style={{ width: width }}
    >
      <div className={styles.color}></div>
      <div className={styles.text}>{children}</div>
    </button>
  )
}
