import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                abstract
                date
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home"/>
      <PostList posts={allMarkdownRemark.edges}/>
    </Layout>
  )
}

export default IndexPage
