import React, { useRef, useState, useEffect } from "react"
import style from "./contactForm.module.scss"
import classNames from "classnames"

const ALL_COUNT_STEP = 4

const ContactForm = () => {
  const [state, setState] = useState({
    currentStep: 1,
    name: "",
    email: "",
    phone: "",
    technicalTask: "",
  })
  const [inputHaveValue, setInputHaveValue] = useState(false)
  const [inputIsRequired, setInputIsRequired] = useState(false)
  const [inputIsSelected, setInputIsSelected] = useState(false)
  const itemsRef = useRef(
    [...new Array(ALL_COUNT_STEP)].map(() => React.createRef())
  )
  const formEl = useRef()
  const wrapperRef = useRef(
    [...new Array(ALL_COUNT_STEP)].map(() => React.createRef())
  )
  const handleChange = event => {
    const { name, value } = event.target
    setInputIsSelected(true)
    if (value.length !== 0) {
      setInputHaveValue(true)
    } else {
      setInputHaveValue(false)
    }
    setState({
      ...state,
      [name]: value,
    })
  }

  useEffect(() => {
    if (inputIsSelected && state.currentStep !== ALL_COUNT_STEP) {
      itemsRef.current[state.currentStep - 1].current.focus()
    }
  }, [itemsRef.current[state.currentStep - 1].current])

  useEffect(() => {
    wrapperRef.current[state.currentStep - 1].current.classList.add(
      `${style.animation}`
    )

    // console.log(wrapperRef.current[state.currentStep - 1].current.classList)
  }, [state.currentStep])

  useEffect(() => {
    formEl.current.addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        event.preventDefault()
      }
    })
  }, [])

  const handleAttachment = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { email, name, phone } = state
    alert(`Your registration detail: \n 
               Email: ${email} \n 
               Name: ${name} \n
               Phone: ${phone}`)
    // return false
    _next()
  }

  const _next = () => {
    let currentStep = state.currentStep
    currentStep =
      currentStep >= ALL_COUNT_STEP - 1 ? ALL_COUNT_STEP : currentStep + 1
    setInputHaveValue(false)
    setState({
      ...state,
      currentStep: currentStep,
    })
  }

  const _prev = () => {
    let currentStep = state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    setState({
      ...state,
      currentStep: currentStep,
    })
  }

  const previousButton = () => {
    let currentStep = state.currentStep
    if (currentStep !== 1 && currentStep !== ALL_COUNT_STEP) {
      return (
        <button
          type="button"
          onClick={_prev}
          className={classNames(style.previousButton)}
        >
          <svg
            width="16"
            height="28"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1.94699"
              height="19.5143"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.1797 1.37646)"
              fill="white"
            />
            <rect
              width="1.94699"
              height="19.7073"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 13.9355 27.7324)"
              fill="white"
            />
          </svg>
        </button>
      )
    }
    return null
  }

  const nextButton = () => {
    let currentStep = state.currentStep
    if (currentStep < ALL_COUNT_STEP - 1) {
      return (
        <button
          type="button"
          className={classNames(style.nextButton, {
            [style.isActive]: inputHaveValue,
          })}
          onClick={_next}
        >
          {inputHaveValue && <div className={style.buttonText}>Далее</div>}
          <svg
            width="16"
            height="28"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1.94699"
              height="19.5143"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.132812 26.356)"
              fill="white"
            />
            <rect
              width="1.94699"
              height="19.7073"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.37695 0)"
              fill="white"
            />
          </svg>
        </button>
      )
    }
    return null
  }

  const submitButton = () => {
    let currentStep = state.currentStep
    if (currentStep == ALL_COUNT_STEP - 1) {
      return (
        <button
          type="submit"
          className={classNames(style.nextButton, {
            [style.isActive]: inputHaveValue,
          })}
        >
          {inputHaveValue && <div className={style.buttonText}>Далее</div>}
          <svg
            width="16"
            height="28"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1.94699"
              height="19.5143"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.132812 26.356)"
              fill="white"
            />
            <rect
              width="1.94699"
              height="19.7073"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.37695 0)"
              fill="white"
            />
          </svg>
        </button>
      )
    }
    return null
  }

  const NameStepForm = props => {
    if (props.currentStep !== 1) {
      return null
    }
    return (
      <div ref={wrapperRef.current[state.currentStep - 1]}>
        <label>
          <div className={style.inputTitle}>Введите Ваше имя</div>
          <div className={style.subTitleInput}>
            Обязательное поле для заполнения
          </div>
          <input
            className={style.textInput}
            name="name"
            type="text"
            placeholder="Имя"
            value={props.name}
            onChange={props.handleChange}
            required={true}
            ref={itemsRef.current[state.currentStep - 1]}
          />
        </label>
      </div>
    )
  }

  const EmailStepForm = props => {
    if (props.currentStep !== 2) {
      return null
    }
    return (
      <div ref={wrapperRef.current[state.currentStep - 1]}>
        <label htmlFor="email">
          <div className={style.inputTitle}>
            Введите Вашу эллектронную почту
          </div>
          <div className={style.subTitleInput}>
            Обязательное поле для заполнения
          </div>
          <input
            className={style.textInput}
            name="email"
            type="text"
            placeholder="Почта"
            value={props.email}
            onChange={props.handleChange}
            ref={itemsRef.current[state.currentStep - 1]}
          />
        </label>
      </div>
    )
  }

  const PhoneStepForm = props => {
    if (props.currentStep !== 3) {
      return null
    }
    return (
      <div ref={wrapperRef.current[state.currentStep - 1]}>
        <label htmlFor="phone">
          <div className={style.inputTitle}>Введите Ваш номер</div>
          <div className={style.subTitleInput}>
            Обязательное поле для заполнения
          </div>
          <input
            className={style.textInput}
            name="phone"
            type="tel"
            placeholder="+375 .. ... - .. - .."
            value={props.phone}
            onChange={props.handleChange}
            ref={itemsRef.current[state.currentStep - 1]}
          />
        </label>
      </div>
    )
  }

  const FileStepForm = props => {
    if (props.currentStep !== 4) {
      return null
    }
    let __inputText =
      state.file !== undefined ? state.file.name : "Прикрепить ТЗ"
    return (
      <div
        className={style.inputAreaWrapper}
        ref={wrapperRef.current[state.currentStep - 1]}
      >
        <div className={style.textAreaWrapper}>
          <div className={style.inputTitle}>
            Загрузите файл с техническим заданием
          </div>
          <div className={style.subTitleInput}>
            Нажмите на “Прикрепить ТЗ” или перетащите файл в область
          </div>
        </div>
        <input
          id="file"
          name="file"
          type="file"
          className={style.fileInput}
          value={props.technicalTask}
          onChange={props.handleChange}
          ref={itemsRef.current[state.currentStep - 1]}
        />
        <label
          htmlFor="file"
          className={classNames(style.inputWrapper, {
            [style.fileIsDownload]: state.file !== undefined,
          })}
        >
          <div className={style.inputImage}>
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.24515 20.3295C4.95944 20.0442 4.73273 19.7055 4.57797 19.3326C4.42321 18.9597 4.34345 18.5599 4.34322 18.1562L4.34866 12.0111C4.34843 11.6072 4.42782 11.2072 4.58229 10.834C4.73675 10.4608 4.96326 10.1217 5.24887 9.83609C5.53448 9.55048 5.87358 9.32397 6.24679 9.1695C6.62 9.01504 7.01999 8.93564 7.4239 8.93587L22.7893 8.93587C23.5989 8.95496 24.37 9.28508 24.9427 9.85772C25.5153 10.4304 25.8454 11.2015 25.8645 12.0111L25.8591 15.0809C25.8593 15.4848 25.7799 15.8848 25.6255 16.258C25.471 16.6313 25.2445 16.9704 24.9589 17.256C24.6733 17.5416 24.3342 17.7681 23.961 17.9226C23.5878 18.077 23.1878 18.1564 22.7838 18.1562L10.4937 18.1562C9.67811 18.1562 8.89591 17.8322 8.31919 17.2555C7.74247 16.6787 7.41847 15.8965 7.41847 15.0809C7.41847 14.2653 7.74247 13.4831 8.31919 12.9064C8.89591 12.3297 9.67811 12.0057 10.4937 12.0057L20.4856 12.0111L20.5073 13.5759L10.5209 13.5759C10.1131 13.5759 9.72198 13.7379 9.43362 14.0263C9.14526 14.3146 8.98326 14.7057 8.98326 15.1135C8.98326 15.5213 9.14526 15.9124 9.43362 16.2008C9.72198 16.4892 10.1131 16.6512 10.5209 16.6512L22.7893 16.6186C22.9912 16.6187 23.1912 16.579 23.3778 16.5017C23.5644 16.4245 23.734 16.3113 23.8768 16.1685C24.0196 16.0256 24.1329 15.8561 24.2101 15.6695C24.2873 15.4829 24.327 15.2829 24.3269 15.0809L24.3215 12.0111C24.3216 11.8092 24.2819 11.6092 24.2047 11.4226C24.1274 11.236 24.0142 11.0664 23.8714 10.9236C23.7286 10.7808 23.559 10.6675 23.3724 10.5903C23.1858 10.5131 22.9858 10.4734 22.7838 10.4735L7.41847 10.4735C7.21651 10.4734 7.01652 10.5131 6.82991 10.5903C6.64331 10.6675 6.47376 10.7808 6.33095 10.9236C6.18815 11.0664 6.07489 11.236 5.99766 11.4226C5.92043 11.6092 5.88073 11.8092 5.88085 12.0111L5.88628 18.1562C5.88617 18.3581 5.92586 18.5581 6.0031 18.7447C6.08033 18.9313 6.19358 19.1009 6.33639 19.2437C6.47919 19.3865 6.64874 19.4998 6.83535 19.577C7.02195 19.6542 7.22195 19.6939 7.4239 19.6938L20.4638 19.6938L20.4693 21.2206L7.42934 21.2206C7.02453 21.2232 6.62318 21.1458 6.24835 20.9929C5.87353 20.84 5.5326 20.6146 5.24515 20.3295Z"
                fill="#FA5C45"
              />
            </svg>
            {state.file !== undefined && (
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.130371"
                  y="0.829102"
                  width="1.17284"
                  height="12.9012"
                  transform="rotate(-45 0.130371 0.829102)"
                  fill="white"
                />
                <rect
                  x="9.12256"
                  y="0.0478516"
                  width="1.17284"
                  height="12.9012"
                  transform="rotate(45 9.12256 0.0478516)"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <div
            className={classNames(style.fileInputText, {
              [style.fileIsDownload]: state.file !== undefined,
            })}
          >
            {__inputText}
          </div>
        </label>
      </div>
    )
  }

  const SuccessStepForm = props => {
    if (props.currentStep !== ALL_COUNT_STEP) {
      return null
    }
    return (
      <div ref={wrapperRef.current[state.currentStep - 1]}>
        <div>Отлично!</div>
        <div>
          Мы внимательно изучим Ваш бриф и свяжемся с Вами в ближайшее время!
        </div>
      </div>
    )
  }

  const successLabel = () => {
    let currentStep = state.currentStep
    if (currentStep !== ALL_COUNT_STEP) {
      return null
    }
    return (
      <div className={style.successLabel}>
        <svg
          width="44"
          height="31"
          viewBox="0 0 44 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1.94699"
            height="19.5143"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.16553 15.3418)"
            fill="white"
          />
          <rect
            width="1.94699"
            height="40.259"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 43.0537 2.0542)"
            fill="white"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={style.wrapper}>
      <div className={style.formAreaWrapper}>
        {previousButton()}
        <form
          onSubmit={handleSubmit}
          className={classNames(style.formWrapper, {
            [style.isNotFirstStep]: state.currentStep !== 1,
          })}
          ref={formEl}
        >
          <NameStepForm
            currentStep={state.currentStep}
            handleChange={handleChange}
            name={state.name}
          />
          <EmailStepForm
            currentStep={state.currentStep}
            handleChange={handleChange}
            email={state.email}
          />
          <PhoneStepForm
            currentStep={state.currentStep}
            handleChange={handleChange}
            phone={state.phone}
          />
          {/* <FileStepForm
          currentStep={state.currentStep}
          handleChange={handleAttachment}
          technicalTask={state.technicalTask}
        /> */}
          <SuccessStepForm
            currentStep={state.currentStep}
            handleChange={handleAttachment}
          />
          {nextButton()}
          {submitButton()}
          {successLabel()}
        </form>
      </div>
      <div className={style.progressBar}>
        {state.currentStep < ALL_COUNT_STEP && (
          <div
            style={{ width: `${state.currentStep * 25}%` }}
            className={style.valueProgressBar}
          ></div>
        )}
      </div>
    </div>
  )
}

export default ContactForm
