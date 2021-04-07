import React from "react"
import style from'./somePersons.module.scss'
import {Link} from 'gatsby'

const SomePersons = ({content})=>{
console.log(content)

    return(
        <div className={style.wrapper}>
            <div className={style.imageWrapper}></div>
            <div className={style.textWrapper}>
                <div className={style.title} dangerouslySetInnerHTML={{ __html: content.title }}></div>
                <div className={style.textWrapperContent}>
                    {content.content.map((e, i) =>{
                        return(
                            <div className={style.paragraphWrapper} dangerouslySetInnerHTML={{ __html: e }} key={i}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SomePersons