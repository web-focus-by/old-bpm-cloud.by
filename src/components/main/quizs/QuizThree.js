import React, { useState } from "react"
import classnames from "classnames"

import stylesGeneral from "./QuizGeneral.module.scss"
import styles from "./QuizThree.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizThree = ({ handlerLine }) => {
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
      <div className={stylesGeneral.formTitle}>Какая услуга Вас интересует?</div>
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
            Разработка сайта
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(2)}>
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
            Продвижение сайта (SEO)
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(3)}>
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
            Ведение социальных сетей (SMM)
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(4)}>
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
            Разработка приложений
          </div>
        </div>
        </div>
        <div>
        <div className={styles.box} onClick={() => handler(5)}>
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
            Дизайн и брендинг
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(6)}>
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
            Контекстная и таргетированная реклама
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(7)}>
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 7 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 7 === check,
            })}
          >
            Техническая поддержка сайта
          </div>
        </div>
        <div className={styles.box} onClick={() => handler(8)}>
          <div
            className={classnames(styles.checkBox, {
              [styles.activeBox]: 8 === check,
            })}
          ></div>
          <div
            className={classnames(styles.text, {
              [styles.activeText]: 8 === check,
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

export default QuizThree
