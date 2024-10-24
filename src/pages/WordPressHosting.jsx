import React from 'react'
import Header from '../components/header/Header'
import WordPressHostingBanner from '../components/wordpress-hosting/WordPressHostingBanner'
import WordPressHostingFeature from '../components/wordpress-hosting/WordPressHostingFeature'
import HomeFourPricing from '../components/home-four/HomeFourPricing'
import WordPressHostingFeatureTwo from '../components/wordpress-hosting/WordPressHostingFeatureTwo'
import WordPressHostingPlugins from '../components/wordpress-hosting/WordPressHostingPlugins'
import AboutTestimonials from '../components/about/AboutTestimonials'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function WordPressHosting() {
  return (
    <div className='wordpress-hosting page-template'>
        <Header />
        <WordPressHostingBanner />
        <WordPressHostingFeature />
        <HomeFourPricing />
        <WordPressHostingFeatureTwo/>
        <WordPressHostingPlugins/>
        <AboutTestimonials className="bg-white pb--0"/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default WordPressHosting