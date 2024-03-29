/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            status
            uri
            template {
              templateName
            }
          }
        }
      }
      allWpPost {
        edges {
          node {
            id
            status
            uri
            template {
              templateName
            }
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            description
            uri
          }
        }
      }
      allWpTag {
        edges {
          node {
            id
            name
            description
            uri
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWpPage, allWpPost, allWpCategory, allWpTag } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page-template/page.js`)
  const developPage = path.resolve(
    `./src/templates/categoryPage/developPage/developPage.js`
  )
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWpPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    let template
    switch (edge.node.id) {
      // case "cG9zdDoxNjA=":
      //   template = developPage
      //   break
      default:
        template = pageTemplate
    }
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.uri,
      component: slash(template),
      context: {
        id: edge.node.id,
      },
    })
  })

  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'

  const postTemplate = path.resolve(`./src/templates/post-template/post.js`)

  allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const categoryTemplate = path.resolve(
    `./src/templates/post-category-template/category.js`
  )

  allWpCategory.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  const tagTemplate = path.resolve(
    `./src/templates/post-category-template/tagTemplate.js`
  )
  allWpTag.edges.forEach(edge => {
    createPage({
      path: edge.node.uri,
      component: slash(tagTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
