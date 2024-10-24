import React from 'react'
import Header from '../components/header/Header'
import PricingBanner from '../components/pricing/PricingBanner'
import PricingPlan from '../components/pricing/PricingPlan'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Pricing() {
  return (
    <div className='page-template template-pricing'>
        <Header />
        <PricingBanner />
        <PricingPlan />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Pricing