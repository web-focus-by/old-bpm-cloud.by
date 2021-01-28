import React from "react"

import classnames from "classnames"
import styles from "./buttonGreen.module.css"

export default ({
  children,
  width,
  height,
  className,
  noAnimation,
  onClick,
}) => {
  const handler = noAnimation ? true : false
  return (
    <button
      onClick={onClick}
      className={classnames(styles.buttom, className)}
      style={{ width: width, height: height }}
    >
      <div
        className={classnames(styles.color, {
          [styles.noAnimation]: handler,
        })}
      ></div>
      <div className={styles.text}>{children}</div>
    </button>
  )
}
