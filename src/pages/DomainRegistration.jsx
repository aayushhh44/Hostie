import React from 'react'
import Header from '../components/header/Header'
import DomainRegistrationBanner from '../components/domain-registration/DomainRegistrationBanner'
import HomeTwoHostingFeature from '../components/home-two/HomeTwoHostingFeature'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function DomainRegistration() {
  return (
    <div className='page-template template-resell'>
        <Header />
        <DomainRegistrationBanner />
        <HomeTwoHostingFeature />
        <HomeFourSupport className="black__friday--support"  />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DomainRegistration