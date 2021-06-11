import React, { useState } from "react"
import classnames from "classnames"

import stylesGeneral from "./QuizGeneral.module.scss"
import styles from "./QuizFour.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizFour = ({ handlerLine }) => {
  const [check, setCheck] = useState(0)
  const [activeButton, setActiveButton] = useState(false)

  const handler = number => {
    setCheck(number)
    if (activeButton === false) setActiveButton(!activeButton)
  }

  const handlerOnClick = () => {
    if (activeButton) {
      handlerLine([
        document.querySelector(`.${stylesGeneral.formTitle}`).innerText,
        document.querySelectorAll(`.${styles.buttonActive}`)[0].innerText,
      ])
    }
  }

  return (
    <div className={stylesGeneral.wrapForm}>
      <div className={stylesGeneral.formTitle}>
        Был ли у Вас опыт сотрудничества с компаниями области
        интернет-маркетинга?
      </div>
      <div className={styles.wrap}>
        <div
          onClick={() => handler(1)}
          className={classnames(styles.buttonOne, {
            [styles.buttonActive]: 1 === check,
          })}
        >
          Да
        </div>
        <div className={styles.border}></div>
        <div
          onClick={() => handler(2)}
          className={classnames(styles.buttonTwo, {
            [styles.buttonActive]: 2 === check,
          })}
        >
          Нет
        </div>
      </div>
      <ButtonQuiz
        activeButton={activeButton}
        onClick={() => handlerOnClick()}
        className={stylesGeneral.button}
      >
        Далее
      </ButtonQuiz>
    </div>
  )
}

export default QuizFour
