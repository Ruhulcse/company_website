import React from 'react'
import collaborative from '../../assets/images/home/collaborative.jpg'
import engineer from '../../assets/images/home/engineer.png'
import supervision from '../../assets/images/home/supervision.jpg'
import team from '../../assets/images/home/team.png'
const OurOffer = () => {
  return (
    <>
    <div className='mt-20'>
    <h1 className='uppercase text-center text-3xl font-bold text-[#333333]'>what we offer</h1>
    <p className='text-center text-base leading-6 whitespace-normal text-[#696969] md:px-24 lg:px-64 px-4 mt-8'>
    Diganta works as an extension of your development and testing team. We will work together to solve your business cases and get the maximum value of your budget. One of our differentiating qualities is that we take the time to understand the particular challenges, difficulties, and needs of your business.
        </p>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-20'>
    <div data-aos="fade-up">
    <div>
        <img src={engineer} className='h-auto max-w-full object-cover' alt="" />
     </div>
     <div>
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>qualified engineers</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Diganta is a team of 150+ software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers needs.
        </p>
     </div>
    </div>
    <div data-aos="fade-up">
    <div>
        <img src={team} className='h-[515px] md:h-[230px] lg:h-[515px] max-w-full object-cover' alt="" />
     </div>
     <div>
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>dedicated team</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together.
        </p>
     </div>
    </div>
    <div data-aos="fade-up">
    <div>
        <img src={collaborative} className='h-auto max-w-full object-cover' alt="" />
     </div>
     <div>
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>collaborative process</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        We work as an extension of your team, not as a vendor. We help you to participate in a deeply collaborative process to develop the desired product. We will be in constant communication with your team every step of the way.
        </p>
     </div>
    </div>
    <div data-aos="fade-up">
    <div>
        <img src={supervision} className='h-auto max-w-full object-cover' alt="" />
     </div>
     <div>
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>continuous supervision</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        A project manager will be involved in the entire lifecycle of your project to plan, organize, control, and deploy key deliverables according to your desired milestones, including process improvement analysis and implementation.
        </p>
     </div>
    </div>
    </div>
    </>
  )
}

export default OurOffer