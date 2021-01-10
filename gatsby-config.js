/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "David Kendall | Portfolio",
    url: "https://www.davidskendall.co.uk",
    siteUrl: "https://www.davidskendall.co.uk",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Kendall Portfolio`,
        short_name: `DK Portfolio`,
        start_url: `/`,
        background_color: `#B7B4A1`,
        theme_color: `#B7B4A1`,
        display: `standalone`,
        icon: `static/icons/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index.html`],
      },
    },
    // 'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['PT Serif', 'Poppins']
        }
      }
    }
  ]
}
