import React from 'react'
import Header from '../components/header/Header'
import AffiliateBanner from '../components/affiliate/AffiliateBanner'
import AffiliatePricing from '../components/affiliate/AffiliatePricing'
import AffiliateEarn from '../components/affiliate/AffiliateEarn'
import AffiliateFeature from '../components/affiliate/AffiliateFeature'
import AffiliateFeatureTwo from '../components/affiliate/AffiliateFeatureTwo'
import AffiliatePromote from '../components/affiliate/AffiliatePromote'
import AffiliateTestimonials from '../components/affiliate/AffiliateTestimonials'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Affiliate() {
  return (
    <div className='page-template template-affiliate'>
        <Header />
        <AffiliateBanner />
        <AffiliatePricing />
        <AffiliateEarn />
        <AffiliateFeature />
        <AffiliateFeatureTwo />
        <AffiliatePromote />
        <AffiliateTestimonials />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Affiliate