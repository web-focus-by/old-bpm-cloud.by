import React, { useState } from "react"
import classnames from "classnames"
import { ButtonGreen } from "../buttons"
import { images } from "../../images"
import { useForm, ValidationError } from '@formspree/react';

import styles from "./Сontact.module.css"

const ContactForm = ({ handlerGetForm }) => {
  const [checkName, setCheckName] = useState(false)
  const [checkPhone, setCheckPhone] = useState(false)
  const [state, setState] = useState({
    name: "",
    phone: "",
  })
  const [formState, handleSubmit] = useForm("mjvpndyv");
  if (formState.succeeded) {
    setTimeout(handlerGetForm,0)
  }

  const handlerOnClick = () => {
    if (state.phone.trim() === "") {
      setCheckPhone(true)
    }
    if (state.name.trim() === "") {
      setCheckName(true)
    }
    if (state.name !== "" && state.phone !== "") {
      handlerGetForm()
    }
  }

  const handlerChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <form className={styles.wrapContactForm} onSubmit={handleSubmit}>
      <div>
        <div className={styles.title}>Заказать звонок</div>
        <div className={styles.textForm}>
          Введите Ваши данные и мы Вам перезвоним.
        </div>
        <div className={styles.wrapInputs}>
          <div
            className={classnames(styles.label, {
              [styles.active]: checkName,
            })}
          >
            Введите Ваше имя
          </div>
          <input
            onChange={handlerChange}
            name="name"
            className={classnames(styles.input, {
              [styles.bad]: checkName,
            })}
            placeholder="Имя"
            type="text"
            required
          />
          <div
            className={classnames(styles.label, {
              [styles.active]: checkPhone,
            })}
          >
            Введите Ваш номер телефона
          </div>
          <input
            onChange={handlerChange}
            name="phone"
            className={classnames(styles.input, {
              [styles.bad]: checkPhone,
            })}
            placeholder="Номер телефона"
            type="tel"
            required
          />
          {(checkPhone || checkName) && (
            <div className={styles.redText}>
              Одно или несколько полей содержат ошибочные данные. Пожалуйста,
              проверьте их и попробуйте ещё раз.
            </div>
          )}
        </div>
      </div>
      <div className={styles.wrapf} >
        <button type="submit" disabled={formState.submitting} className={styles.button}>
          Позвоните мне
        </button>
        <div className={styles.textFormik}>
          Заполняя форму обратной связи, Вы соглашаетесь на обработку Ваших
          персональных данных
        </div>
      </div>
      <img
        src={images.arrowButton}
        height="15px"
        className={styles.arrow}
        alt=""
      />
    </form>
  )
}

const FrirstForm = ({ handlerGetForm }) => {
  return (
    <>
      <div className={styles.wrapContenContactForm}>
        <div className={styles.title}>Хотите узнать больше?</div>
        <div className={styles.text}>
          Свяжитесь с консультантом веб-студии — и мы раскроем каждый нюанс
          сотрудничества. Интернет-продвижение с разумным подходом эффективно
          решает поставленные задачи. Некоторые компании вовсе полностью
          переходят в онлайн-режим.
        </div>
      </div>
      <button onClick={() => handlerGetForm()} className={styles.button}>
        Связаться
      </button>
    </>
  )
}

const LastForm = () => {
  return (
    <div className={styles.wrapLastForm}>
      <div className={styles.boxText}>
        <div className={styles.title}>Отлично!</div>
        <div className={styles.text}>Мы свяжемся с Вами в ближайшее время!</div>
      </div>
      <div className={styles.greenBox}>
        <div className={styles.bodyCircle}>
          <div className={styles.elemOne}></div>
          <div className={styles.radius}>
            <div className={styles.elemTwo}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Сontact = () => {
  const [state, setState] = useState(1)
  const handlerGetForm = () => {
    setState(state + 1)
  }
  const getForm = state => {
    switch (state) {
      case 1:
        return <FrirstForm handlerGetForm={handlerGetForm} />
      case 2:
        return <ContactForm handlerGetForm={handlerGetForm} />
      case 3:
        return <LastForm />
      default:
        return <FrirstForm handlerGetForm={handlerGetForm} />
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{getForm(state)}</div>
    </div>
  )
}

export default Сontact
