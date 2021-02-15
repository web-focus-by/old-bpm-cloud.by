import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "news"}}}}}, sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        author {
          node {
            name
          }
        }
        date
        featuredImage {
          node {
            uri
          }
        }
        slug
        excerpt
        uri
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
  `)
  return <pre>{JSON.stringify(data.allWpPost.nodes, null, 4)}</pre>
}

export default ComponentName
