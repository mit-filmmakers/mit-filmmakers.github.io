import type { GatsbyConfig } from "gatsby";
import { config as envconfig } from "dotenv";

envconfig({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MIT Filmmakers`,
    siteUrl: `https://mit-filmmakers.github.io`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-notion',
      options: {
        previewCallRate: 0,
        databases: [
          '25d74178e32a42e59198051cd6d95e27', // people
          'e9abca687aea43759021ba2fc60449e1', // gallery
          'b03a582acc3c42be8f84b6b12a99b796', // events
        ],
        pages: [
          '55a47082d41f4dc38ee35d36b99b7208', // philosophy
          'd40fb23e308147eba9218081d63e196f', // join
          '204b87a798bc438cbb6547a7ae24ede5', // hackathon
        ],
      },
    },
    `gatsby-plugin-mdx`
  ]
};

export default config;
