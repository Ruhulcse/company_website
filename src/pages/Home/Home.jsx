import React from 'react'
import Call from '../../components/Call/Call'
import Clients from '../../components/Clients/Clients'
import Header from '../../components/Header/Header'
import OurOffer from '../../components/OurOffer/OurOffer'
import OurServices from '../../components/OurServices/OurServices'
import PageTitle from '../../components/shared/PageTitle/PageTitle'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <PageTitle title="Digonto Soft | Home"></PageTitle>
      <Header></Header>
      <OurServices></OurServices>
      <Clients></Clients>
      <OurOffer></OurOffer>
      <Call></Call>
    </div>
  )
}

export default Home