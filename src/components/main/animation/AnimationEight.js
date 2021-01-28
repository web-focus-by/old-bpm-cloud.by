import React from "react"

import styles from "./AnimationEight.module.css"

const AnimationEight = () => {
  return (
    <div className={styles.animat8}>
      <svg width="236" height="236" viewBox="0 0 236 236" fill="none">
        <path
          d="M194 118C194 127.98 192.034 137.863 188.215 147.084C184.395 156.305 178.797 164.683 171.74 171.74C164.683 178.797 156.305 184.395 147.084 188.215C137.863 192.034 127.98 194 118 194V118H194Z"
          fill="#FBFAFA"
        />
        <path
          d="M117 42C107.02 42 97.1368 43.9658 87.9161 47.7852C78.6953 51.6045 70.3171 57.2026 63.2599 64.2599C56.2026 71.3171 50.6045 79.6953 46.7851 88.9161C42.9658 98.1368 41 108.02 41 118L117 118L117 42Z"
          fill="#FBFAFA"
        />
        <rect
          id={styles.rectOne}
          // x="95"
          // y="96"
          width="44"
          height="44"
          fill="#309195"
        />
        <rect
          id={styles.rectTwo}
          // x="96"
          // y="96"
          width="44"
          height="44"
          fill="#309195"
        />
      </svg>
    </div>
  )
}

export default AnimationEight
