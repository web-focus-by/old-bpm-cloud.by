import React from "react"
import style from'./showCommentArea.module.scss'
import {Link} from 'gatsby'

const ShowCommentArea = ({commentArr})=>{

const CommentsAreaContent = commentArr.nodes.length !== 0 ? commentArr.nodes.slice(0, 3).map((elem) => {
    return(
        <div key={elem.id} className={style.commentWrapper}>
            {/* <div>
                <img src={elem.author.node.avatar.url}></img>
            </div>
            <div className={style.contentArea}>
                <div className={style.authorName}>{elem.author.node.name}</div>
                <div className={style.commentText} dangerouslySetInnerHTML={{ __html: elem.content }}></div>
                <div className={style.commentDate}>{elem.date}</div>
            </div> */}
        </div>
    )

}):'Комментариев пока нет';
    return(
        <div className={style.wrapper}>
            <h3>Комментарии</h3>
            <div className={style.list}>Комментариев пока нет</div>
        </div>
    )
}






export default ShowCommentArea