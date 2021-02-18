import React from "react"
import style from'./share.module.scss'
import {Link} from 'gatsby'
import { images } from "../../images"

const ShareWithFriends = ({})=>{
    const presetsArr = [{
        name: 'telegram',
        imgSrc: images.telegram,
        url: '/',
    },{
        name: 'whatsapp',
        imgSrc: images.whatsapp,
        url: '/',
    },{
        name: 'vk',
        imgSrc: images.vk,
        url: '/',
    },{
        name: 'viber',
        imgSrc: images.viber,
        url: '/',
    },{
        name: 'shareLink',
        imgSrc: images.shareLink,
        url: '/',
    }]
    const socialNetworksLinks = presetsArr.map(item =>{
        return(
            <div><Link to={item.url}><img src={item.imgSrc}></img></Link></div>
        )
    })
    return(
        <div className={style.wrapper}>
           <div className={style.title}>Рассказать друзьям</div>
           <div className={style.iconsArea}>{socialNetworksLinks}</div>
        </div>
    )
}

export default ShareWithFriends