import React from 'react'
import BannerImage from '../../assets/images/home/home-baner.png'
const Header = () => {
  return (
    <section className='mt-10'> 
    <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-12 justify-items-center items-center px-12'>
    <div data-aos="fade-right">
        <h1 className='text-3xl font-bold leading-10  text-[#393939]'><span className='uppercase text-[#A41F5C] '>Diganta</span> - Your trusted Software Development Partner</h1>
        <br />
        <p className='text-2xl text-[#696969] leading-normal'>A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success</p>
    </div>
    <div>
        <img src={BannerImage} className='w-50 ' alt="" />
    </div>
  </div>
  </section>
  )
}

export default Header