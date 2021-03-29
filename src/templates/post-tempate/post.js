import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import Breadcrumbs from "../../components/posts/breadcrumbs"
import ReadSpeed from "../../components/posts/readSpeed"
import Tags from "../../components/posts/tags"
import Aside from "../../components/posts/aside"
import AuthorArea from "../../components/posts/authorArea"
import ShareWithFriends from "../../components/posts/share"
import AddCommentArea from "../../components/posts/addCommentArea"
import ShowCommentArea from "../../components/posts/showCommentArea"
import OtherPostsArea from "../../components/posts/otherPostsArea"
import DescriptionContent from "../../components/posts/decsrptionContent"
import SEO from "../../components/seo"
import style from'./post.module.scss'
import { images } from "../../images"
import Content from "../../components/posts/content"

class Post extends Component {
  render() {
    const post = this.props.data.wpPost
    const backgroundImageUrl = `url(${post.featuredImage.node.sourceUrl})`;
    //description, lang, meta, title

    console.log(post)
    return (
      <Layout>
        <SEO title={post.title} description={post.seo.opengraphDescription} />
        <div className={style.wrapper}>
            <Breadcrumbs breadcrumbsArr={post.seo.breadcrumbs} />
            <h1
              dangerouslySetInnerHTML={{
                __html: post.title,
              }}
            />
            <div className={style.contentArea}>
              <div className={style.post}>
              <div className={style.postInfo}>
                <ReadSpeed content={post.content}/>
                <div className={style.dateInfo}>
                  <div>Дата публикации:</div>
                  <div>{post.date}</div>
                </div>
              </div>
              <div className={style.postImage} style={{backgroundImage:backgroundImageUrl}}>
                <Tags tagsArr={post.tags.nodes}/>
              </div>
              <DescriptionContent content={post.content} />
              <Content content={post.content}/>
              </div> 
              <Aside />  
            </div>
            <div className={style.authorArea}>
              <AuthorArea authorInfo={post.author.node} />
              <ShareWithFriends url={post.link}/>
          </div>
          <div className={style.subscribeArea}>
              <h2>Понравилась статья?</h2>
              <span>ПОДПИШИСЬ НА НАШИ НОВОСТИ</span>
              <div className={style.iconArea}>
                <a href={'https://vk.com/bpm_cloud'} target='_blank'><img src={images.vkSubscr}></img></a>
                <a href={'https://www.instagram.com/bpm_claud_minsk/'} target='_blank'><img src={images.instagramSubscr}></img></a>
                <a href={'https://telegram.me/375293244000'} target='_blank'><img src={images.telegramSubscr}></img></a>
              </div>
          </div>
          <div className={style.commentArea}>
            <AddCommentArea />
            <ShowCommentArea comentArr={post.comments}/>
          </div>
          <div className={style.otherPostsArea}>
            <OtherPostsArea />
          </div>
          </div>
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
      link
      date(formatString: "L", locale: "ru")
      featuredImage {
        node {
          sourceUrl
        }
      }
      tags {
        nodes {
          name
          uri
          id
        }
      }
      seo {
        breadcrumbs {
          text
          url
        }
        title
        opengraphDescription
      }
      comments {
        nodes {
          id
          content
          date(formatString: "L", locale: "ru")
        }
      }
      author {
        node {
          avatar {
            url
          }
          name
          uri
          firstName
          lastName
        }
      }
    }
  }
`



// const PostTemplate = props => {
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
