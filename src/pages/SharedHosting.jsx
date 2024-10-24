import React from 'react'
import Header from '../components/header/Header'
import SharedHostingBanner from '../components/shared-hosting/SharedHostingBanner'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import HomeElevenWhyChoose from '../components/home-eleven/HomeElevenWhyChoose'
import SharedHostingAdvanceFeature from '../components/shared-hosting/SharedHostingAdvanceFeature'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeBrand from '../components/home-one/HomeBrand'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function SharedHosting() {
  return (
    <div className='shared-page page-template'>
        <Header />
        <SharedHostingBanner />
        <HomeFourPricing />
        <HomeElevenWhyChoose className="bg-white" />
        <SharedHostingAdvanceFeature />
        <AboutTestimonials className="bg-white"/>
        <PricingFaq />
        <HomeBrand className="shared-page-bg pb-120" />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default SharedHosting