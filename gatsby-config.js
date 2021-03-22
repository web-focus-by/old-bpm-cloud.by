module.exports = {
  siteMetadata: {
    title: `Digital-агентство "BPM-Cloud": разработка и продвижение сайтов`,
    description: `Digital-агентство полного цикла предлагает разработку, дизайн, сопровождение и продвижение сайтов 🏆 Поднимем сайт в ТОП выдачи ☎ +375 (33) 32-44-000 `,
    author: `@bpm-cloud.by`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        url:`https://wp-server.bpm-cloud.by/graphql`, //  https://um2020.by/graphql https://wp-server.bpm-cloud.by/graphql
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
  ],
}
