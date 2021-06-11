import React from "react"
import style from'./share.module.scss'
import { Link } from 'gatsby'
import { images } from "../../images"

const ShareWithFriends = ({url})=>{
    const presetsArr = [{
        name: 'telegram',
        imgSrc: images.telegram,
        url: `https://t.me/share/url?url=${url}`,
        target: '_blank',
    },{
        name: 'whatsapp',
        imgSrc: images.whatsapp,
        url: `https://web.whatsapp.com://send?text=${url}`,
        target: '_blank',
    },{
        name: 'vk',
        imgSrc: images.vk,
        url: `https://vk.com/share.php?url=${url}`,
        target: '_blank',
    },{
        name: 'viber',
        imgSrc: images.viber,
        url: "https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=" + encodeURIComponent("viber://forward?text=" + encodeURIComponent(url)),
        target: '_blank',
    },{
        name: 'shareLink',
        imgSrc: images.shareLink,
        url: `mailto:?subject=Best site ever&body=${url}`,
        target: '_blank',
    }]
    const socialNetworksLinks = presetsArr.map(item =>{
        return(
            <div key={item.name}><a href={item.url} target={item.target}><img src={item.imgSrc}></img></a></div>
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