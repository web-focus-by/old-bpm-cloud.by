import React from "react"
import style from'./content.module.scss'
import {Link} from 'gatsby'

const Content = ({content})=>{
    console.log(content)
    if(content == null){
        return(
            <div>
                <h2>К сожалению тут пока что пусто(</h2>
            </div>
        )
    }
    let contentCounter = 0;
    const answer = []

    content.split('\n').map((item,i)=>{
        if(item.includes('h1')){
            
        }else if(item.includes('h2')){
            contentCounter++
            answer.push(item.replace('<h2>', `<h2 id='${contentCounter}'>`))
        } else{
            answer.push(item)
        }
    })

    return(
        <div>
           <div dangerouslySetInnerHTML={{ __html: answer.join('') }} />
        </div>
    )
}

export default Content