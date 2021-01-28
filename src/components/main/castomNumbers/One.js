import React from "react"

import styles from "./One.module.css"

const One = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.circle}></div>
          <div className={styles.rectangles}>
            <div className={styles.elemOne}></div>
            <div className={styles.elemTwo}></div>
            <div className={styles.elemThree}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default One
