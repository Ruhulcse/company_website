import {
  Button,
  Card,
  Input,
  Textarea
} from "@material-tailwind/react";
import React from 'react';
import { CiLocationOn, CiMail, CiMobile1 } from 'react-icons/ci';
import Office from "../../assets/images/office.jpg";
const ContactUs = () => {
  return (
    <div>
      <div class="relative">
        <img src={Office} alt="Your Image" className="w-full h-[80vh] shadow-none filter-none blur-md" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase text-5xl font-bold"
            data-aos="fade-up"
          >
            contact us
          </h1>
          <p
            className="text-white capitalize text-xl text-center mt-2"
            data-aos="fade-up"
          >
            get in touch
          </p>
        </div>
      </div>
      <section className="bg-[#F8F8F8] p-20">
    <div className='grid md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center'>
        <div data-aos="fade-up">
          <div className="flex gap-6">
            <div>
            <CiMobile1 className="h-10 w-10 text-[#696969]"></CiMobile1>
            </div>
           <div className="text-[#515151]">
           <p className="text-2xl font-light">Give us a call</p>
            <p className="text-base font-light leading-10">+1 (3554466)</p>
            <p className="text-base font-light">+880 12121212</p>
           </div>
          </div>
          <div className="flex gap-6 mt-10">
            <div>
            <CiMail className="h-10 w-10 text-[#696969]"></CiMail>
            </div>
           <div className="text-[#515151]">
           <p className="text-2xl font-light">Send us an email</p>
            <p className="text-base font-light leading-10">info@digantabd.com</p>
           </div>
          </div>
          <div className="flex gap-6 mt-10">
            <div>
            <CiLocationOn className="h-10 w-10 text-[#696969]"></CiLocationOn>
            </div>
           <div className="text-[#515151]">
           <p className="text-2xl font-light">Location</p>
            <p className="text-base font-light leading-10">Mir bari, collge road</p>
            <p className="text-base font-light">Mymensingh</p>
           </div>
          </div>
        </div>
        <div>
        <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 md:w-96 lg:w-96 w-80 max-w-screen-lg">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" className="rounded-none" label="Name" />
          <Input size="lg" className="rounded-none" label="Company" />
          <Input size="lg" className="rounded-none" label="Email" />
          <Input size="lg" className="rounded-none" label="Phone" />
          <Textarea size="md" className="rounded-none" label="Message" />
        </div>
        <Button size="lg" className="mt-2 rounded-none bg-[#A41F5C] text-white uppercase">submit</Button>
      </form>
    </Card>
        </div>
    </div>
    </section>
    </div>
  )
}

export default ContactUs