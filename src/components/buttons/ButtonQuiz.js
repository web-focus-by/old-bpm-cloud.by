import React from "react"
import classnames from "classnames"
import { images } from "../../images"
import styles from "./ButtonQuiz.module.css"

export default ({ children, activeButton, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, className, {
        [styles.activeButton]: activeButton,
      })}
    >
      <div
        className={classnames(styles.text, {
          [styles.textActive]: activeButton,
        })}
      >
        {children}
      </div>
      {activeButton ? (
        <img src={images.arrowButton} alt="" />
      ) : (
        <img src={images.Arrow} alt="" />
      )}
    </button>
  )
}
