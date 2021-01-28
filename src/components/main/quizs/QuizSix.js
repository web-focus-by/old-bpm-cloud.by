import React from "react"

import styles from "./QuizSix.module.css"

const QuizSix = () => {
  return (
    <div>
      <div className={styles.formTitle}>Спасибо за ваши ответы</div>
      <div className={styles.formText}>
        В ближайшее время мы свяжемся с Вами!
      </div>
      <div className={styles.animateWrap}>
        <div className={styles.bodyCircle}>
          <div className={styles.elemOne}></div>
          <div className={styles.radius}>
            <div className={styles.elemTwo}>
              <div className={styles.white}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizSix
