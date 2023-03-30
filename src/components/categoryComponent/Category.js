import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import styles from "./Category.module.scss"
import classNames from "classnames"
import _ from "lodash"

import { Link } from "gatsby"

const Category = ({ posts }) => {
  console.log(posts.nodes)
  const isDesktopOrMobile = useMediaQuery({
    query: "(min-width: 550px)",
  })

  const [isAllPostsVisible, setAllPostsVisible] = useState(false)
  return (
    <div className={styles.categoryWrapper}>
      {posts.nodes.map((post, i) => {
        const expect = _.concat(
          post.excerpt.split("p>")[1].split(" ").slice(0, 15),
          post.excerpt.split("p>")[1].split(" ").slice(-2)[0]
        ).join(" ")
        if (i % 5 == 0 && isDesktopOrMobile) {
          return (
            <div
              key={post.id}
              style={{
                background: `url(${post.featuredImage?.node?.sourceUrl})`,
              }}
              className={classNames(
                styles.postWrapper,
                styles.firstAndFifthPost,
                { [styles.isShowAllPosts]: isAllPostsVisible }
              )}
            >
              <div className={styles.tagWrapper}>
                {post.tags.nodes.map((tag, i) => {
                  return (
                    <Link to={tag.uri} key={i} className={styles.tag}>
                      {tag.name}
                    </Link>
                  )
                })}
              </div>
              <div className={styles.firstAndFifthPostTextWrapper}>
                <Link to={post.uri}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                    className={styles.postTitle}
                  />
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: expect,
                  }}
                  className={styles.postExpect}
                />
              </div>
            </div>
          )
        } else {
          return (
            <div
              key={post.id}
              className={classNames(styles.postWrapper, styles.otherPosts, {
                [styles.isShowAllPosts]: isAllPostsVisible,
              })}
            >
              <div
                className={styles.imageWrapper}
                style={{
                  background: `url(${post.featuredImage?.node?.sourceUrl})`,
                }}
              >
                <div className={styles.tagWrapper}>
                  {post.tags.nodes.map((tag, i) => {
                    return (
                      <Link to={tag.uri} key={i} className={styles.tag}>
                        {tag.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className={styles.textWrapper}>
                <Link to={post.uri}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                    className={styles.postTitle}
                  />
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: expect,
                  }}
                  className={styles.postExpect}
                />
                <div className={styles.authorWrapper}>
                  <span>
                    Автор:{" "}
                    <Link to={post.author.node.uri}>
                      {post.author.node.lastName} {post.author.node.firstName}
                    </Link>
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          )
        }
      })}
      {!isAllPostsVisible && (
        <div className={styles.readMoreWrapper}>
          <div
            onClick={() => setAllPostsVisible(true)}
            className={styles.readMore}
          >
            <span>читать больше</span>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.998047 10.1426L10.5703 19.7148L20.1426 10.1426"
                stroke="#FFCC00"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default Category
