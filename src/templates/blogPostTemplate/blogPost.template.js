import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from 'gatsby'

const blogPostTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.title} />

            <h1>{frontmatter.title}</h1>
            <div>Autor: {frontmatter.author}</div>
            <div>Data: {frontmatter.date}</div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export default blogPostTemplate


export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter : { path : { eq: $path }}) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`