import React from "react"

import styles from "./AnimationNine.module.css"

const AnimationNine = () => {
  return (
    <div>
      <div className={styles.oneTreangle}>
        <svg width="237" height="237" viewBox="0 0 237 237" fill="none">
          <path
            d="M118.356 118.356V4.52458e-06L236.713 118.356L118.356 236.713V118.356Z"
            fill="#FBFAFA"
          />
        </svg>
      </div>
      <div className={styles.twoTreangle}>
        <svg width="237" height="237" viewBox="0 0 237 237" fill="none">
          <path
            d="M118.356 118.356V4.52458e-06L236.713 118.356L118.356 236.713V118.356Z"
            fill="#FBFAFA"
          />
        </svg>
        <div className={styles.greenTreangle}>
          <svg width="237" height="237" viewBox="0 0 237 237" fill="none">
            <path
              d="M118.425 118.356V4.52458e-06L236.781 118.356L118.425 236.713V118.356Z"
              fill="#309195"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default AnimationNine
