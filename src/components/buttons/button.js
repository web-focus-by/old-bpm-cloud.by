import React from "react"
import classnames from "classnames"
import styles from "./button.module.scss"

export default ({ children, width, className }) => {
  return (
    <button
      className={classnames(styles.button, className)}
      style={{ width: width }}
    >
      <div className={styles.color}></div>
      <div className={styles.text}>{children}</div>
    </button>
  )
}
