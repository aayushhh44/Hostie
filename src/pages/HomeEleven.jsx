import React from 'react'
import HeaderEleven from '../components/header/HeaderEleven'
import HomeElevenBanner from '../components/home-eleven/HomeElevenBanner'
import HomeElevenDomainPricing from '../components/home-eleven/HomeElevenDomainPricing'
import HomeElevenPricing from '../components/home-eleven/HomeElevenPricing'
import HomeElevenFindDomain from '../components/home-eleven/HomeElevenFindDomain'
import HomeElevenWhyChoose from '../components/home-eleven/HomeElevenWhyChoose'
import HomeElevenTestimonials from '../components/home-eleven/HomeElevenTestimonials'
import HomeElevenFaq from '../components/home-eleven/HomeElevenFaq'
import HomeElevenCta from '../components/home-eleven/HomeElevenCta'
import HomeElevenFooter from '../components/footer/HomeElevenFooter'

function HomeEleven() {
  return (
    <div className='style__eleven'>
        <HeaderEleven />
        <HomeElevenBanner />
        <HomeElevenDomainPricing className="domain__listing"/>
        <HomeElevenPricing />
        <HomeElevenFindDomain />
        <HomeElevenWhyChoose className="whychoose__eleven" />
        <HomeElevenTestimonials />
        <HomeElevenFaq />
        <HomeElevenCta />
        <HomeElevenFooter />
    </div>
  )
}

export default HomeEleven