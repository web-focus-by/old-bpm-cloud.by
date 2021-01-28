import React from "react"

import styles from "./AnimationSix.module.css"

const AnimationSix = () => {
  return (
    <div className={styles.animat6}>
      <div className={styles.elemOne}>
        <svg
          width="236"
          height="236"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.8735 96.5H92.7471L67.8735 144.75L43 96.5H67.8735Z"
            fill="#FBFAFA"
          />
          <path
            d="M118 96.5H142.874L118 144.75L93.1265 96.5H118Z"
            fill="#FBFAFA"
          />
          <path
            id={styles.colorOne}
            d="M168.126 96.5H193L168.126 144.75L143.253 96.5H168.126Z"
            fill="#FBFAFA"
          />
        </svg>
      </div>
      <div className={styles.elemTwo}>
        <svg
          width="236"
          height="236"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="da"
        >
          <path
            d="M67.8735 96.5H92.7471L67.8735 144.75L43 96.5H67.8735Z"
            fill="#FBFAFA"
          />
          <path
            id={styles.colorTwo}
            d="M118 96.5H142.874L118 144.75L93.1265 96.5H118Z"
            fill="#FBFAFA"
          />
          <path
            d="M168.126 96.5H193L168.126 144.75L143.253 96.5H168.126Z"
            fill="#FBFAFA"
          />
        </svg>
      </div>
      <div className={styles.elemThree}>
        <svg
          width="236"
          height="236"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.8735 96.5H92.7471L67.8735 144.75L43 96.5H67.8735Z"
            fill="#FBFAFA"
            id={styles.colorThree}
          />
          <path
            d="M118 96.5H142.874L118 144.75L93.1265 96.5H118Z"
            fill="#FBFAFA"
          />
          <path
            d="M168.126 96.5H193L168.126 144.75L143.253 96.5H168.126Z"
            fill="#FBFAFA"
          />
        </svg>
      </div>
    </div>
  )
}

export default AnimationSix
