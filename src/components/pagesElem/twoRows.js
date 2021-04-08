import React from "react"
import style from'./twoRows.module.scss'
import {Link} from 'gatsby'

const TwoRows = ({content})=>{
    console.log(content)
    const __tempArr = []
    content.content.map((e, i) =>{
        if(e.includes('<br')){
            __tempArr.push({
                title: e,
                content: content.content[i + 1],
            })
        }
    })

    return(
        <div className={style.wrapper}>
            <div className={style.title} dangerouslySetInnerHTML={{ __html: content.title.split(' – ').join(' –</br>')}}></div>
            <div className={style.subText} dangerouslySetInnerHTML={{ __html: content.content[0]}}></div>
            <div className={style.listWrapper}>
                {__tempArr.map((e, i) =>{
                    return(
                        <div key={i} className={style.listItemWrapper}>
                            <div className={style.image}></div>
                            <div className={style.textArea}>
                                <div className={style.listItemTitle} dangerouslySetInnerHTML={{ __html:e.title}}></div>
                                <div className={style.listItemText} dangerouslySetInnerHTML={{ __html: e.content}}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TwoRows