import React from "react"
import style from'./fourthMobileMenu.module.scss'
import classnames from 'classnames'
import {Link} from 'gatsby'

const FourtMobailMenu = ({items})=>{
    console.log(items)
    if(items.routes.length>16){
        document.querySelectorAll(`.${style.list}>div`).forEach(elem =>{
            elem.style.padding = '18px 40px';
        })
    }
    const renderItems = items.routes.map((elem, i) => {
        let isSmallCountItems = true;
        if(items.routes.length>16){
            isSmallCountItems = false;
        }
        return(
            <div key={elem.id} className={classnames({[style.smallPadding] : !isSmallCountItems})}><Link to={elem.path}>{elem.title}</Link></div>
        )
    })
    return(
        <div className={style.wrapper} className={style.list}>
            {renderItems}
        </div>
    )
}

export default FourtMobailMenu