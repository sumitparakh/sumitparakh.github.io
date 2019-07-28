module.exports = {
  siteMetadata: {
    title: `Sumit Parakh`,
    description: `A blog to share knowledge and learn about JavaScript and its different frameworks, specially Angular.`,
    author: `Sumit Parakh`,
    siteUrl: 'https://sumitparakh.dev',
    titleTemplate: "%s - Sumit Parakh",
    url: "https://sumitparakh.dev",
    image: "/images/gatsby-astronaut.png",
    twitterUsername: "@sumitparak"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Sumit Parakh`,
        short_name: `S Parakh`,
        lang: `en`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: "pages"
      }
    },
    'gatsby-plugin-material-ui'
  ],
}
