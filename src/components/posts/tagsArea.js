import React from "react"
import style from'./tagsArea.module.scss'
import {Link} from 'gatsby'

const TagsArea = ({tagsArr})=>{
    const tegArr = []
    const infoTegArr = []
    const allPosts ={
        id: "12345qwe",
        name: "все статьи",
        uri: "/",
    }

    tagsArr.posts.nodes.map((item) => {
        item.tags.nodes.map((elem) =>{
            if(!tegArr.includes(elem.name)){
                tegArr.push(elem.name)
                infoTegArr.push(elem)
            }
        })
    })
    const __tempArr = infoTegArr.slice(0, 4)
    __tempArr.push(allPosts)
    const TagsAreaContent = __tempArr.map((tag)=>{
        return(
            <Link to={tag.uri}  key={tag.id}><div><span>{tag.name}</span></div></Link>
        )
    })

    return(
        <div className={style.wrapper}>
            {TagsAreaContent}
        </div>
    )
}

export default TagsArea