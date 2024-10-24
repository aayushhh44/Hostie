import React from 'react'
import Header from '../components/header/Header'
import HomeTwoBanner from '../components/home-two/HomeTwoBanner'
import HomeTwoDs from '../components/home-two/HomeTwoDs'
import HomeTwoService from '../components/home-two/HomeTwoService'
import HomeTwoPricing from '../components/home-two/HomeTwoPricing'
import HomeTwoCta from '../components/home-two/HomeTwoCta'
import HomeTwoHosting from '../components/home-two/HomeTwoHosting'
import HomeTwoTestimonials from '../components/home-two/HomeTwoTestimonials'
import HomeTwoHostingFeature from '../components/home-two/HomeTwoHostingFeature'
import HometwoBlog from '../components/home-two/HometwoBlog'
import HomeTwoFooter from '../components/footer/HomeTwoFooter'

function HomeTwo() {
    return (
        <div className='page-template template-two'>
            <Header />
            <HomeTwoBanner />
            <HomeTwoDs />
            <HomeTwoService />
            <HomeTwoPricing className="pricing__bg"/>
            <HomeTwoCta />
            <HomeTwoHosting />
            <HomeTwoTestimonials />
            <HomeTwoHostingFeature />
            <HometwoBlog />
            <HomeTwoFooter />
        </div>
    )
}

export default HomeTwo