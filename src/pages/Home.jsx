import React from 'react'
import HeroSection from '../components/HeroSection'
import CompanyLogo from '../components/CompanyLogo'
import WhyChooseUs from '../components/WhyChooseUs'
import DomainCards from '../components/DomainCards'
import HappyClients from '../components/HappyClients'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <CompanyLogo/>
      <WhyChooseUs/>
      <DomainCards/>
      <HappyClients/>
      <Blogs/>
    </>
  )
}

export default Home