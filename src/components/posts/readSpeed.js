import React from "react"
import style from "./readSpeed.module.scss"
import { images } from "../../images"

const ReadSpeed = ({ content }) => {
  const speed = 100
  const textLength = content.split(" ").length !== undefined ? content.split(" ").length : 100;
  const timeForRead = Math.round(textLength / speed)
  const text = {
    mainText: "Время прочтенния:",
    time: "мин.",
  }

  return (
    <div className={style.wrapper}>
      <div>
        <img src={images.readSpeed}></img>
      </div>
      <div className={style.text}>{text.mainText}</div>
      <div className={style.content}>
        {timeForRead} {text.time}
      </div>
    </div>
  )
}

export default ReadSpeed
