import React, {useState} from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./stylesCarousel.css"

import { images } from "../../images"
import { Link } from "gatsby"

import styles from "./CarouselMenu.module.css"

const menuItems = [
  { name: "SMM", url:'/smm/' },
  { name: "Разработка сайтов", url:'/razrabotka-sajtov/'  },
  { name: "Seo", url:'/seo/' },
  { name: "Главная", url:'/' },
  { name: "PPC", url:'/ppc/' },
  { name: "Брендинг и дизайн", url:'/brending-i-dizajn/' },
  { name: "Разработка приложений", url:'/razrabotka-prilozhenij/' },
]

const CarouselMenu = ({ data = menuItems }) => {
  const [currentItem, setCurrentItem] = useState(0)
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    accessibility: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    swipeToSlide: true,
    draggable:true,
    arrows: true,
    speed: 500,
    initialSlide: currentItem,
    afterChange: function(currentSlide) {
      setCurrentItem(currentSlide)
    
    },
/*     responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          centerMode: true,
        },
      },
    ], */
  }
  return (
    <div className={styles.wrapperCarouselMenu}>
      <div className={styles.arrow}>
        <img src={images.Vector} alt="" />
      </div>
      <div className={styles.colorTop}></div>
      <Slider {...settings} className={styles.wrap} item={currentItem}>
        {(data || []).map((item, index) => (
          <div key={index} className={styles.itemMenu}>
            <img src={images.circleMenu} alt="" />
            <Link to={item.url}><div className={styles.text} onClick={() => setCurrentItem(index)}>{item.name}</div></Link>
          </div>
        ))}
      </Slider>
      <div className={styles.colorBottom}></div>
    </div>
  )
}

export default CarouselMenu
