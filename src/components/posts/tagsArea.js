import React from "react"
import style from'./tagsArea.module.scss'
import {Link} from 'gatsby'

const TagsArea = ({tagsArr})=>{
    const tegArr = []
    console.log(tagsArr.posts)
    tagsArr.posts.nodes.map((item) => {
        item.tags.nodes.map((elem) =>{
            if(!tegArr.includes(elem.name)){
                tegArr.push(elem.name)
            }
        })
    })
    
    const TagsAreaContent = tegArr.map((tag, index)=>{
        return(
            <Link to={'/'}><div key={tag}><span>{tag}</span></div></Link>
        )
    })

    return(
        <div className={style.wrapper}>
            {TagsAreaContent}
        </div>
    )
}

export default TagsArea