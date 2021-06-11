import React, { useState } from "react"
import style from "./searchArea.module.scss"
import classnames from "classnames"
import { useStaticQuery, qraphql, Link } from "gatsby"

const SearchArea = ({ tagsArr }) => {
  const [active, setActiveSearch] = useState(false)
  const [activeSearchArea, setActiveSearchArea] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const data = useStaticQuery(graphql`
    {
      allWpCategory(filter: { name: { in: ["Статьи", "news"] } }) {
        nodes {
          name
          posts {
            nodes {
              uri
              title
              id
            }
          }
        }
      }
    }
  `)
  const searchArr = data.allWpCategory.nodes[0].posts.nodes
    .concat(data.allWpCategory.nodes[1].posts.nodes)
    .map(e => {
      if (e.title.toUpperCase().includes(searchValue.toUpperCase())) {
        const __tempTitle = e.title
          .toUpperCase()
          .split(searchValue.toUpperCase())
          .join(`<span>${searchValue.toUpperCase()}</span>`)
        return (
          <div key={e.id} className={style.searchItemWrapper}>
            <Link
              to={e.uri}
              dangerouslySetInnerHTML={{ __html: __tempTitle }}
            ></Link>
          </div>
        )
      }
    })
  return (
    <div className={style.wrapper}>
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="Search"
          className={classnames(style.input, {
            [style.active]: active == true,
          })}
          onFocus={() => setActiveSearchArea(true)}
          onBlur={() => setActiveSearchArea(false)}
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div
          className={classnames(style.btn, { [style.animate]: active == true })}
          onClick={() => setActiveSearch(!active)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#309195" />
            <path
              d="M16.9554 24.8083C19.2557 25.7488 21.97 25.2904 23.8506 23.7631L29.1376 28.9032L29.1375 28.9034L29.1453 28.9103C29.3308 29.0762 29.5697 29.0805 29.7497 29.002C29.9248 28.9257 30.0856 28.7519 30.0921 28.5154L30.0921 28.5153L30.093 28.4997L30.0931 28.4985C30.0935 28.4912 30.0943 28.479 30.0946 28.4659C30.0952 28.4353 30.0935 28.3944 30.0806 28.347C30.0554 28.2541 29.9984 28.177 29.9292 28.1039L29.9294 28.1038L29.922 28.0966L24.6589 22.9798C25.9976 21.4333 26.6019 19.2678 26.2282 17.2532C25.648 14.1253 22.7043 11.7173 19.5746 11.6875L19.5746 11.6875L19.5729 11.6875C19.515 11.6874 19.4569 11.6877 19.3987 11.6887L19.3973 11.6887C16.2129 11.7593 13.3717 14.2304 12.8238 17.2951C12.2763 20.3574 14.0935 23.6382 16.9554 24.8083ZM13.9651 17.3191C14.4997 14.7891 16.9202 12.8373 19.493 12.8125L19.6402 12.8134C22.2967 12.8729 24.6518 14.923 25.122 17.4583L25.122 17.4583C25.5964 20.0154 24.0696 22.7894 21.6784 23.7669L21.6784 23.7669C19.6104 24.6125 17.1245 24.0983 15.5575 22.5686C14.1932 21.2368 13.5712 19.1837 13.9651 17.3191Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div
          className={classnames(style.searchArea, {
            [style.searchAreaOpen]: activeSearchArea == true,
          })}
        >
          <div className={style.searchItemArea}>{searchArr}</div>
        </div>
      </div>
    </div>
  )
}

export default SearchArea
