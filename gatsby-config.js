

module.exports = {
  siteMetadata: {
    title: 'Sunshine Pines',
    author: 'Eric Naiman'
  }, 
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }, 

    //  {
    //    resolve: 'gatsby-source-filesystem',
    //    options: {
    //      name: 'src',
    //      path: `${__dirname}/src/`
    //    }
    //  },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    }
     
  
  ]
}
