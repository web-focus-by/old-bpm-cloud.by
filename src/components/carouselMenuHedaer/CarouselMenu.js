import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./stylesCarousel.css"
import { images } from "../../images"

import styles from "./CarouselMenu.module.css"

const menuItems = [
  { name: "SMM" },
  { name: "Разработка сайтов" },
  { name: "Seo" },
  { name: "Главная" },
  { name: "PPC" },
  { name: "Брендинг и дизайн" },
  { name: "Разработка приложений" },
]

const CarouselMenu = ({ data = menuItems }) => {
  const settings = {
    centerMode: true,
    // pauseOnFocus: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility: true,
    // autoplay: true,
    // autoplaySpeed: 10000,
    // autoplay: false,
    // swipeToSlide: true,
    speed: 200,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className={styles.wrapperCarouselMenu}>
      <div className={styles.arrow}>
        <img src={images.Vector} alt="" />
      </div>
      <div className={styles.colorTop}></div>
      <Slider {...settings} className={styles.wrap}>
        {(data || []).map((item, index) => (
          <div key={index} className={styles.itemMenu}>
            <img src={images.circleMenu} alt="" />
            <div className={styles.text}>{item.name}</div>
          </div>
        ))}
      </Slider>
      <div className={styles.colorBottom}></div>
    </div>
  )
}

export default CarouselMenu
