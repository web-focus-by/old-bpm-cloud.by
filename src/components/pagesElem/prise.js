import React from "react"
import style from'./prise.module.scss'
import {Link} from 'gatsby'

const Prise = ({text, cost})=>{
    console.log(text, cost)

    return(
        <div className={style.wrapper}>
            <div> <span>{text} от </span> <span className={style.cost}>{cost} BYN</span></div>
        </div>
    )
}

export default Prise