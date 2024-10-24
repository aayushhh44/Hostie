import React from 'react'
import Header from '../components/header/Header'
import FaqBanner from '../components/faq/FaqBanner'
import PricingFaq from '../components/pricing/PricingFaq'
import FaqContact from '../components/faq/FaqContact'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Faq() {
    return (
        <>
            <Header />
            <FaqBanner />
            <PricingFaq />
            <FaqContact />
            <HomeThreeFooter />
        </>
    )
}

export default Faq