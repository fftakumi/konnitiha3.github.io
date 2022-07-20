module.exports = {
  siteMetadata: {
    title: `magmagchi`,
    siteUrl: `https://www.magmagchi.com`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        remarkPlugins: [
          require('remark-math'),
        ],
        rehypePlugins: [
          require('rehype-katex'),
          // オプションを渡したい時はタプル形式で
          // [require('rehype-katex'), { strict: 'ignore' }],
        ],
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-transformer-sharp",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "mgmagchi",
        short_name: "magchi",
        start_url: "/",
        background_color: "#bcb7e6",
        theme_color: "#921d77",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ]
};