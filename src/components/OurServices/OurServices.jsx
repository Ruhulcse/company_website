import React from "react";
import Custom_Soft from "../../assets/images/home/custom-software.png";
import DigitalMarketing from "../../assets/images/home/digital-marketing.jpg";
import mobileApp from "../../assets/images/home/mobile-app.png";
import webApp from "../../assets/images/home/web-app.png";
const OurServices = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="uppercase text-center text-3xl font-bold text-[#333333]">
          our services
        </h1>
        <p className="text-center text-base leading-6 whitespace-normal text-[#696969] md:px-28 lg:px-[302px] px-2 mt-8">
        We assemble software development teams that evolve alongside our clients, from inception to their highest aspirations. Our proficiency spans front-end, backend, database, and server integrations across mobile, web, and desktop platforms. We're committed to offering expert advice and crafting software that's pivotal to our clients' operations
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-4">
        <div className="order-1 md:order-none lg:order-none">
          <img src={Custom_Soft} alt="" />
        </div>
        <div
          className="order-2 md:order-none lg:order-none"
          data-aos="fade-left"
        >
          <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
            custom software <br /> development
          </h1>
          <br />
          <p className="text-base leading-6 whitespace-normal text-[#393939]">
          Digonto makes special software just for your business. We listen to your ideas and build the software from the start. With Digonto, you always get good software and great help.
          </p>
        </div>
        <div
          className="order-4 md:order-none lg:order-none"
          data-aos="fade-right"
        >
          <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
            web application <br /> development
          </h1>
          <br />
          <p className="text-base leading-6 whitespace-normal text-[#393939]">
          Digonto thinks differently to make unique web products. Our web team is skilled and listens to what you need. We use the latest web tools to make helpful apps for your business.
          </p>
        </div>
        <div className="order-3 md:order-none lg:order-none">
          <img src={webApp} alt="" />
        </div>
        <div className="order-5 md:order-none lg:order-none">
          <img src={mobileApp} alt="" />
        </div>
        <div
          className="order-6 md:order-none lg:order-none"
          data-aos="fade-left"
        >
          <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
            mobile application <br /> development
          </h1>
          <br />
          <p className="text-base leading-6 whitespace-normal text-[#393939]">
          We're really good at making custom mobile apps. This lets our clients give their customers great features on their phones. We make apps that work on many phones and systems. We use Swift/Objective-C for iOS apps and Java/Kotlin for Android. We also use tools like Ionic, Xamarin, and React Native for apps that work on multiple systems.
          </p>
        </div>
        <div
          className="order-8 md:order-none lg:order-none"
          data-aos="fade-right"
        >
          <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
            Digital marketing
          </h1>
          <br />
          <p className="text-base leading-6 whitespace-normal text-[#393939]">
           Digonto Soft helps you succeed online. We're good at things like SEO, managing social media, and online ads. Our team makes special plans to help your online image, connect with your customers, and earn more money. Get ahead online with our effective methods.
          </p>
        </div>
        <div className="order-7 md:order-none lg:order-none">
          <img src={DigitalMarketing} alt="" />
        </div>
      </div>
    </>
  );
};

export default OurServices;
