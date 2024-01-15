import React, { useState } from "react"
import { graphql } from 'gatsby'
import style from "./subSubsectionItems.module.scss"
import { Link, useStaticQuery } from "gatsby"
import { flatListToHierarchical } from "../utils/utils"
import classnames from "classnames"

const SubSubsectionItems = ({ uri }) => {
  const [subMenuIsShow, showSubMenu] = useState(false)
  const [listIndex, setListIndex] = useState("")

  const workArray = []

  const getMenuData = useStaticQuery(graphql`
    {
      allWpMenuItem(sort: { fields: order, order: ASC }) {
        nodes {
          id
          title: label
          path
          target
          parent: parentId
        }
      }
    }
  `)
  let tree = flatListToHierarchical(getMenuData.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

  tree.forEach(e => {
    if (e.path == uri) {
      workArray.push(e)
    } else {
      if (getMenuItems(e)) {
        workArray.push(e)
      }
    }
  })

  function getMenuItems(arr) {
    if (arr.path == uri) {
      return true
    } else {
      return arr.routes.some(e => {
        return getMenuItems(e)
      })
    }
  }

  const clickHandler = index => {
    setListIndex(index)

    showSubMenu(status => !status)
  }
  if (workArray[0] == undefined) {
    workArray.push(tree[0])
  }
  return (
    <div className={style.wrapper}>
      {workArray[0].routes.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classnames(style.item, {
              [style.active]: subMenuIsShow && index == listIndex,
              [style.menuIsOpen]: subMenuIsShow,
            })}
          >
            <Link to={item.path}>{item.title}</Link>
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.arrow}
              onClick={() => clickHandler(index)}
            >
              <path
                d="M29 28L1 28L1 -2.06041e-06"
                stroke="#FA5C45"
                strokeWidth="2"
              />
              <path
                d="M1.13379 28L27.8139 1.31992"
                stroke="#FA5C45"
                strokeWidth="2"
              />
            </svg>
            {subMenuIsShow && listIndex == index && (
              <div className={style.listWrapper}>
                {item.routes.map(subItems => {
                  return (
                    <div key={subItems.id} className={style.listItem}>
                      <Link to={subItems.path}>{subItems.title}</Link>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default SubSubsectionItems
