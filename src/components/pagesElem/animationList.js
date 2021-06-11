import React, { useRef, useEffect } from "react"
import style from "./animationList.module.scss"
import { Link } from "gatsby"
import { images } from "../../images/index"

const cardArray = [
  images.someSVG1,
  images.someSVG2,
  images.someSVG3,
  images.someSVG4,
  images.someSVG5,
  images.someSVG6,
  images.someSVG7,
  images.someSVG8,
]

const AnimationList = ({ content }) => {
  const itemsRef = useRef([...new Array(8)].map(() => React.createRef()))
  const __tempArr = []
  content.content.map((e, i) => {
    if (e.includes(0)) {
      __tempArr.push({
        listNumber: content.content[i],
        listTitle: content.content[i + 1],
        listContent: content.content[i + 2],
      })
    }
  })
  useEffect(() => {
    itemsRef.current.map(elem => {
      elem.current.addEventListener("mousemove", function (e) {
        const [rotateX, rotateY] = [
          -(e.target.offsetWidth / 2 - e.offsetX) / 6,
          (e.target.offsetHeight / 2 - e.offsetY) / 3,
        ]
        elem.current.firstChild.style.transform = `perspective(500px) translateZ(25px)  rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
      })
    })
    itemsRef.current.map(elem => {
      elem.current.addEventListener("mouseout", function (e) {
        elem.current.firstChild.style.transform = `translateZ(0) rotateX(0deg) rotateY(0deg)`
      })
    })
  }, [])
  return (
    <div className={style.wrapper}>
      <div
        className={style.title}
        dangerouslySetInnerHTML={{ __html: content.title }}
      ></div>
      <div
        className={style.subText}
        dangerouslySetInnerHTML={{ __html: content.content[0] }}
      ></div>
      <div className={style.itemAreaWrapper}>
        {__tempArr.map((e, i) => {
          return (
            <div key={i} className={style.itemWrapper}>
              <div ref={itemsRef.current[i]}>
                <div className={style.animation}>
                  <img src={cardArray[i]} />
                </div>
              </div>
              <div className={style.textWrapper}>
                <div
                  className={style.textNumber}
                  dangerouslySetInnerHTML={{ __html: e.listNumber }}
                ></div>
                <div
                  className={style.textTitle}
                  dangerouslySetInnerHTML={{ __html: e.listTitle }}
                ></div>
                <div
                  className={style.textContent}
                  dangerouslySetInnerHTML={{ __html: e.listContent }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnimationList
