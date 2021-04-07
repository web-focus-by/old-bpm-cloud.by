import React from "react"
import style from'./animateModule.module.scss'
import {Link} from 'gatsby'
import classNames from "classnames"


const AnimateModule = ({content, title})=>{
    console.log(content, title)
    return(
        <div className={style.wrapper}>
            <div dangerouslySetInnerHTML={{ __html: content.content[0] }} className={classNames(style.subTitle)}>
            </div>
            <div className={style.animationAreaWrapper}>
                <div className={style.animationContainer}></div>
                <div className={style.animationTextContainer}>
                    <div  dangerouslySetInnerHTML={{ __html: content.content[1] }}></div>
                    <div  dangerouslySetInnerHTML={{ __html: content.content[2] }}></div>
                </div>
            </div>
        </div>
    )
}

export default AnimateModule