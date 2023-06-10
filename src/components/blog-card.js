import * as React from 'react'
import {Link} from "gatsby";
import {blogCardWrapper} from './blog-card.module.css'

const BlogCard = ({slug, title, date}) => {
    return (
        <div className={blogCardWrapper}>
            <h2>
                <Link to={`/blog${slug}`}>
                    {title}
                </Link>
            </h2>
            <p>Posted: {date}</p>
        </div>
    )
}

export default BlogCard