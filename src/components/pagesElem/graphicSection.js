import React from "react"
import style from'./graphicSection.module.scss'
import {Link} from 'gatsby'
import classNames from "classnames"

const GraphicSection = ()=>{
    const graphicArr = [
        {
            title:'Отстутствие сайта',
            val:[11, 9, 13],
        },
        {
            title:'Устаревший и нелогичный сайт',
            val:[22, 13, 15],
        },
        {
            title:'Хороший и продуманный сайт',
            val:[91, 82, 95],
        },
    ]

    return(
        <div className={style.wrapper}>
            <h2>Как присутствие онлайн<br/> влияет на бизнес: </h2>
            <div className={style.areaWrapper}>
                {graphicArr.map((elem, index) =>{
                    return(
                        <div className={style.graphWrapper} key={index}>
                            <div className={style.cardTitle}>{elem.title}</div>
                            <div className={style.graph}>
                                <div>
                                     <div className={style.line}>
                                        <div style={{
                                            width:`${elem.val[0]}%`
                                        }} className={style.value}></div>
                                    </div>
                                    <div className={style.text}>Новый клиент</div>
                                    <div className={style.line}>
                                        <div style={{
                                            width:`${elem.val[1]}%`
                                        }} className={style.value}></div>
                                    </div>
                                    <div className={style.text}>Узнаваемость бренда</div>
                                    <div className={style.line}>
                                        <div style={{
                                            width:`${elem.val[2]}%`
                                        }} className={style.value}></div>
                                    </div>
                                    <div className={classNames(style.text, style.lastItem)}>Доверие к компании</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GraphicSection