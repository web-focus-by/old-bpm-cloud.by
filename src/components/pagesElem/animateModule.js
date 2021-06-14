import React, { useRef, useEffect, useState } from "react"
import style from "./animateModule.module.scss"
import { Link } from "gatsby"
import classNames from "classnames"
import { Visible } from "../utils/visibleElement"

const AnimateModule = ({ content, title }) => {
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
      <div
        dangerouslySetInnerHTML={{ __html: content.content[0] }}
        className={classNames(style.subTitle)}
      ></div>
      <div className={style.animationAreaWrapper}>
        <div
          className={classNames(style.animationContainer, {
            [style.animationIsStart]: animationIsVisible,
          })}
        >
          <svg
            width="434"
            height="342"
            viewBox="0 0 434 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M414.203 0H0.00195312V269.801L414.203 0Z" fill="#FA5C45" />
            <path
              d="M3.05176e-05 269.801L414.201 269.801L414.201 3.05176e-05L3.05176e-05 269.801Z"
              fill="#FFCC00"
            />
            <rect
              x="159.601"
              y="263.15"
              width="94.0503"
              height="63.6502"
              fill="#FFCC00"
            />
            <rect
              x="117.803"
              y="326.8"
              width="178.6"
              height="15.2"
              fill="#FFCC00"
            />
            <rect
              x="47.5029"
              y="174.39"
              width="319.201"
              height="14.25"
              fill="white"
            />
            <rect
              x="52"
              y="179"
              width="0"
              height="4"
              fill="#3C424A"
              className={style.loadingLine}
            />
          </svg>
          <div className={style.counter}></div>
        </div>
        <div className={style.animationTextContainer}>
          <div dangerouslySetInnerHTML={{ __html: content.content[1] }}></div>
          <div dangerouslySetInnerHTML={{ __html: content.content[2] }}></div>
        </div>
      </div>
    </div>
  )
}

export default AnimateModule
