import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04 } from './imports';
const Blog = () => {
    return (
        <div className="dravvt__blog section__padding" id="blog">
            <div className="dravvt__blog-heading">
                <h1 className="gradient__text">My Articles</h1>
                <p className="dravvt__blog-heading_p">
                    explore captivating articles on the intersection of robotics and art.</p>
            </div>
            <div className="dravvt__blog-container">

                <div className="dravvt__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" title="Harmonizing Horizons: 
A Journey through Innovation"/>
                    <Article imgUrl={blog03} date="Sep 26, 2021" title="Unveiling Possibilities: Beyond Boundaries" />
                </div>
                <div className="dravvt__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" title="Sculpting Tomorrow: 
A Visionary Quest" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" title="Echoes of Creativity: Navigating the Unknown" />
                </div>
            </div>
        </div>
    )
}

export default Blog