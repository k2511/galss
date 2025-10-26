import React from 'react'
import AboutTabs from '../../../components/AboutTabs'
import OurStory from '../../../components/OurStory'
import ExperienceSection from '../../../components/ExperienceSection'
import CuttingMiddleman from '../../../components/CuttingMiddleman'
import PromiseValues from '../../../components/PromiseValues'
import TrustpilotSection from '../../../components/TrustpilotSection'
import GuaranteeSection from '../../../components/GuaranteeSection'
import Footer from '../../../components/Footer'
import ExploreMore from '../../../components/ExploreMore'

const AboutUs = () => {
  return (
    <div>
      <AboutTabs/>
      <OurStory/>
      <ExperienceSection/>
      <CuttingMiddleman/>
      <PromiseValues/>
      <TrustpilotSection/>
      <ExploreMore/>
      <GuaranteeSection/>
      <Footer/>
    </div>
  )
}

export default AboutUs
