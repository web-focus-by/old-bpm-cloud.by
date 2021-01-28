import React from "react"

import styles from "./Two.module.css"

const Two = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <svg
          id={styles.wrap}
          width="40"
          height="60"
          viewBox="0 0 40 60"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.375"
            cy="9.375"
            r="9.375"
            fill="#309195"
            id={styles.circle}
          />
          <path
            d="M39.375 18.75C39.375 16.2877 38.89 13.8495 37.9477 11.5747C37.0055 9.29983 35.6244 7.23285 33.8833 5.49175C32.1422 3.75065 30.0752 2.36953 27.8003 1.42726C25.5255 0.484983 23.0873 -1.0763e-07 20.625 0V18.75H39.375Z"
            fill="#309195"
            id={styles.elemOne}
          />
          <path
            d="M20.625 39.375C23.0873 39.375 25.5255 38.89 27.8003 37.9477C30.0752 37.0055 32.1422 35.6244 33.8833 33.8833C35.6243 32.1422 37.0055 30.0752 37.9477 27.8003C38.89 25.5255 39.375 23.0873 39.375 20.625L20.625 20.625L20.625 39.375Z"
            fill="#309195"
            id={styles.elemTwo}
          />
          <rect
            x="39.375"
            y="41.25"
            width="18.75"
            height="18.75"
            transform="rotate(90 39.375 41.25)"
            fill="#309195"
            id={styles.recOne}
          />
          <rect
            x="18.75"
            y="41.25"
            width="18.75"
            height="18.75"
            transform="rotate(90 18.75 41.25)"
            fill="#309195"
            id={styles.recTwo}
          />
        </svg>
      </div>
    </div>
  )
}

export default Two
