import React from "react";
import engagement from "../../assets/images/engagement.png";
import Custom_Soft from "../../assets/images/home/custom-software.png";
import mobileApp from "../../assets/images/home/mobile-app.png";
import Quality from "../../assets/images/home/quality-assurance.jpg";
import webApp from "../../assets/images/home/web-app.png";
import Office from "../../assets/images/office.jpg";
import Call from "../../components/Call/Call";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
const Services = () => {
  return (
    <div className="overflow-hidden">
      <PageTitle title="Digonto Soft | Services"></PageTitle>
      <div class="relative">
        <img
          src={Office}
          alt="Your Image"
          className="w-full md:h-[80vh] lg:h-[80vh] h-[50vh] shadow-none filter-none blur-md"
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase md:text-5xl lg:text-5xl text-2xl font-bold"
            data-aos="fade-up"
          >
            Our services
          </h1>
        </div>
      </div>
      <section>
        <div className="mt-20">
          <h1 className="uppercase text-center text-3xl font-bold text-[#333333]">
            Our services
          </h1>
          <p className="text-center text-base leading-6 whitespace-normal text-[#696969] md:px-28 lg:px-[302px] px-2 mt-8">
          We create software teams that expand alongside our clients, starting from the beginning to wherever they aim to reach. We know about front-end, backend, databases, and servers for phones, websites, and computers. We're here to give our clients expert advice and make software that's really important for their businesses.
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
              Custom software <br /> Development
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
             Digonto makes unique and detailed software just for your business. We listen to what you want and build special software from the start. With Diganta, you always get good software and great help.
            </p>
          </div>
          <div
            className="order-4 md:order-none lg:order-none"
            data-aos="fade-right"
          >
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              Web application <br /> Development
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
            Digonto thinks outside the box to make standout web products. Our web team is talented and listens to what you need. We use the latest web tools to make useful apps for your business.
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
              Mobile application <br /> Development
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
            We're experts in making custom mobile apps. This lets our clients give awesome features to their customers. We make apps that work on all kinds of phones and systems. We use Swift/Objective-C for Apple apps and Java/Kotlin for Android. We also know how to use tools like Ionic, Xamarin, and React Native for apps that work on both Apple and Android.
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
            Digonto Soft helps you do well online. We're good at SEO, handling social media, online ads, and more. Our team makes plans to improve your online image, connect with people, and make more money. With our help, you can stay ahead online.
            </p>
          </div>
          <div className="order-7 md:order-none lg:order-none">
            <img src={Quality} alt="" />
          </div>
        </div>
      </section>
      {/* <section className="p-4 lg:p-16 bg-[#f8f8f8]">
        <div>
          <h1 className="pt-4 uppercase text-center text-3xl font-bold text-[#333333]">
            our engagement model
          </h1>
          <p className="text-center text-base leading-6 whitespace-normal text-[#696969] md:px-28 lg:px-[302px] px-2 mt-8">
            Customers are our key stakeholders. We focus and value the
            priorities of our clients' needs as their extended team. Based on
            the requirements we are able to provide a complete plan and
            dedicated engineers to complete the project. We are highly flexible
            in customizing our engagement model to satisfy client demands.
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 justify-items-center items-center lg:px-28 px-4 mt-4"
          data-aos="fade-up"
        >
          <div>
            <h1 className="capitalize text-3xl font-bold">
              <span className="text-[#A41F5C]">Full Time Engagement</span>
              <br /> Model
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              For ongoing projects and continuous flow of work, we assign
              dedicated engineers for working exclusively on your projects. The
              team size can be augmented based on your workload and skill
              requirements.
            </p>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              Weekly timesheets and status reports are submitted for your
              monitoring and review.
            </p>
          </div>
          <div>
            <img src={Custom_Soft} alt="" />
          </div>
          <div>
            <h1 className="capitalize text-3xl font-bold">
              <span className="text-[#A41F5C]">Project Based</span>
              <br /> Model
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              For fixed scope projects, we provide time and cost estimates after
              thoroughly analyzing your requirements. A detailed project plan is
              prepared for you to have a firm understanding of delivery
              milestones, time, and budget.
            </p>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              The necessary resources are assigned based on the time and
              complexity requirements of the project. We are fully committed to
              quality deliverables and meeting all deadlines.
            </p>
          </div>
          <div>
            <img src={Custom_Soft} alt="" />
          </div>
        </div>
      </section>
      <section className="lg:p-[20px_120px] p-[20px_40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 items-center ">
          <div>
            <img src={engagement} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#393939]">
              We provide the opportunity to{" "}
              <span className="text-[#A41F5C]">evaluate</span> our services
              before any formal engagement.
            </h1>
          </div>
        </div>
      </section> */}
      {/* <Call></Call> */}
    </div>
  );
};

export default Services;
