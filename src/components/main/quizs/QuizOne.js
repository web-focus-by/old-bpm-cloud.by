import React, { useState } from "react"
import classnames from "classnames"

import stylesGeneral from "./QuizGeneral.module.scss"
import styles from "./QuizOne.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizOne = ({ handlerLine }) => {
  const [check, setCheck] = useState()
  const [activeButton, setActiveButton] = useState(false)

  const handler = number => {
    setCheck(number)
    if (activeButton === false) setActiveButton(!activeButton)
  }

  const handlerOnClick = () => {
    if (activeButton) {
      handlerLine([
        document.querySelector(`.${stylesGeneral.formTitle}`).innerText,
        document.querySelectorAll(`.${styles.text}`)[check - 1].innerText,
      ])
    }
  }

  return (
    <div className={stylesGeneral.wrapForm}>
      <div className={stylesGeneral.formTitle}>
        Вы определились с объемом затрат?
      </div>
      <div className={styles.wrap}>
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
            Я не планирую вкладывать большие финансовые средства, поэтому ищу
            экономичный вариант.
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
            Я стремлюсь к золотой середине между отличным результатом, разумным
            бюджетом и временными рамками.
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
            Я хочу привлекать старших разработчиков с соответствующей почасовой
            оплатой для работы исключительно над моим проектом.
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
    </div>
  )
}

export default QuizOne
