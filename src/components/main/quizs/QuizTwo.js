import React, { useState } from "react"
import classnames from "classnames"

import stylesGeneral from "./QuizGeneral.module.scss"
import styles from "./QuizTwo.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizTwo = ({ handlerLine }) => {
  const [check, setCheck] = useState(0)
  const [activeButton, setActiveButton] = useState(false)

  const handler = number => {
    setCheck(number)
    if (activeButton === false) setActiveButton(!activeButton)
  }

  const handlerOnClick = () => {
    if (activeButton) {
      handlerLine([document.querySelector(`.${stylesGeneral.formTitle}`).innerText, document.querySelectorAll(`.${styles.text}`)[check-1].innerText])
    }
  }

  return (
    <div className={stylesGeneral.wrapForm}>
      <div className={stylesGeneral.formTitle}>
        Укажите область деятельности пердприятия?
      </div>
      <div className={styles.wrap}>
        <div>
        <div className={styles.box} onClick={() => handler(1)}>
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 1 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 1 === check,
            })}
          >
            Государственная структура
          </div>
        </div>
        <div
          className={styles.box}
          className={styles.box}
          onClick={() => handler(2)}
        >
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 2 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 2 === check,
            })}
          >
            Бизнес
          </div>
        </div>
        <div
          className={styles.box}
          className={styles.box}
          onClick={() => handler(3)}
        >
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 3 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 3 === check,
            })}
          >
            Образование
          </div>
        </div>
        
        </div>
        <div>
        <div
          className={styles.box}
          className={styles.box}
          onClick={() => handler(4)}
        >
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 4 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 4 === check,
            })}
          >
            Медицина
          </div>
        </div>
        <div
          className={styles.box}
          className={styles.box}
          onClick={() => handler(5)}
        >
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 5 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 5 === check,
            })}
          >
            Стартап
          </div>
        </div>

        <div
          className={styles.box}
          className={styles.box}
          onClick={() => handler(6)}
        >
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 6 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 6 === check,
            })}
          >
            Другое
          </div>
        </div>
        </div>
      </div>
      <ButtonQuiz
        activeButton={activeButton}
        onClick={() => handlerOnClick()}
        className={styles.button}
      >
        Далее
      </ButtonQuiz>
    </div>
  )
}

export default QuizTwo
