import React from "react";
import collaborative from "../../assets/images/home/collaborative.jpg";
import engineer from "../../assets/images/home/engineer.png";
import supervision from "../../assets/images/home/supervision.jpg";
import team from "../../assets/images/home/team.png";
const OurOffer = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="uppercase text-center text-3xl font-bold text-[#333333]">
          what we offer
        </h1>
        <p className="text-center text-base leading-6 whitespace-normal text-[#696969] md:px-24 lg:px-64 px-4 mt-8">
        Digonto acts like a part of your development and testing team. We work with you to fix your business problems and make the most of your money. What makes us different is that we really listen and understand the specific challenges and needs your business has.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-20">
        <div data-aos="fade-up">
          <div>
            <img
              src={engineer}
              className="h-80 max-w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              qualified engineers
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              Digontao has a qualified team who can solve your problem and turn into software. you will get best service from them
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <img
              src={team}
              className="h-80 md:h-[230px] lg:h-80 max-w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              dedicated team
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
        
Our team is like an extension of yours. We'll get started fast, and your aims become ours. Together, we'll tackle the challenges of software development.
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <img
              src={collaborative}
              className="h-80 max-w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              collaborative process
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
              
We're more like a part of your team than just a service provider. We work closely with you to build the product you want. You'll hear from us regularly, every step of the way.
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <img
              src={supervision}
              className="h-80 max-w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              continuous supervision
            </h1>
            <br />
            <p className="text-base leading-6 whitespace-normal text-[#393939]">
            A project manager will be with you through the whole project. They'll plan, arrange, oversee, and roll out important parts based on the timeline you want. They'll also help make things better and put those improvements into action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurOffer;
