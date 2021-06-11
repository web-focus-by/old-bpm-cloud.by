import React, { useState } from "react"
import classnames from "classnames"
import style from "./mobileMenu.module.scss"
import SecondMobileMenu from "./secondMobileMenu"
import { flatListToHierarchical } from "../../utils/utils"
import { Link, useStaticQuery, graphql } from "gatsby"

const MobileMenu = ({ parantState }) => {
  const [isShowSecondItems, ShowSecondItems] = useState(false)

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

  let menuItems = flatListToHierarchical(getMenuData.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })
  menuItems.pop()

  return (
    <div className={style.relative}>
      <div className={style.list}>
        <div
          className={style.listItem}
          onMouseDown={() => ShowSecondItems(!isShowSecondItems)}
        >
          Услуги
        </div>
        <div>Кейсы</div>
        <div>Цены</div>
        <div>О нас</div>
        <div>Интересное</div>
      </div>
      <div
        className={classnames(style.mobileMenuWrapper, {
          [style.showMobileMenu]: isShowSecondItems,
        })}
      >
        <div onMouseDown={() => ShowSecondItems(!isShowSecondItems)}>
          <div className={style.goBackWrapper}>
            <div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17969 1L2.00049 8.1792L9.17969 15.3584"
                  stroke="#6A7380"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className={style.goBack}>Услуги</div>
          </div>
        </div>
        <SecondMobileMenu items={menuItems} />
      </div>
    </div>
  )
}

export default MobileMenu
