import React from "react"
import classnames from "classnames"
import styles from "./buttonSmall.module.css"

export default ({
  children,
  red,
  className,
  onClick,
  grey,
  white,
  green,
  height,
}) => {
  const colorRed = red ? true : false
  const colorGrey = grey ? true : false
  const colorWhite = white ? true : false
  const colorGreen = green ? true : false
  return (
    <button
      style={{ height: height }}
      onClick={onClick}
      className={classnames(styles.buttom, className, {
        [styles.white]: colorWhite,
        [styles.grey]: colorGrey,
        [styles.red]: colorRed,
        [styles.green]: colorGreen,
      })}
    >
      <div className={styles.text}>{children}</div>
    </button>
  )
}
