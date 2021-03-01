import React from "react"
import style from'./fourthMobileMenu.module.scss'
import {Link} from 'gatsby'

const FourtMobailMenu = ({items})=>{
    console.log(items)
    const renderItems = items.routes.map((elem, i) => {
        return(
            <div key={elem.id}><Link to={elem.path}>{elem.title}</Link></div>
        )
    })
    return(
        <div className={style.wrapper} className={style.list}>
            {renderItems}
        </div>
    )
}

export default FourtMobailMenu