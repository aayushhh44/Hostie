import React from 'react'
import HeaderThree from '../components/header/HeaderThree'
import HomeFiveBanner from '../components/home-five/HomeFiveBanner'
import HomeFivePricing from '../components/home-five/HomeFivePricing'
import HomeFiveHostingFeature from '../components/home-five/HomeFiveHostingFeature'
import HomeFiveHostingService from '../components/home-five/HomeFiveHostingService'
import HomeFiveFlashSale from '../components/home-five/HomeFiveFlashSale'
import HomeFiveHostingFeatureTwo from '../components/home-five/HomeFiveHostingFeatureTwo'
import HomeFiveTestimonials from '../components/home-five/HomeFiveTestimonials'
import HomeFiveBrand from '../components/home-five/HomeFiveBrand'
import HomeFiveFaq from '../components/home-five/HomeFiveFaq'
import HomeFiveBlog from '../components/home-five/HomeFiveBlog'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function HomeFive() {
    return (
        <>
            <HeaderThree />
            <HomeFiveBanner />
            <HomeFivePricing />
            <HomeFiveHostingFeature />
            <HomeFiveFlashSale />
            <HomeFiveHostingService />
            <HomeFiveHostingFeatureTwo />
            <HomeFiveTestimonials />
            <HomeFiveBrand />
            <HomeFiveFaq />
            <HomeFiveBlog />
            <HomeThreeFooter />
        </>
    )
}

export default HomeFive