import React from "react"
import style from'./breadcrumbs.module.scss'
import {Link} from 'gatsby'


const Breadcrumbs =({breadcrumbsArr})=>{
    const domain = breadcrumbsArr[0].url
    const breadcrumbsItems = breadcrumbsArr.map((item, index) => {
        const link = item.url.replace( domain, '/');
        return(
            <span key={index} className={style.listItem}><Link to={`${link}`}>{item.text}{index == breadcrumbsArr.length - 1 ?'':' / '}</Link></span>
        )
    })

    return(
        <div className={style.wrapper}>
            <div className={style.list}>{breadcrumbsItems}</div>
        </div>
    )
}

export default Breadcrumbs