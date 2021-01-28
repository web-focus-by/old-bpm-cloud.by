import React from "react"

import styles from "./AnimationFour.module.css"

const AnimationFour = () => {
  return (
    <svg
      width="236"
      height="236"
      viewBox="0 0 236 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="one" cx="58" cy="58" r="15" fill="#FBFAFA" />
      <circle cx="58" cy="118" r="15" fill="#FBFAFA" />
      <circle cx="58" cy="178" r="15" fill="#FBFAFA">
        <animate id="one" attributeName="r" from="15" to="22" dur="0.7s" />
        <animate id="one" attributeName="r" from="22" to="15" dur="0.7s" />
        <animate attributeName="fill" from="#FBFAFA" to="#309195" dur="0.7s" />
      </circle>
      <circle cx="178" cy="58" r="15" fill="#FBFAFA">
        <animate
          id="one"
          attributeName="r"
          from="15"
          to="22"
          dur="0.7s"
          begin="0.8s"
        />
        <animate
          id="one"
          attributeName="r"
          from="22"
          to="15"
          dur="0.7s"
          begin="0.8s"
        />
        <animate
          attributeName="fill"
          from="#FBFAFA"
          to="#309195"
          dur="0.5s"
          begin="0.8s"
        />
      </circle>
      <circle cx="178" cy="118" r="15" fill="#FBFAFA" />
      <circle cx="178" cy="178" r="15" fill="#FBFAFA" />
      <circle cx="118" cy="58" r="15" fill="#FBFAFA" />
      <circle cx="118" cy="118" r="15" fill="#FBFAFA">
        <animate
          id="one"
          attributeName="r"
          from="15"
          to="22"
          dur="0.7s"
          begin="0.4s"
        />
        <animate
          id="one"
          attributeName="r"
          from="22"
          to="15"
          dur="0.7s"
          begin="0.4s"
        />
        <animate
          attributeName="fill"
          from="#FBFAFA"
          to="#309195"
          dur="0.7s"
          begin="0.4s"
        />
      </circle>
      <circle cx="118" cy="178" r="15" fill="#FBFAFA" />
    </svg>
  )
}

export default AnimationFour
