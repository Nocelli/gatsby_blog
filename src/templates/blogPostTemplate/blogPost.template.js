import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from 'gatsby'

import './styles.css'

const blogPostTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <article className='entry'>
                <section className='entry-header'>
                    <span className='entry-title'>{frontmatter.title}</span>
                    <div className='entry-info'>
                        <span className='entry-author'>Autor: {frontmatter.author}</span>
                        <span className='entry-date'>Data: {(new Date(frontmatter.date)).toLocaleDateString()}</span>
                    </div>
                </section>
                <div
                    className='entry-body'
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </article>
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