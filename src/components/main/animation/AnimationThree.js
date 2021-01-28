import React from "react"

import styles from "./AnimationThree.module.css"

const AnimationThree = () => {
  return (
    <div className={styles.animat3}>
      <div className={styles.elemBig}>
        <div className={styles.animatOne}></div>
        <div className={styles.elemBack}>
          <div className={styles.elemSmall}>
            <div className={styles.animatTwo}></div>
            <div className={styles.elemBackTwo}>
              <div className={styles.elemLiltle}>
                <div className={styles.animatThree}></div>
                <div className={styles.elemBackThree}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationThree
