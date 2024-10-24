import React from 'react'
import Header from '../components/header/Header'
import DedicatedHostingBanner from '../components/dedicated-hosting/DedicatedHostingBanner'
import DedicatedHostingFeature from '../components/dedicated-hosting/DedicatedHostingFeature'
import DedicatedHostingPricing from '../components/dedicated-hosting/DedicatedHostingPricing'
import DedicatedHostingFeatureTwo from '../components/dedicated-hosting/DedicatedHostingFeatureTwo'
import DedicatedHostingFeatureThree from '../components/dedicated-hosting/DedicatedHostingFeatureThree'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function DedicatedHosting() {
  return (
    <div className='page-template template-dedicated'>
        <Header />
        <DedicatedHostingBanner />
        <DedicatedHostingFeature />
        <DedicatedHostingPricing />
        <DedicatedHostingFeatureTwo />
        <DedicatedHostingFeatureThree />
        <AboutTestimonials className="dedicated-feedback-bg"/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DedicatedHosting