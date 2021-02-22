import React from "react"
import style from'./decsrptionContent.module.scss'
import {Link} from 'gatsby'

const DecsrptionContent = ({content})=>{
    let counter = 0;
    const DecsrptionContentItem =  content.split('\n').map((elem, i) =>{       

        let content = elem.includes('<h2>')?elem:'false';
        
        if(content !== 'false'){
            counter++
            return (
                <div key={i} className={style.listItem}>{counter + '. ' + content.replace(/<\/?[^>]+>/g,'')}</div>
            )
        }
        
    })
    const filtredDecsrptionContentArr = DecsrptionContentItem.filter(function(x) {
        return x !== undefined && x !== null; 
    })
    
    const additionalStyle = filtredDecsrptionContentArr.length !== 0 ? {
        display: 'block'
    } : {
        display: 'none'
    }

    return(
        <div className={style.wrapper} style = {additionalStyle}>
            <div className={style.content}>
                <h3>Содержание:</h3>
                {filtredDecsrptionContentArr}
            </div>
        </div>
    )
}

export default DecsrptionContent