import React from 'react'
import HeaderThree from '../components/header/HeaderThree'
import HomeFourBanner from '../components/home-four/HomeFourBanner'
import HomeFourDomainChecker from '../components/home-four/HomeFourDomainChecker'
import HomeFourHostingFeatures from '../components/home-four/HomeFourHostingFeatures'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import HomeFourService from '../components/home-four/HomeFourService'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import HomeFourBlog from '../components/home-four/HomeFourBlog'
import HomeFourNewsletter from '../components/home-four/HomeFourNewsletter'
import HomeFourFooter from '../components/footer/HomeFourFooter'

function HomeFour() {
    return (
        <div>
            <HeaderThree />
            <HomeFourBanner />
            <HomeFourDomainChecker />
            <HomeFourHostingFeatures />
            <HomeFourPricing />
            <HomeFourService />
            <HomeFourSupport />
            <HomeFourBlog />
            <HomeFourNewsletter />
            <HomeFourFooter />
        </div>
    )
}

export default HomeFour