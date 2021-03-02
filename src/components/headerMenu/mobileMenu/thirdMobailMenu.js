import React, {useState} from "react"
import style from'./thirdMobailMenu.module.scss'
import FourtMobailMenu from './fourthMobailMenu'
import classnames from "classnames"
import {Link} from 'gatsby'

const ThirdMobailMenu = ({items})=>{
    const [active, setActive] = useState(0)
    const [isShowFourtItems, ShowFourtItems] = useState(false)
    console.log(items)
    const renderItems = items.routes.map((elem, i) => {
        const childLength = elem.routes.length > 0;
        const renerContent = childLength ? <div key={elem.id} onMouseDown={() => setActive(i)}>{elem.title}</div> : <div key={elem.id}><Link to={elem.path}>{elem.title}</Link></div>;
        return(
            renerContent
        )
    })
    return(
        <div className={style.wrapper}>
            <div className={style.list} onMouseDown={() => ShowFourtItems(!isShowFourtItems)}>{renderItems}</div>
            <div className={classnames(style.mobileMenuWrapper, {[style.showMobileMenu]: isShowFourtItems})}>
                <div className={style.goBackWrapper} onMouseDown={() => ShowFourtItems(!isShowFourtItems)}>
                    <div>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17969 1L2.00049 8.1792L9.17969 15.3584" stroke="#6A7380" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div className={style.goBack}>{items.routes[active].title}</div>
                </div>
                <div className={style.cardTitle}><Link to={items.routes[active].path}>{items.routes[active].title}</Link></div>
                <FourtMobailMenu items={items.routes[active]}/>
            </div>
        </div>
    )
}

export default ThirdMobailMenu