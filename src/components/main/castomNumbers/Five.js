import React from "react"

import styles from "./Five.module.css"

const Five = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <svg
          id={styles.wrap}
          width="40"
          height="60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            id={styles.circle}
            cx="9.4"
            cy="50.6"
            r="9.4"
            fill="#309195"
          />
          <path
            id={styles.elem}
            d="M39.4 39.4a18.7 18.7 0 00-18.8-18.8v18.8h18.8zM20.6 60a18.7 18.7 0 0018.8-18.8H20.6V60zM39.4 0v18.8H20.6V0zM18.7 0V19H0V0z"
            fill="#309195"
          />
        </svg>
      </div>
    </div>
  )
}

export default Five
