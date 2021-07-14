import React, { useRef, useEffect, useState } from "react"
import style from "./graphicSection.module.scss"
import { Link } from "gatsby"
import classNames from "classnames"
import { Visible } from "../utils/visibleElement"

const graphicArr = [
  {
    title: "Отстутствие сайта",
    val: [11, 9, 13],
  },
  {
    title: "Устаревший и нелогичный сайт",
    val: [22, 13, 15],
  },
  {
    title: "Хороший и продуманный сайт",
    val: [91, 82, 95],
  },
]

const GraphicSection = () => {
  const [animationIsVisible, setAnimationIsVisible] = useState(false)
  const wrapperEl = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", _tempElementIsVisible)
    return () => {
      window.removeEventListener("scroll", _tempElementIsVisible)
    }
  }, [])

  function _tempElementIsVisible() {
    setAnimationIsVisible(Visible(wrapperEl.current))
  }
  return (
    <div className={style.wrapper} ref={wrapperEl}>
      <h2>
        Как присутствие онлайн
        <br /> влияет на бизнес:{" "}
      </h2>
      <div className={style.areaWrapper}>
        {graphicArr.map((elem, index) => {
          return (
            <div className={style.graphWrapper} key={index}>
              <div className={style.cardTitle}>{elem.title}</div>
              <div className={style.graph}>
                <div>
                  <div className={style.line}>
                    <div
                      style={{
                        width: `${elem.val[0]}%`,
                      }}
                      className={classNames(style.value, {
                        [style.unsetWidth]: !animationIsVisible,
                      })}
                    ></div>
                  </div>
                  <div className={style.text}>Новый клиент</div>
                  <div className={style.line}>
                    <div
                      style={{
                        width: `${elem.val[1]}%`,
                      }}
                      className={classNames(style.value, {
                        [style.unsetWidth]: !animationIsVisible,
                      })}
                    ></div>
                  </div>
                  <div className={style.text}>Узнаваемость бренда</div>
                  <div className={style.line}>
                    <div
                      style={{
                        width: `${elem.val[2]}%`,
                      }}
                      className={classNames(style.value, {
                        [style.unsetWidth]: !animationIsVisible,
                      })}
                    ></div>
                  </div>
                  <div className={classNames(style.text, style.lastItem)}>
                    Доверие к компании
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GraphicSection
