import React, {useState} from "react"
import style from'./tirdMenuItem.module.scss'
import {Link} from 'gatsby'

const ThirdMenuItem = ({isShowTirdMenu, index, contetnArr, isShow})=>{

    console.log(isShowTirdMenu)
    const childernItems = (elem)=>{
        return(
          <div className={style.listItem} key={elem.id}><Link to={elem.path}>{elem.title}</Link></div>
        )
      }
    const thirdMenuContent = isShowTirdMenu && contetnArr !== undefined? contetnArr.routes.map((item) => childernItems(item)):false;
    return(
        <div className={style.wrapper}>
            {isShow && thirdMenuContent}
        </div>
    )
}

export default ThirdMenuItem