import React from "react"

import styles from "./Six.module.css"

const Six = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <svg
          id={styles.wrap}
          width="41"
          height="61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={styles.elem}
            d="M40.4 39.4a18.7 18.7 0 00-18.8-18.8v18.8h18.8zM1 41.8a18.7 18.7 0 0018.8 18.7V41.7H1zM21.6 60a18.7 18.7 0 0018.8-18.8H21.6V60zM19.7 21v18.8H1V21zM19.7 0v18.8H1V0z"
            fill="#309195"
          />
        </svg>
      </div>
    </div>
  )
}

export default Six
