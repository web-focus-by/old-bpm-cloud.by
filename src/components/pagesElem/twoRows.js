import React from "react"
import style from'./twoRows.module.scss'
import {Link} from 'gatsby'

const TwoRows = ({content})=>{
    console.log(content)
    return(
        <div className={style.wrapper}>
            TwoRows
        </div>
    )
}

export default TwoRows