import React, { useState } from "react"
import style from "./scrolMenuHeder.module.scss"
import { images } from "../../images"
import ScrollContainer from "react-indiana-drag-scroll"
import classnames from "classnames"
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "gatsby"

const menuItems = [
  { name: "SMM", url: "/smm/" },
  { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
  { name: "Seo", url: "/seo/" },
  { name: "Главная", url: "/" },
  { name: "PPC", url: "/ppc/" },
  { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
  { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
  { name: "SMM", url: "/smm/" },
  { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
  { name: "Seo", url: "/seo/" },
  { name: "Главная", url: "/" },
  { name: "PPC", url: "/ppc/" },
  { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
  { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
]

const ScrolMenuHeder = () => {
  const [arr, setArr] = useState(menuItems)
  const [isClick, setClick] = useState(false)
  const [activeItem, setActiveItem] = useState(3)
  // const currentItem = localStorage.getItem('currentItem');

  let customArr = [
    { name: "SMM", url: "/smm/" },
    { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
    { name: "Seo", url: "/seo/" },
    { name: "Главная", url: "/" },
    { name: "PPC", url: "/ppc/" },
    { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
    { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
  ]
  // if(currentItem){
  //     console.log(currentItem)
  //     customArr.reverse().forEach((e,i) =>{
  //         menuItems.unshift(e)
  //     })
  // }
  const items = arr.map((elem, index) => {
    return (
      <div
        key={index}
        className={classnames(style.listItem, {
          [style.active]: index == activeItem,
        })}
      >
        <Link to={elem.url}>
          <img src={images.circleMenu} alt="" />
          <span>{elem.name}</span>
        </Link>
      </div>
    )
  })
  function setStyleInItems(args) {
    document.querySelector(`.${style.scrollContainer}`).style.scrollSnapType =
      "y mandatory"
    document.querySelectorAll(`.${style.listItem}`).forEach(elem => {
      elem.style.scrollSnapAlign = "center"
    })

    let height = document.querySelector(`.${style.listItem}`).clientHeight
    setActiveItem(Math.round(args[1] / height) + 3)
    if (args[3] - args[1] < 600) {
      getMoreData()
    }
  }

  function removeStyleInItems() {
    document.querySelector(`.${style.scrollContainer}`).style.scrollSnapType =
      ""
    document.querySelectorAll(`.${style.listItem}`).forEach(elem => {
      elem.style.scrollSnapAlign = ""
    })
  }

  function getMoreData() {
    setArr(arr.concat(menuItems))
  }

  return (
    <div className={style.wrapper}>
      <div className={style.colorTop}></div>
      <img src={images.Vector} alt="" />
      <ScrollContainer
        className={style.scrollContainer}
        hideScrollbars={true}
        onClick={() => setClick(true)}
        onEndScroll={(...args) => {
          setStyleInItems(args)
        }}
        onStartScroll={(...args) => {
          removeStyleInItems()
        }}
      >
        {items}
      </ScrollContainer>
      <div className={style.colorBottom}></div>
      <div className={style.mobileActiveArea}></div>
    </div>
  )
}

export default ScrolMenuHeder
