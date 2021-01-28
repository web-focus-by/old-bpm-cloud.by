import React, { useState } from "react"
import classnames from "classnames"

import styles from "./Form.module.css"
import QuizOne from "./quizs/QuizOne"
import QuizTwo from "./quizs/QuizTwo"
import QuizThree from "./quizs/QuizThree"
import QuizFour from "./quizs/QuizFour"
import QuizFive from "./quizs/QuizFive"
import QuizSix from "./quizs/QuizSix"

const Form = () => {
  const [state, setState] = useState(0)

  const handlerLine = () => {
    setState(state + 1)
    if (state === 5) {
      setState(0)
    }
  }

  const getQuiz = state => {
    switch (state) {
      case 0:
        return <QuizOne handlerLine={handlerLine} />
      case 1:
        return <QuizTwo handlerLine={handlerLine} />
      case 2:
        return <QuizThree handlerLine={handlerLine} />
      case 3:
        return <QuizFour handlerLine={handlerLine} />
      case 4:
        return <QuizFive handlerLine={handlerLine} />
      case 5:
        return <QuizSix />
      default:
        return <QuizOne handlerLine={handlerLine} />
    }
  }
  return (
    <div className={styles.wrapperFrom}>
      <div className={styles.title}>
        Помогите нам лучше понять вас, заполнив форму ниже
      </div>
      <div className={styles.form}>
        <div className={styles.boxLine}>
          <div className={styles.line}>
            <div
              className={classnames(styles.bodyLine, {
                [styles.bodyLineOne]: 1 === state,
                [styles.bodyLineTwo]: 2 === state,
                [styles.bodyLineThree]: 3 === state,
                [styles.bodyLineFour]: 4 <= state,
              })}
            ></div>
          </div>
          <div className={classnames(styles.circle)}>1</div>
          <div
            className={classnames(styles.circleActive, {
              [styles.circle]: 2 <= state,
              [styles.circleBorder]: 1 <= state,
            })}
          >
            2
          </div>
          <div
            className={classnames(styles.circleActive, {
              [styles.circle]: 3 <= state,
              [styles.circleBorder]: 2 <= state,
            })}
          >
            3
          </div>
          <div
            className={classnames(styles.circleActive, {
              [styles.circle]: 4 <= state,
              [styles.circleBorder]: 3 <= state,
            })}
          >
            4
          </div>
          <div
            className={classnames(styles.circleActive, {
              [styles.circle]: 5 === state,
              [styles.circleBorder]: 4 <= state,
            })}
          >
            5
          </div>
        </div>
        {getQuiz(state)}
        {/* <QuizFive handlerLine={handlerLine} /> */}
        {/* <QuizFour handlerLine={handlerLine} /> */}
        {/* <QuizThree handlerLine={handlerLine} /> */}
        {/* <QuizTwo handlerLine={handlerLine} /> */}
        {/* <QuizOne handlerLine={handlerLine} /> */}
      </div>
    </div>
  )
}

export default Form
