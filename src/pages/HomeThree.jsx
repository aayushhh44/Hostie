import React from 'react'
import HeaderTwo from '../components/header/HeaderTwo'
import HomeThreeBanner from '../components/home-three/HomeThreeBanner'
import HomeThreeBrand from '../components/home-three/HomeThreeBrand'
import HomeThreeService from '../components/home-three/HomeThreeService'
import HomeThreePricing from '../components/home-three/HomeThreePricing'
import HomeThreeService2 from '../components/home-three/HomeThreeService2'
import HomeThreeFeatures from '../components/home-three/HomeThreeFeatures'
import HomeThreeHostingFeatures from '../components/home-three/HomeThreeHostingFeatures'
import HomeThreeTestimonials from '../components/home-three/HomeThreeTestimonials'
import HomeThreeBlog from '../components/home-three/HomeThreeBlog'
import HomeThreeCta from '../components/home-three/HomeThreeCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function HomeThree() {
  return (
    <div className='home-three'>
        <HeaderTwo />
        <HomeThreeBanner />
        <HomeThreeBrand />
        <HomeThreeService />
        <HomeThreePricing />
        <HomeThreeService2 />
        <HomeThreeFeatures />
        <HomeThreeHostingFeatures />
        <HomeThreeTestimonials />
        <HomeThreeBlog />
        <HomeThreeCta />
        <HomeThreeFooter />
    </div>
  )
}

export default HomeThree