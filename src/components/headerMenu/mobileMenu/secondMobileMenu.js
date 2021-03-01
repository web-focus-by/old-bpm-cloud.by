    import React, {useState} from "react"
import style from'./secondMobileMenu.module.scss'
import classnames from "classnames"
import {Link} from 'gatsby'
import ThirdMobailMenu from './thirdMobailMenu'

const SecondMobileMenu = ({items})=>{
    const [isShowThirdItems, ShowThirdItems] = useState(false)
    const [active, setActive] = useState(0)
    console.log(items)
    const renderItems = items.map((elem, i) => {
        return(
            <div key={elem.id} onMouseDown={() => setActive(i)}>{elem.title}</div>
        )
    })
    return(
        <div className={style.wrapper}>
            <div className={style.list} onMouseDown={() => ShowThirdItems(!isShowThirdItems)}>{renderItems}</div>
            <div className={classnames(style.mobileMenuWrapper, {[style.showMobileMenu]: isShowThirdItems})}>
                <div className={style.goBackWrapper}>
                    <div>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17969 1L2.00049 8.1792L9.17969 15.3584" stroke="#6A7380" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div onMouseDown={() => ShowThirdItems(!isShowThirdItems)} className={style.goBack}>{items[active].title}</div>
                </div>
                <div className={style.cardTitle}><Link to={items[active].path}>{items[active].title}</Link></div>
                <ThirdMobailMenu items={items[active]} />
            </div>
        </div>
    )
}

export default SecondMobileMenu