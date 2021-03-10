import React, {useState} from "react"
import style from'./scrolMenuHeder.module.scss'
import { images } from "../../images"
import ScrollContainer from 'react-indiana-drag-scroll'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Link} from 'gatsby'
import { doc } from "prettier"

const menuItems = [
    { name: "SMM", url:'/smm/' },
    { name: "Разработка сайтов", url:'/razrabotka-sajtov/'  },
    { name: "Seo", url:'/seo/' },
    { name: "Главная", url:'/' },
    { name: "PPC", url:'/ppc/' },
    { name: "Брендинг и дизайн", url:'/brending-i-dizajn/' },
    { name: "Разработка приложений", url:'/razrabotka-prilozhenij/' },
    { name: "SMM", url:'/smm/' },
    { name: "Разработка сайтов", url:'/razrabotka-sajtov/'  },
    { name: "Seo", url:'/seo/' },
    { name: "Главная", url:'/' },
    { name: "PPC", url:'/ppc/' },
    { name: "Брендинг и дизайн", url:'/brending-i-dizajn/' },
  ]


const ScrolMenuHeder = ()=>{
    const [arr, setArr] = useState(menuItems)
    const [isClick, setClick] = useState(false)
    const items = arr.map((elem, index) =>{
        return(
            <div key={index} className={style.listItem}><Link to={elem.url}><img src={images.circleMenu} alt="" /><span>{elem.name}</span></Link></div>
        )
    })

    let _temp = false;
    let some = 0;
    function setStyleInItems (args){
        document.querySelector(`.${style.scrollContainer}`).style.scrollSnapType = 'y mandatory';
            document.querySelectorAll(`.${style.listItem}`).forEach(elem =>{
                elem.classList.remove(`${style.active}`)
                elem.style.scrollSnapAlign = 'center'
            })
            let height = document.querySelector(`.${style.listItem}`).clientHeight    
            document.querySelectorAll(`.${style.listItem}`)[Math.round(args[1]/height)+3].classList.add(`${style.active}`)
            some++
/*             console.log(some) */
            if(args[3] - args[1] < 600){
                getMoreData()
            }
    }

    function removeStyleInItems (){
            document.querySelector(`.${style.scrollContainer}`).style.scrollSnapType = '';
            document.querySelectorAll(`.${style.listItem}`).forEach(elem =>{
                elem.style.scrollSnapAlign = ''
            })
            some--
/*             console.log(some) */

    }
    function getMoreData(){
        setArr(arr.concat(menuItems))
    }
    return(
        <div className={style.wrapper}>
            <div className={style.arrow}>
                <img src={images.Vector} alt="" />
            </div>
            <ScrollContainer className={style.scrollContainer} hideScrollbars={false} onClick={() => setClick(true)} onEndScroll={(...args) => {setStyleInItems(args)}} onStartScroll={(...args) => {removeStyleInItems()}}>
                   {items}
            </ScrollContainer>
        </div>
    )
}

export default ScrolMenuHeder