import React from "react"
import classnames from "classnames"
import { images } from "../../images"
import styles from "./ButtonQuiz.module.css"

export default ({ children, activeButton, onClick, className, disable }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, className, {
        [styles.activeButton]: activeButton,
      })}
      disabled={disable}     
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
