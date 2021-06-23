import React from "react"
import style from "./popularServices.module.scss"
import { Link } from "gatsby"
import Slider from "react-slick"
import { images } from "../../images/index"

const PopularServices = () => {
  const arr = [
    {
      title: "Разработка сайта",
      content:
        "Веб-студия «BPM Cloud» создаст ресурс, который станет полноценным виртуальным офисом.",
      link: "/razrabotka-sajtov/",
      img: images.Group957,
    },
    {
      title: "SEO-продвижение",
      content: "Первые позиции в выдаче и броские сниппеты сделают свое дело.",
      link: "/seo/",
      img: images.Ellipse184,
    },
    {
      title: "Брендинг и дизайн",
      content: "Стройная структура, юзабилити, запоминающийся внешний облик.",
      link: "/brending-i-dizajn/",
      img: images.Rectangle974,
    },
    {
      title: "SMM-продвижение",
      content:
        "Создадим профиль, обеспечим контентом, настроим таргетированную рекламу.",
      link: "/smm/",
      img: images.Ellipse181,
    },
    {
      title: "Контекстная реклама",
      content: "Грамотно настроим, добившись предельного КПД.",
      link: "/ppc/",
      img: images.Polygon20,
    },
    {
      title: "Разработка приложений",
      content:
        "Справочные, коммуникативные, развлекательные, прикладные и навигационные приложения.",
      link: "/razrabotka-prilozhenij/",
      img: images.Vector159,
    },
  ]
  const settings = {
    centerMode: false,
    touchMove: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    focusOnSelect: true,
    arrows: false,
    swipeToSlide: true,
  }
  return (
    <div>
      <div className={style.wrapper}>
        <p className={style.h3}>Популярные услуги</p>
        <p className={style.subTitle}>
          Digital-агентство «BPM Cloud» – это комплексный подход к
          интернет-маркетингу. Создание сайта – только первый шаг в онлайн-мире.
          Важно организовать действенное продвижение продукта в интернете.
        </p>
      </div>
      <div className={style.sliderWrapper}>
        <Slider {...settings}>
          {arr.map((e, i) => {
            return (
              <Link to={e.link} className={style.slide} key={i}>
                <p className={style.cardTitle}>{e.title}</p>
                <p className={style.cardSubTitle}>{e.content}</p>
                <img src={e.img} />
              </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PopularServices
