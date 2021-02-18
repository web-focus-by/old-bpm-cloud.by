import React from "react"
import style from'./tagsArea.module.scss'
import {Link} from 'gatsby'

const TagsArea = ({tagsArr})=>{
    const tegArr = []
    const infoTegArr = []
    console.log(tagsArr.posts)
    tagsArr.posts.nodes.map((item) => {
        item.tags.nodes.map((elem) =>{
            if(!tegArr.includes(elem.name)){
                tegArr.push(elem.name)
                infoTegArr.push(elem)
            }
        })
    })
    console.log(infoTegArr)
    
    const TagsAreaContent = infoTegArr.slice(0, 5).map((tag, index)=>{
        return(
            <Link to={tag.uri}><div key={tag.id}><span>{tag.name}</span></div></Link>
        )
    })

    return(
        <div className={style.wrapper}>
            {TagsAreaContent}
        </div>
    )
}

export default TagsArea