import React from "react"

import styles from "./AnimationOne.module.css"

const AnimationOne = () => {
  return (
    <div className={styles.animat1}>
      <div className={styles.elemOne}>
        <div className={styles.elemAniamt}></div>
      </div>
      <div className={styles.elemTwo}></div>
      <div className={styles.elemThree}></div>
    </div>
  )
}

export default AnimationOne
