/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Ryan Schock | Web Developer`,
    description: `My name is Ryan Schock. I'm a full stack web developer based out of Ottawa, Ontario.`,
    twitterUsername: `@dev_RyanJMS`,
    siteUrl: `https://www.ryanschock.ca`,
  },
}