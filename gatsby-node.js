exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      date: Date
      slug: String!
      hero_image: String
      hero_image_alt: String
      hero_image_credit_link: String
      hero_image_credit_text: String
    }
  `
  createTypes(typeDefs)
}