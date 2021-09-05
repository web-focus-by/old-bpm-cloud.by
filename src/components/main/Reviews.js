import React from "react"
import { ButtonSmall } from "../buttons"
import CustomScroll from "react-scrollbars-custom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./Reviews.module.scss"

const menuItems = [
  {
    text:
      "Выражаем признательность ООО «БПМ-Клауд» за организацию продвижения в Интернете нашего проекта. Помогли довести до ума сайт, организовали присутствие в социальных сетях, настроили рекламу. Работают быстро и слаженно, понимают с полуслова, что от них хотят. Продолжаем сотрудничество. ",
    author: "ООО “Лаймстрим”",
    description: "Магазин спортивной одежды, обуви и аксессуаров",
  },
  {
    text:
      "Спасибо за создание, наполнение и ведение аккаунтов в Инстаграм, Фейсбук и ВКонтакте. Убедилась на собственном опыте, что это действительно работает. Полагаю, что впереди еще много интересных проектов. Теперь знаю, куда обращаться для интернет-продвижения.",
    author: "гурина Анастасия",
    description: "Частный предприниматель",
  },
  {
    text:
      "Благодарим за создание и раскрутку сайта нашей компании в интернете. Ощутимые результаты уже через 3 месяца. Надеемся, что поток клиентов не иссякнет. По крайней мере, сеошники «БПМ-КЛАУД» говорят, что это только начало)",
    author: "ООО “Риалпэн”",
    description: "Магазин товаров для творчества и канцтоваров",
  },
  {
    text:
      "Очень доволен новым дизайном сайта. Убедился лично, что даже шаблонное решение можно так доработать, что просто загляденье. Девочки-дизайнеры здесь просто супер!!!!",
    author: "Раковский Денис",
    description: "Начальник отдела продаж",
  },
  {
    text:
      "Проводил рекламную кампанию с помощью контекстной рекламы. Это действительно работает. Пока приостановил сотрудничество, так как достигнут потолок, но обязательно буду обращаться еще в эту компанию! ",
    author: "Зайцев владислав",
    description: "Частный предприниматель",
  },
  {
    text:
      "Уже больше года всем, что связано с интернет-продвижением, занимается «БПМ-КЛАУД». Результатом довольны. Появился трафик на сайте, много переходов с покупкой услуги. Скорее всего, еще попробуем контекстную рекламу. Будем работать с этой компанией и дальше.",
    author: "ООО “ривергрупп”",
    description: "Монтаж, наладка и запуск фонтанов",
  },
]

const Reviews = ({ data = menuItems }) => {
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.headReviews}>
        <div>
          <h2 className={styles.title}>Отзывы наших клиентов</h2>
          <div className={styles.text}>
            Непременно ознакомьтесь с тем, что пишут о нашей компании клиенты.
            Мнение тех, кто платит свои деньги, стоит дорого! Рады, что выбрали
            верный вектор развития. Работали и с директорами заводов, и с ИП.
            Найдем продуктивный язык и с читателем.
          </div>
        </div>
        <ButtonSmall red className={styles.button}>
          все отзывы
        </ButtonSmall>
      </div>
      <div className={styles.wrapperSlider}>
        <Slider {...settings}>
          {(data || []).map((item, index) => {
            return (
              <div key={index} className={styles.items}>
                <div className={styles.kovichki}>
                  <svg width="56" height="51" fill="none">
                    <path
                      id={styles.svg}
                      d="M14.4 29.4L21.2.6h-9.6L3.2 28.2C1.2 34 .6 36.4.6 39.6c0 6 4.2 10.8 10.6 10.8 5.8 0 10.4-4.4 10.4-10.8 0-5-2.8-8.8-7.2-10.2zm34 0L55.2.6h-9.6l-8.4 27.6c-2 5.8-2.6 8.2-2.6 11.4 0 6 4.2 10.8 10.6 10.8 5.8 0 10.4-4.4 10.4-10.8 0-5-2.8-8.8-7.2-10.2z"
                      fill="#309195"
                    />
                  </svg>
                </div>
                <CustomScroll
                  className={styles.wrapperProducts}
                  style={{ height: 220 }}
                  trackYProps={{
                    renderer: props => {
                      const { elementRef, ...restProps } = props
                      return (
                        <span
                          {...restProps}
                          ref={elementRef}
                          className={styles.wrapperTrack}
                        />
                      )
                    },
                  }}
                  // thumbYProps={{
                  //   renderer: props => {
                  //     const { elementRef, ...restProps } = props
                  //     return (
                  //       <span
                  //         {...restProps}
                  //         ref={elementRef}
                  //         className={styles.wrapperThumb}
                  //       />
                  //     )
                  //   },
                  // }}
                >
                  {<div className={styles.textReview}>{item.text}</div>}
                </CustomScroll>
                <div className={styles.border}></div>
                <div>
                  <div className={styles.avtorReview}>{item.author}</div>
                  <div className={styles.dexcAvtor}>{item.description}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
export default Reviews
