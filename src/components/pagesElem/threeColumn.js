import React from "react"
import style from'./threeColumn.module.scss'
import {Link} from 'gatsby'

const ThreeColumn = ({content})=>{
    console.log(content)

    return(
        <div className={style.wrapper}>
            <div className={style.title} dangerouslySetInnerHTML={{ __html: content.title }}></div>
            <div className={style.contentArea}>
                {content.content.map((e, i) =>{
                    return(
                        <div className={style.contentColumn} dangerouslySetInnerHTML={{ __html: e }} key={i}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default ThreeColumn