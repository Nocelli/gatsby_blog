import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={allMarkdownRemark.edges}/>
    </Layout>
  )
}

export default Posts
