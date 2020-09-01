import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
    <ul>
        {posts && posts.map((item, index) => {
            let post = item.node.frontmatter
            return (
                <li>
                    <Link to={post.path}>{post.title}</Link>
                </li>
            )
        })}
    </ul>
)

export default PostList