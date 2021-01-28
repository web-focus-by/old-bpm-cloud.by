import React, { useState } from "react"
import classnames from "classnames"

import styles from "./QuizFive.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizFive = ({ handlerLine }) => {
  const [activeButton, setActiveButton] = useState(false)
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    prim: "",
  })

  const handlerOnClick = () => {
    if (activeButton) {
      handlerLine()
    }
  }

  const handlerInput = e => {
    if (state.name !== "" && state.email !== "" && state.phone !== "") {
      setActiveButton(true)
    }
    if (state.name.trim() === "") {
      setActiveButton(false)
    }
    if (state.email.trim() === "") {
      setActiveButton(false)
    }
    if (state.phone.trim() === "") {
      setActiveButton(false)
    }
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className={styles.formTitle}>Укажите информацию о Вас</div>
      <div className={styles.wrap}>
        <div className={styles.inputs}>
          <input
            name="name"
            onChange={handlerInput}
            className={styles.input}
            type="text"
            placeholder="Имя"
          />
          <input
            name="phone"
            onChange={handlerInput}
            className={styles.input}
            type="text"
            placeholder="Номер телефона"
          />
          <input
            name="email"
            onChange={handlerInput}
            className={styles.input}
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div>
          <div>
            <textarea
              name="prim"
              onChange={handlerInput}
              className={styles.bigInput}
              type="text"
              placeholder="Примечание"
            />
          </div>
          <div className={styles.text}>
            Заполняя форму обратной связи, Вы соглашаетесь на обработку Ваших
            персональных данных
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

export default QuizFive
