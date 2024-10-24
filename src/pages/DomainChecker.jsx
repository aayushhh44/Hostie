import React from 'react'
import Header from '../components/header/Header'
import DomainCheckerBanner from '../components/domain-checker/DomainCheckerBanner'
import HomeElevenDomainPricing from '../components/home-eleven/HomeElevenDomainPricing'
import DomainCheckerPricing from '../components/domain-checker/DomainCheckerPricing'
import HomeElevenWhyChoose from '../components/home-eleven/HomeElevenWhyChoose'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function DomainChecker() {
  return (
    <div className='page-template template-resell'>
        <Header />
        <DomainCheckerBanner />
        <HomeElevenDomainPricing />
        <DomainCheckerPricing />
        <HomeElevenWhyChoose />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DomainChecker