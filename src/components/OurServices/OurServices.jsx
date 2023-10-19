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
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
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
            Digonto helps you create diverse and complex software solutions for
            your business needs. Listening to your ideas, we implement and
            create custom software solutions from scratch, designed especially
            for your business. With Digonto, you get quality software and
            perfect service every time.
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
            Digonto looks beyond conventional solutions to develop disruptive
            web products. Our skilled and dedicated web development team
            understands your needs and leverage the dynamism of modern web
            frameworks to create business valued web applications.
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
            Our expertise in custom mobile app development gives our clients the
            opportunity to pack incredible functionality into their customer’s
            hands. We develop apps that perform across different mobile devices
            and operating systems. We are experts at Swift/Objective-C to build
            native iOS apps and Java/Kotlin for native Android app development.
            For cross-platform and hybrid development our expertise include, but
            are not limited to, Ionic, Xamarin, and React Native.
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
            Digonto soft is your gateway to online success. We specialize in
            SEO, social media management, PPC advertising, and more. Our expert
            team crafts tailored strategies to boost your online presence,
            engage your audience, and drive revenue. Stay ahead in the digital
            realm with our results-driven solutions.
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
