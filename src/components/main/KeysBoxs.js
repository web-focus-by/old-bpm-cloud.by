import React from "react"
import classnames from "classnames"
import { ButtonGreen, ButtonSmall } from "../buttons"
// import useGetPosts from "../hooks"
import styles from "./KeysBoxs.module.css"
import SEO from "../seo"

const dataFaik = [
  {
    id: 1,
    title: "keys1",
  },
  {
    id: 2,
    title: "keys2",
  },
  {
    id: 3,
    title: "keys3",
  },
  {
    id: 4,
    title: "keys4",
  },
  {
    id: 5,
    title: "keys5",
  },
  {
    id: 6,
    title: "keys6",
  },
  {
    id: 7,
    title: "keys7",
  },
  {
    id: 8,
    title: "keys8",
  },
]

const KeysBoxs = () => {
  // console.log(data)
  // const data = useGetPosts()
  // const { nodes } = data.allWordpressPost

  return (
    <div className={styles.wrapperKeys}>
      {dataFaik.map((i, index) => {
        return (
          <div
            key={i.id}
            className={classnames(styles.box, {
              [styles.boxgrey]: index % 2 ? true : false,
            })}
          >
            <div className={styles.title}>{i.title}</div>
            <div
              className={classnames(styles.nameKeys, {
                [styles.nameKeysGrey]: index % 2 ? true : false,
              })}
            >
              название
            </div>
            <ButtonSmall
              grey
              className={classnames(styles.button, {
                [styles.buttonGrey]: index % 2 ? true : false,
              })}
            >
              #dfsgf
            </ButtonSmall>
          </div>
        )
      })}

      <div className={styles.boxLast}>
        <div className={styles.titleLast}>Все кейсы</div>
        <ButtonGreen className={styles.button}>смотреть все</ButtonGreen>
      </div>
    </div>
  )
}

export default KeysBoxs
