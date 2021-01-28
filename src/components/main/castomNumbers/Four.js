import React from "react"

import styles from "./Four.module.css"

const Four = () => {
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
          <path
            id={styles.elemOne}
            fill="#309195"
            d="M20.6 20.6h18.8v18.8H20.6zM30 9.4L39.4 0v18.8H20.6L30 9.3z"
          />
          <path
            id={styles.elemTwo}
            d="M30.4 30.4l-9.9 9.1v-19h19l-9.1 9.9zM9.4 30l9.3-9.4v18.8H0L9.4 30zM20.6 41.3h18.8v18.8H20.6z"
            fill="#309195"
          />
        </svg>
      </div>
    </div>
  )
}

export default Four
