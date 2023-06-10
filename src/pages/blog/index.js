import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogCard from '../../components/blog-card'

import 'katex/dist/katex.min.css'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <BlogCard slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date}/>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date
          title
        }
        fields {
          slug
        }
        id
      }
    }
  }  
`

export default BlogPage