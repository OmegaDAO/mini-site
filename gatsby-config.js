/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "OmegaDAO",
    description: "A Multi-Chain Alpha Reserve",
    author: "OmegaDAO",
    twitterUsername: "@omegadaofi",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://omegadao.finance",
    icon: "src/images/omegadao.ico",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OmegaDAO`,
        short_name: `OmegaDAO`,
        start_url: `https://omegadao.finance`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/symbol.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "5bycdsxl27ue",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "929dFA5HasJQAf49cd2Ww8ubSOm9Tek8utu5IW4uNYQ",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://omegadao.finance",
        sitemap: "https://omegadao.finance/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
  ],
}
