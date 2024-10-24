import React from 'react'
import Header from '../components/header/Header'
import BlogBanner from '../components/blog-details/BlogBanner'
import BlogDetailsMain from '../components/blog-details/BlogDetailsMain'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function BlogDetails() {
    return (
        <div className='page-template template-resell'>
            <Header />
            <BlogBanner />
            <BlogDetailsMain/>
            <HomeThreeFooter />
        </div>
    )
}

export default BlogDetails