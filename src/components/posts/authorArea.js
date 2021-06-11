import React from "react"
import style from'./authorArea.module.scss'
import {Link} from 'gatsby'


const AuthorArea =({authorInfo})=>{
    return(
        <div className={style.wrapper}>
            <div className={style.title}>Автор Статьи</div>
            <Link to={authorInfo.uri}>
            <div className={style.infoWrapper}>
                    <div className={style.avatar}><img src={authorInfo.avatar.url}></img></div>
                    <div className={style.authorInfo}>
                        <div className={style.name}>{authorInfo.lastName} {authorInfo.firstName}</div>
                        <div className={style.role}>{authorInfo.name}</div>
                    </div>
            </div>
            </Link>
        </div>
    )
}

export default AuthorArea