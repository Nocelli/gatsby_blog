import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const PostList = ({ posts }) => (
    <section className='post-list-container'>
        <ul className='post-list'>
            {posts && posts.map(post => {
                return (
                    <Link
                        key={post.node.id}
                        to={post.node.frontmatter.path}
                        className='post'
                    >
                        <figure>

                        </figure>
                        <article>
                            <span className='post-title'>{post.node.frontmatter.title}</span>
                            <aside className='post-text' >{post.node.frontmatter.abstract}</aside>
                            <span className='post-date'>
                                {
                                    (new Date(post.node.frontmatter.date)).toLocaleDateString()
                                }
                            </span>
                        </article>
                    </Link>
                )
            })}
        </ul>
    </section>
)

export default PostList