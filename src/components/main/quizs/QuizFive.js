import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

import classnames from "classnames"

import stylesGeneral from "./QuizGeneral.module.scss"
import styles from "./QuizFive.module.css"
import { ButtonQuiz } from "../../buttons"

const QuizFive = ({ handlerLine, answer }) => {
  const [activeButton, setActiveButton] = useState(false)
  const [stateInfo, setState] = useState({
    name: "",
    phone: "",
    email: "",
    prim: "",
  })

  const [state, handleSubmit] = useForm("mwkwgjej")
  if (state.succeeded) {
    setTimeout(handlerLine, 0)
  }

  const handlerInput = e => {
    if (
      stateInfo.name !== "" &&
      stateInfo.email !== "" &&
      stateInfo.phone !== ""
    ) {
      setActiveButton(true)
    }
    if (stateInfo.name.trim() === "") {
      setActiveButton(false)
    }
    if (stateInfo.email.trim() === "") {
      setActiveButton(false)
    }
    if (stateInfo.phone.trim() === "") {
      setActiveButton(false)
    }
    setState({ ...stateInfo, [e.target.name]: e.target.value })
  }

  const InvokeInputs = () => {
    return (
      <div className={styles.invokeInputs}>
        {answer[0].map((items, index) => {
          return (
            <input
              readOnly
              type="text"
              key={index}
              name={items !== undefined ? items[0] : "name"}
              value={items !== undefined ? items[1] : "name"}
            />
          )
        })}
      </div>
    )
  }
  return (
    <form className={stylesGeneral.wrapForm} onSubmit={handleSubmit}>
      <div className={stylesGeneral.formTitle}>Укажите информацию о Вас</div>
      <div className={styles.wrap}>
        <div className={styles.inputs}>
          <input
            name="name"
            onChange={handlerInput}
            className={styles.input}
            type="text"
            placeholder="Имя"
            required
          />
          <input
            name="phone"
            onChange={handlerInput}
            className={styles.input}
            type="tel"
            placeholder="Номер телефона"
            required
          />
          <input
            name="email"
            onChange={handlerInput}
            className={styles.input}
            type="email"
            placeholder="E-mail"
            required
          />
          <InvokeInputs />
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
      <button
        type="submit"
        className={classnames(styles.button, stylesGeneral.button)}
        disabled={state.submitting}
      >
        Отправить
      </button>
    </form>
  )
}

export default QuizFive
