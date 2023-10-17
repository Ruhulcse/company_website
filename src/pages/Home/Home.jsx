import React from 'react'
import Call from '../../components/Call/Call'
import Clients from '../../components/Clients/Clients'
import Header from '../../components/Header/Header'
import OurOffer from '../../components/OurOffer/OurOffer'
import OurServices from '../../components/OurServices/OurServices'
import Footer from '../../components/shared/Footer/Footer'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Header></Header>
      <OurServices></OurServices>
      <Clients></Clients>
      <OurOffer></OurOffer>
      <Call></Call>
      <Footer></Footer>
    </div>
  )
}

export default Home