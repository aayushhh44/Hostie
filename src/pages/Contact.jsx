import React from 'react'
import Header from '../components/header/Header'
import ContactBanner from '../components/contact/ContactBanner'
import ContactInner from '../components/contact/ContactInner'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Contact() {
  return (
    <div>
        <Header />
        <ContactBanner />
        <ContactInner />
        <HomeThreeFooter />
    </div>
  )
}

export default Contact