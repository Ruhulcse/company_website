import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="p-10 bg-[#2c2428] flex gap-1 items-center justify-center">
      <AiOutlineCopyrightCircle className="text-[#f8f8f8]"></AiOutlineCopyrightCircle>
      <div>
        <p className="text-sm font-normal text-[#f8f8f8]">
          {currentYear} Digonto Soft. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
