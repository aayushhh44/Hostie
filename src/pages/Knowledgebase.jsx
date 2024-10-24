import React from 'react'
import Header from '../components/header/Header'
import KnowledgebaseBanner from '../components/knowledgebase/KnowledgebaseBanner'
import KnowledgebaseTab from '../components/knowledgebase/KnowledgebaseTab'
import HomeFourSupport from '../components/home-four/HomeFourSupport'
import HomeEightCta from '../components/home-eight/HomeEightCta'
import HomeThreeFooter from '../components/footer/HomeThreeFooter'

function Knowledgebase() {
  return (
    <>
        <Header />
        <KnowledgebaseBanner />
        <KnowledgebaseTab />
        <HomeFourSupport className="pb--60" children="bg-white" />
        <HomeEightCta />
        <HomeThreeFooter />
    </>
  )
}

export default Knowledgebase