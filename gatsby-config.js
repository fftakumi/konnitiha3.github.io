module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
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
    "gatsby-transformer-sharp"
  ]
};