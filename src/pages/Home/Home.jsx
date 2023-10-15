import React from 'react'
import BanerImage from '../../assets/images/home/home-baner.png'
const Home = () => {
  return (
    <main className='mt-10'>
      <div className='grid grid-cols-2 gap-12 justify-items-center items-center px-12 '>
        <div>
            <h1 className='text-4xl font-semibold '><span className='uppercase text-[#A41F5C] '>Diganta</span> - Your trusted software development partner</h1>
            <br />
            <p className='text-2xl antialiased font-thin'>A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success</p>
        </div>
        <div>
            <img src={BanerImage} className='w-50 ' alt="" />
        </div>
      </div>
    </main>
  )
}

export default Home