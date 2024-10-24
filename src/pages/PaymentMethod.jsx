import React from 'react'
import Header from '../components/header/Header'
import PaymentMethodBanner from '../components/payment-method/PaymentMethodBanner'
import PaymentMethodOption from '../components/payment-method/PaymentMethodOption'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import PricingFaq from '../components/pricing/PricingFaq'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function PaymentMethod() {
  return (
    <div className='page-template template-pricing'>
        <Header />
        <PaymentMethodBanner />
        <PaymentMethodOption />
        <HomeFourSupport className="black__friday--support" />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default PaymentMethod