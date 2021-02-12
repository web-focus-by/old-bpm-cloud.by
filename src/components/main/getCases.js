import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "cases"}}}}}, sort: {order: DESC, fields: date}, limit: 8) {
      nodes {
        id
        uri
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            link
            sourceUrl
            id
            uri
          }
        }
        title
        categories {
          nodes {
            id
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
