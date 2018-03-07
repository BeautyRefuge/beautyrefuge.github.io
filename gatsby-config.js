module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74100632-1',
        head: false,
      },
    },
  ],
};
