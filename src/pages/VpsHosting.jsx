import React from 'react'
import Header from '../components/header/Header'
import VpsHostingBanner from '../components/vps-hosting/VpsHostingBanner'
import VpsHostingFeature from '../components/vps-hosting/VpsHostingFeature'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import VpsHostingPerformance from '../components/vps-hosting/VpsHostingPerformance'
import VpsHostingFeatureTwo from '../components/vps-hosting/VpsHostingFeatureTwo'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function VpsHosting() {
  return (
    <div className='vps-hosting page-template'>
        <Header />
        <VpsHostingBanner />
        <VpsHostingFeature />
        <HomeFourPricing />
        <VpsHostingPerformance />
        <VpsHostingFeatureTwo />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default VpsHosting