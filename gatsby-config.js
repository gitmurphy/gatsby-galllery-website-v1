module.exports = {
  siteMetadata: {
    title: `Maeve O'Byrne`,
    description: `A website for fine arts painter Maeve O'Byrne to showcase her artworks and to 
    gain business enquiries.`,
    author: `Peter Murphy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maeve O'Byrne`,
        short_name: `MOB Art`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/images/paint-brush.png`, // Favicon
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}