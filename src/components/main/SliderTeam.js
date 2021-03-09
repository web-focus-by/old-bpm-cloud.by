import React, { useState, useEffect } from "react"
import classnames from "classnames"
import { ButtonSmall } from "../buttons"
import { images } from "../../images"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./SliderTeam.module.css"

const menuItems = [
  { photo: images.anastasiy, name: "Анастасия", job: "Project-менеджер" },
  { photo: images.dima, name: "Дима", job: "SEO-специалист" },
  { photo: images.oly, name: "Оля", job: "SEO-специалист" },
  { photo: images.vika, name: "Вика", job: "SEO-специалист" },
  { photo: images.vlada, name: "Влада", job: "Веб-дизайнер" },
  { photo: images.y, name: "Саша", job: "Веб-дизайнер" },
  { photo: images.yriy, name: "Юрий", job: "CEO" },
]
const ShowDesc = ({ name, job, elem }) => {
  return (
    <div
      className={classnames(styles.descPhoto, {
        [styles.active]: elem,
      })}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.job}>{job}</div>
    </div>
  )
}

const SliderTeam = ({ data = menuItems }) => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    // touchMove: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    // focusOnSelect: false,
    arrows: false,
    // swipeToSlide: true,
    // pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={styles.wrapperSliderTeam}>
      <div className={styles.title}>
        <div className={styles.textTitle}>Наша команда</div>
        <ButtonSmall green className={styles.titleButton}>вся команда </ButtonSmall>
      </div>
      <Slider {...settings}>
        {(data || []).map((item, index) => {
          return (
            <div key={index} className={styles.itemMenu}>
              <img className={styles.photo} src={item.photo} alt="" />
              <ShowDesc elem={true} job={item.job} name={item.name} />
              {/* <div className={styles.mask}></div> */}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default SliderTeam
