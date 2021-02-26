import React, {useState} from "react"
import classnames from "classnames"
import {Link, useStaticQuery, graphql} from 'gatsby'
import {flatListToHierarchical} from "../utils/utils"
import styles from "./menu.module.scss"
import SecondMenu from './secondMenu'
import { images } from '../../images'
import { element } from "prop-types"


const MenuHeader = () =>{

  const [isShow, setShowItems] = useState(true)
  const [active, setActive] = useState(0)
  
    const setShowActiveItems = (state, index)=>{
      const element = document.querySelectorAll(`.${styles.itemWrap}`)[index]
      const indicator = document.querySelector(`.${styles.indicator}`)

      indicator.style.left = `${element.offsetLeft}px`
      indicator.style.width = `${element.offsetWidth}px`
      
      setShowItems(state)
      setActive(index)
    }
    
    const getMenuData = useStaticQuery(graphql`{
        allWpMenuItem(
          sort: { fields: order, order: ASC }
    
        ) {
          nodes {
            id
            title: label
            path
            target
            parent: parentId
          }
        }
      }`)
    
    let menuItems = flatListToHierarchical(getMenuData.allWpMenuItem.nodes, {
        idKey: "id",
        childrenKey: "routes",
        parentKey: "parent",
      })
      menuItems.pop()


    const upperItems = menuItems.map((elem, index) => {
      return(
        <div className={classnames(styles.itemWrap, { [styles.active]: active === index })} onMouseOver={() => setShowActiveItems(true, index)} key={elem.id}>
          <div><Link to={elem.path}>{elem.title}</Link></div>
        </div>
      )
    })
      
      return(
        <div className={styles.wrapper}>
          <div className={styles.labelWrapper}>
          <div className={styles.indicator}></div>
            {upperItems}
          </div>
          <div>
            <SecondMenu itemIndex={active} contetnArr={menuItems} isShow={isShow}/>
          </div>
        </div>
      )

}


export default MenuHeader
