module.exports = {
  siteMetadata: {
    title: `Aural Youth`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ `Lato` ]
      }
    }
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: './src/favicon.png',
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       twitter: false,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-112975901-1',
    //     anonymize: true
    //   }
    // }
  ]
}
