import { Link } from "gatsby"
import React, { useState } from "react"
import { images } from "../images"
import classnames from "classnames"
import { Button } from "./buttons"
import ScrolMenuHeder from "./scrolMenuHeder/scrolMenuHeder"
import styles from "./header.module.scss"
import bgStyles from "./backgroundAnimation.module.scss"
import HeaderMenu from "./headerMenu/menuHeader"
import classNames from "classnames"
import MainBlock from "./mainBlock/mainBlock"
import { getSubTitleText } from "./utils/headerSubTitle"
import _ from "lodash"

const Header = ({ pageInfo }) => {
  let subTitle = (
    <h1 className={styles.subText}>Реально работающий интернет-маркетинг</h1>
  )
  let currentPage = "/"
  if (pageInfo) {
    subTitle = getSubTitleText(pageInfo.title)
    currentPage = pageInfo.slug
  }
  let arr = []
  for (let i = 1; i <= 20; i++) {
    if (pageInfo !== undefined) {
      switch (pageInfo.title) {
        case "Разработка сайтов":
          arr.push({ img: 3, counter: i })
          break
        case "SEO":
          arr.push({ img: 2, counter: i })
          break
        case "Брендинг и дизайн":
          arr.push({ img: 1, counter: i })
          break
        case "PPC":
          arr.push({ img: 6, counter: i })
          break
        case "SMM":
          arr.push({ img: 4, counter: i })
          break
        case "Разработка приложений":
          arr.push({ img: 5, counter: i })
          break
        default:
          arr.push({ img: _.random(1, 6), counter: i })
      }
    } else {
      arr.push({ img: _.random(1, 6), counter: i })
    }
  }
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link to={"/"}>
            <img className={styles.BpmCloud} src={images.bpmCloud} alt="" />
          </Link>
          <div className={styles.box}>
            <HeaderMenu />
            <div className={styles.yellowButton}>
              <Button className={styles.buttonStyles}>
                <a href="tel:+375 (33) 32 44 000">+375 (33) 32 44 000</a>
              </Button>
            </div>
          </div>
        </div>

        {pageInfo == undefined || pageInfo.parentId == null ? (
          <div className={styles.conteinerTwo}>
            <div className={styles.boxLogo}>
              <div className={styles.textBPM}>
                <svg
                  // width="541"
                  // height="172"
                  viewBox="0 0 541 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="489.053"
                    width="51.9461"
                    height="171.042"
                    fill="#309195"
                  />
                  <path
                    d="M354.754 0H406.7L471.316 118.463L447.877 171.042L354.754 0Z"
                    fill="#309195"
                  />
                  <rect width="51.9461" height="171.042" fill="#FA5C45" />
                  <path
                    d="M84.8883 81.0867C95.6411 81.0867 105.953 76.8151 113.557 69.2118C121.16 61.6084 125.432 51.2961 125.432 40.5433C125.432 29.7906 121.16 19.4782 113.557 11.8749C105.953 4.27152 95.6411 3.21435e-07 84.8883 -1.7722e-06L84.8883 40.5433L84.8883 81.0867Z"
                    fill="#FA5C45"
                  />
                  <path
                    d="M84.8883 171.042C95.6411 171.042 105.953 166.77 113.557 159.167C121.16 151.564 125.432 141.251 125.432 130.498C125.432 119.746 121.16 109.433 113.557 101.83C105.953 94.2266 95.6411 89.9551 84.8883 89.9551L84.8883 130.498L84.8883 171.042Z"
                    fill="#FA5C45"
                  />
                  <rect
                    x="169.775"
                    width="51.9461"
                    height="171.042"
                    fill="#FFCC00"
                  />
                  <path
                    d="M295.206 40.5433C295.206 35.2191 294.157 29.947 292.12 25.0281C290.082 20.1091 287.096 15.6397 283.331 11.8749C279.566 8.11007 275.097 5.12367 270.178 3.08618C265.259 1.04868 259.987 -2.32729e-07 254.662 0V40.5433L295.206 40.5433Z"
                    fill="#FFCC00"
                  />
                  <path
                    d="M254.664 138.1C259.988 138.1 265.26 137.052 270.179 135.014C275.098 132.977 279.567 129.99 283.332 126.225C287.097 122.461 290.083 117.991 292.121 113.072C294.158 108.153 295.207 102.881 295.207 97.557L254.664 97.557L254.664 138.1Z"
                    fill="#FFCC00"
                  />
                  <rect
                    x="254.662"
                    y="40.543"
                    width="40.5433"
                    height="57.0141"
                    fill="#FFCC00"
                  />
                  <g id={styles.arrowGroupWrapper}>
                    <g transform="scale(1.0, 1.0)">
                      <circle
                        cx="366.156"
                        cy="130.498"
                        r="40.5433"
                        transform="rotate(90 366.156 130.498)"
                        fill="#309195"
                      />
                      <path
                        d="M393 129L366 156L339 129"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <path
                        d="M366 155L366 103"
                        stroke="white"
                        strokeWidth="3"
                      />
                    </g>
                  </g>
                </svg>
                <div className={styles.displayNone}>
                  {/* {setTimeout(rotateArrow, 1000)} */}
                </div>
              </div>
              <div className={styles.subText}>{subTitle}</div>
            </div>
            <MainBlock currentPage={currentPage} />
            <div
              className={classnames(styles.yellowButton, styles.mobileButton)}
            >
              <Button className={styles.buttonStyles}>
                +375 (33) 32 44 000
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={classnames(
              styles.conteinerTwo,
              styles.subPageContainerWrapper
            )}
          >
            <h1 className={styles.subPage}>{pageInfo.title}</h1>
            <div
              className={classnames(styles.yellowButton, styles.mobileButton)}
            >
              <Button className={styles.buttonStyles}>
                +375 (33) 32 44 000
              </Button>
            </div>
          </div>
        )}
      </div>
      <ul className={bgStyles.circles}>
        {_.shuffle(arr).map((e, i) => {
          return (
            <li
              key={i}
              data-index-number={e.img}
              data-counter-number={e.counter}
            ></li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
