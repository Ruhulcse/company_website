import {
  Button,
  Card,
  Input,
  Textarea
} from "@material-tailwind/react";
import React from 'react';
const Call = () => {
  return (
    <section className="mt-20 p-10 bg-[#F8F8F8]">
    <div className='grid md:grid-cols-[1fr_50px_1fr] lg:grid-cols-[1fr_50px_1fr] items-center'>
        <div className="md:px-28 lg:px-28 px-4" data-aos="fade-right">
            <h1 className="uppercase text-[80px] leading-none font-bold text-[#333333]">want us to <span className="text-[#A41F5C]">call </span>you?</h1>
        </div>
        <div className="mr-10 hidden md:block lg:block">
            <div className="border-r-4 h-20 border-[#A41F5C]"></div>
        </div>
        <div data-aos="fade-left">
        <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
  )
}

export default Call