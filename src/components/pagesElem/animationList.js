import React from "react"
import style from'./animationList.module.scss'
import {Link} from 'gatsby'

const AnimationList = ({content})=>{
    console.log(content)
    const __tempArr = []
    const __secondTempArr = []
    content.content.map((e, i) =>{
        if(e.includes(0)){
            __tempArr.push(            {
                listNumber: content.content[i],
                listTitle: content.content[i + 1],
                listContent: content.content[i + 2],                
            })
        }
    })
    console.log(__tempArr)
    return(
        <div className={style.wrapper}>
            <div className={style.title}  dangerouslySetInnerHTML={{ __html: content.title}}></div>
            <div className={style.subText} dangerouslySetInnerHTML={{ __html: content.content[0]}}></div>
            <div className={style.itemAreaWrapper}>
                {__tempArr.map((e, i) =>{
                        return(
                            <div key={i} className={style.itemWrapper}>
                                <div className={style.animation}></div>
                                <div className={style.textWrapper}>
                                    <div className={style.textNumber}  dangerouslySetInnerHTML={{ __html: e.listNumber }}></div>
                                    <div className={style.textTitle} dangerouslySetInnerHTML={{ __html: e.listTitle }}></div>
                                    <div className={style.textContent} dangerouslySetInnerHTML={{ __html: e.listContent }}></div>
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default AnimationList