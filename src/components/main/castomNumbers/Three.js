import React from "react"

import styles from "./Three.module.css"

const Three = () => {
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
            id={styles.circleOne}
            cx="9.4"
            cy="9.4"
            r="9.4"
            fill="#309195"
          />
          <circle
            id={styles.circleTwo}
            cx="9.4"
            cy="30"
            r="9.4"
            fill="#309195"
          />
          <circle
            id={styles.circleThree}
            cx="9.4"
            cy="50.6"
            r="9.4"
            fill="#309195"
          />
          <path
            d="M39.4 18.8A18.7 18.7 0 0020.6 0v18.8h18.8zM20.6 60a18.7 18.7 0 0018.8-18.8H20.6V60zM39.4 20.6v18.8H20.6V20.7z"
            fill="#309195"
            id={styles.elem}
          />
        </svg>
      </div>
    </div>
  )
}

export default Three
