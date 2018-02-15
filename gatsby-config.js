module.exports = {
  siteMetadata: {
    title: `Aural Youth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [ `Lato` ]
     }
   }
  //   {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: "UA-112975901-1",
  //     anonymize: true,
  //   },
  // }
  ]
}
