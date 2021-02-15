import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./stylesCarousel.css"
import { images } from "../../images"
import { Link } from "gatsby"

import styles from "./CarouselMenu.module.css"

const menuItems = [
  { name: "SMM", utl:'' },
  { name: "Разработка сайтов", utl:''  },
  { name: "Seo", utl:'' },
  { name: "Главная", utl:'' },
  { name: "PPC", utl:'' },
  { name: "Брендинг и дизайн", utl:'' },
  { name: "Разработка приложений", utl:'' },
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
            <Link to={`/${item.utl}`}><div className={styles.text}>{item.name}</div></Link>
          </div>
        ))}
      </Slider>
      <div className={styles.colorBottom}></div>
    </div>
  )
}

export default CarouselMenu
