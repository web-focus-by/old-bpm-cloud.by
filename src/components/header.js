import React from "react"
import { images } from "../images"

import { Button } from "./buttons"
import CarouselMenu from "./carouselMenuHedaer/CarouselMenu"
import styles from "./header.module.css"

import HeaderMenu from "./headerMenu/menuHeader"

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.BpmCloud} src={images.bpmCloud} alt="" />
        <div className={styles.box}>
          <HeaderMenu />
          <div className={styles.yellowButton}>
            <Button className={styles.buttonStyles}>+375 (33) 32 44 000</Button>
          </div>
        </div>
      </div>
      <div className={styles.conteinerTwo}>
        <div className={styles.boxLogo}>
          <div className={styles.textBPM}>{"BPM cloud"}</div>
          <div className={styles.sabtext}>
            Реально работающий интернет-маркетинг
          </div>
        </div>
        <CarouselMenu />
      </div>
    </header>
  )
}

export default Header
