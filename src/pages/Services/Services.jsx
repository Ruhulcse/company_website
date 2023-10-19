import React from 'react';
import engagement from "../../assets/images/engagement.png";
import Custom_Soft from '../../assets/images/home/custom-software.png';
import mobileApp from '../../assets/images/home/mobile-app.png';
import Quality from '../../assets/images/home/quality-assurance.jpg';
import webApp from '../../assets/images/home/web-app.png';
import Office from "../../assets/images/office.jpg";
import Call from '../../components/Call/Call';
const Services = () => {
  return (
    <div className='overflow-hidden'>
      <div class="relative">
        <img src={Office} alt="Your Image" className="w-full h-[80vh] shadow-none filter-none blur-md" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase text-5xl font-bold"
            data-aos="fade-up"
          >
            our services
          </h1>
        </div>
      </div>
      <section>
      <div className='mt-20'>
        <h1 className='uppercase text-center text-3xl font-bold text-[#333333]'>our services</h1>
        <p className='text-center text-base leading-6 whitespace-normal text-[#696969] md:px-28 lg:px-[302px] px-2 mt-8'>
        We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.
        </p>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-4'>
     <div className='order-1 md:order-none lg:order-none'>
        <img src={Custom_Soft} alt="" />
     </div>
     <div className='order-2 md:order-none lg:order-none' data-aos="fade-left">
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>custom software <br /> development</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Diganta helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and create custom software solutions from scratch, designed especially for your business. With Diganta, you get quality software and perfect service every time.
        </p>
     </div>
     <div className='order-4 md:order-none lg:order-none' data-aos="fade-right">
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>web application <br /> development</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Diganta looks beyond conventional solutions to develop disruptive web products. Our skilled and dedicated web development team understands your needs and leverage the dynamism of modern web frameworks to create business valued web applications.
        </p>
     </div>
     <div className='order-3 md:order-none lg:order-none'>
        <img src={webApp} alt="" />
     </div>
     <div className='order-6 md:order-none lg:order-none'>
        <img src={mobileApp} alt="" />
     </div>
     <div className='order-5 md:order-none lg:order-none' data-aos="fade-left">
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>mobile application <br /> development</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands. We develop apps that perform across different mobile devices and operating systems. We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development. For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native.
        </p>
     </div>
     <div className='order-8 md:order-none lg:order-none' data-aos="fade-right">
        <h1 className='capitalize text-3xl font-bold text-[#A41F5C]'>quality assurance & <br /> testing</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        Treading on Agile development methodologies and Rational Unified Process practices in testing, Enosis ensures highest quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issues.
        </p>
     </div>
     <div className='order-7 md:order-none lg:order-none'>
        <img src={Quality} alt="" />
     </div>
    </div>
      </section>
      <section className='p-16 bg-[#f8f8f8]'>
      <div>
      <h1 className='uppercase text-center text-3xl font-bold text-[#333333]'>our engagement model</h1>
      <p className='text-center text-base leading-6 whitespace-normal text-[#696969] md:px-28 lg:px-[302px] px-2 mt-8'>
      Customers are our key stakeholders. We focus and value the priorities of our clients' needs as their extended team. Based on the requirements we are able to provide a complete plan and dedicated engineers to complete the project. We are highly flexible in customizing our engagement model to satisfy client demands.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-4' data-aos="fade-up">
     <div>
        <h1 className='capitalize text-3xl font-bold'><span className='text-[#A41F5C]'>Full Time Engagement</span>
        <br /> Model</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        For ongoing projects and continuous flow of work, we assign dedicated engineers for working exclusively on your projects. The team size can be augmented based on your workload and skill requirements.
        </p>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>Weekly timesheets and status reports are submitted for your monitoring and review.</p>
     </div>
      <div>
        <img src={Custom_Soft} alt="" />
     </div>
     <div>
        <h1 className='capitalize text-3xl font-bold'><span className='text-[#A41F5C]'>Project Based</span>
        <br /> Model</h1>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>
        For fixed scope projects, we provide time and cost estimates after thoroughly analyzing your requirements. A detailed project plan is prepared for you to have a firm understanding of delivery milestones, time, and budget.
        </p>
        <br />
        <p className='text-base leading-6 whitespace-normal text-[#393939]'>The necessary resources are assigned based on the time and complexity requirements of the project. We are fully committed to quality deliverables and meeting all deadlines.</p>
     </div>
      <div>
        <img src={Custom_Soft} alt="" />
     </div>
      </div>
      </section>
      <section className='p-[20px_120px]'>
        <div className='grid grid-cols-2 gap-6 items-center '>
          <div>
          <img src={engagement} alt="" />
          </div>
          <div>
          <h1 className='text-3xl font-bold text-[#393939]'>We provide the opportunity to <span className='text-[#A41F5C]'>evaluate</span> our services before any formal engagement.</h1>
          </div>
        </div>
      </section>
      <Call></Call>
    </div>
  )
}

export default Services