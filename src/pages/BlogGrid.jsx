import React from 'react'
import Header from '../components/header/Header'
import BlogBanner from '../components/blog-details/BlogBanner'
import PostGrid from '../components/blog/PostGrid'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function BlogGrid() {
  return (
    <div>
        <Header />
        <BlogBanner />
        <PostGrid />
        <HomeThreeFooter />
    </div>
  )
}

export default BlogGrid