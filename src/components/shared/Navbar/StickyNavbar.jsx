import {
  IconButton,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
 
const StickyNavbar = ()=> {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        className="p-1 font-normal uppercase text-base text-[#696969] border-b-2 border-transparent hover:border-[#A41F5C] transition-all duration-300 ease-in-out"
      >
        <a href="#" className="flex items-center">
         Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal uppercase text-base text-[#696969]  border-b-2 border-transparent hover:border-[#A41F5C] transition-all duration-300 ease-in-out"
      >
        <a href="#" className="flex items-center">
          About us
        </a>
      </Typography>
      <div className="group relative cursor-pointer">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 menu-hover font-normal uppercase text-base text-[#696969] border-b-2 border-transparent hover:border-[#A41F5C] transition-all duration-300 ease-in-out"
      >
        <a href="#" className="flex items-center">
          services
        </a>
      </Typography>
      <div
          className="invisible absolute z-10 flex w-[270px] flex-col bg-gray-100 text-[#696969] shadow-xl group-hover:visible"
          onClick=""
        >
          <a
            className="block py-2 px-4 capitalize text-base font-normal hover:text-white hover:bg-[#A41F5C] "
            >Custom Software Development</a
          >
 
          <a
            className="block py-2 px-4 capitalize text-base font-normal hover:text-white hover:bg-[#A41F5C] "
            >web application Development</a
          >
          <a
            className="block py-2 px-4 capitalize text-base font-normal hover:text-white hover:bg-[#A41F5C] "
            >mobile application Development
          </a>
          <a
            className="block py-2 px-4 capitalize text-base font-normal hover:text-white hover:bg-[#A41F5C] "
            >quality assurance & quality
          </a>
        </div>
      </div>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal uppercase text-base text-[#696969] border-b-2 border-transparent hover:border-[#A41F5C] transition-all duration-300 ease-in-out"
      >
        <a href="#" className="flex items-center">
         careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal uppercase text-base text-[#696969] border-b-2 border-transparent hover:border-[#A41F5C] transition-all duration-300 ease-in-out"
      >
        <a href="#" className="flex items-center">
         contact us
        </a>
      </Typography>
    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-2xl text-[#A41F5C]"
          >
            Diganta Soft
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Contact us</span>
            </Button> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-[#A41F5C]"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
  );
}



export default StickyNavbar;