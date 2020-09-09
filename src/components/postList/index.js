import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const PostList = ({ posts }) => (
    <section className='post-list-container'>
        <ul className='post-list'>
            {posts && posts.map(item => {
                let post = item.node.frontmatter
                return (
                    <Link
                        key={item.node.id}
                        to={post.path}
                        className='post'
                    >
                        <figure>

                        </figure>
                        <article>
                            <span className='post-title'>{post.title}</span>
                            <aside className='post-text' >{post.abstract}</aside>
                            <span className='post-date'>
                                {
                                    (new Date(post.date)).toLocaleDateString()
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