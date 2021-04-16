module.exports = {
  siteMetadata: {
    title: `Digital-агентство "BPM-Cloud": разработка и продвижение сайтов`,
    description: `Digital-агентство полного цикла предлагает разработку, дизайн, сопровождение и продвижение сайтов 🏆 Поднимем сайт в ТОП выдачи`,
    siteUrl: `https://bpm-cloud.by/`,
    author: `@bpm-cloud.by`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bpm-cloud.by`,
        short_name: `bpm-cloud.by`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options:{
        url:`https://wp-server-bpm-cloud.webfocus.by/graphql`, //  https://um2020.by/graphql https://wp-server-bpm-cloud.webfocus.by/graphql
        },
        schema: {
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        }
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NTFQWLW",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // // datalayer to be set before GTM is loaded
        // // should be an object or a function that is executed in the browser
        // //
        // // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
  
        // // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // // Name of the event that is triggered
        // // on every Gatsby route change.
        // //
        // // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },

  ],
}
