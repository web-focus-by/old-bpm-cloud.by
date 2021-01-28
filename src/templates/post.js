import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

class Post extends Component {
  render() {
    const post = this.props.data.wpPost

    return (
      <Layout>
        <h1
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />
        {<div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post


export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`



// const PostTemplate = props => {
//   console.log(props, "post")
//   return (
//     <div>
//       <h1
//         dangerouslySetInnerHTML={{
//           __html: props.data.wordpressPost.title,
//         }}
//       />
//       {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
//     </div>
//   )
// }
