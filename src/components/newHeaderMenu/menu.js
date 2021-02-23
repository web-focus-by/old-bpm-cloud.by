import React from "react"
import classnames from "classnames"
import {Link, useStaticQuery, graphql} from 'gatsby'
import {flatListToHierarchical} from "../utils/utils"
import styles from "./menu.module.scss"



const MenuHeader = ({}) =>{
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
      
      function getMenuItemsInfo(arr){
        console.log(arr.routes)
          if(arr.routes){
              getMenuItemsInfo(arr.routes)
          }else{
              console.log(arr.title)
              return false
          }
      }
      getMenuItemsInfo(menuItems)
      return(
          <div>newMenu</div>
      )

}


export default MenuHeader
