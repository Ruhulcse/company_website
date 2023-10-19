import React from "react";
import engagement from "../../../assets/images/engagement.png";
import Custom_Soft from "../../../assets/images/home/custom-software.png";
import Mobile_app from "../../../assets/images/home/mobile-app.png";
import Office from "../../../assets/images/office.jpg";
import Call from "../../../components/Call/Call";
const MobileDev = () => {
  return (
    <div className="overflow-hidden">
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
            our services
          </h1>
          <p
            className="text-white capitalize md:text-xl lg:text-xl text-base text-center mt-2"
            data-aos="fade-up"
          >
            Mobile Application Development
          </p>
        </div>
      </div>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
          <div className="px-4 lg:px-20">
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              Mobile Application <br /> Development
            </h1>
            <p className="mt-6 text-base leading-6 whitespace-normal text-[#333333]">
              Along with native app development services, Digonto also has vast
              experience in cross-platform app development. Our mobile app
              development experts follow best practices to ensure reliability
              and great user experience.
            </p>
            <p className="mt-4 text-base leading-6 whitespace-normal text-[#333333]">
              As a custom mobile app development company, we are committed to
              helping startups and established businesses in streamlining their
              development process.
            </p>
          </div>
          <div className="px-4 lg:px-20">
            <img src={Mobile_app} alt="" />
          </div>
        </div>
      </section>
      <section>
        <h1 className="px-4 mt-4 lg:px-20 capitalize text-3xl font-bold text-[#A41F5C]">
          App Development Project Life Cycle
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center md:px-16 lg:px-28 px-4 mt-12">
          <div>
            <div>
              <svg
                data-name="Layer 1"
                fill="#A41F5C"
                className="h-12 w-12"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M406.89,78.9H292.58V66.44a36.31,36.31,0,0,0-36.26-36.26h-.64a36.31,36.31,0,0,0-36.26,36.26V78.9H105.11a24.68,24.68,0,0,0-24.65,24.65V457.18a24.67,24.67,0,0,0,24.65,24.64H406.89a24.67,24.67,0,0,0,24.65-24.64V103.55A24.68,24.68,0,0,0,406.89,78.9Zm-182.47,10a5,5,0,0,0,5-5V66.44a26.29,26.29,0,0,1,26.26-26.26h.64a26.29,26.29,0,0,1,26.26,26.26V83.9a5,5,0,0,0,5,5h27v42.34H197.39V88.9ZM421.54,457.18a14.66,14.66,0,0,1-14.65,14.64H105.11a14.66,14.66,0,0,1-14.65-14.64V103.55A14.66,14.66,0,0,1,105.11,88.9h82.28v47.34a5,5,0,0,0,5,5H319.61a5,5,0,0,0,5-5V88.9h82.28a14.66,14.66,0,0,1,14.65,14.65Z" />
                <circle
                  cx="256"
                  cy="66.98"
                  r="9.7"
                  transform="translate(96.15 277.86) rotate(-67.5)"
                />
                <path d="M302,196.2H145a5,5,0,0,0,0,10H302a5,5,0,0,0,0-10Z" />
                <path d="M386.66,171.65a5,5,0,0,0-6.86,1.72L353,218.2l-8.1-8.68a5,5,0,0,0-7.31,6.82l12.64,13.54a5,5,0,0,0,3.65,1.59,4.71,4.71,0,0,0,.53,0,5,5,0,0,0,3.76-2.41l30.23-50.53A5,5,0,0,0,386.66,171.65Z" />
                <path d="M302,262.52H145a5,5,0,0,0,0,10H302a5,5,0,0,0,0-10Z" />
                <path d="M386.66,238a5,5,0,0,0-6.86,1.72L353,284.52l-8.1-8.68a5,5,0,0,0-7.31,6.82l12.64,13.54a5,5,0,0,0,3.65,1.59,4.71,4.71,0,0,0,.53,0,5,5,0,0,0,3.76-2.41l30.23-50.53A5,5,0,0,0,386.66,238Z" />
                <path d="M302,328.84H145a5,5,0,0,0,0,10H302a5,5,0,0,0,0-10Z" />
                <path d="M386.66,304.29A5,5,0,0,0,379.8,306L353,350.84l-8.1-8.68a5,5,0,0,0-7.31,6.82l12.64,13.54a5,5,0,0,0,3.65,1.59,4.71,4.71,0,0,0,.53,0,5,5,0,0,0,3.76-2.41l30.23-50.52A5,5,0,0,0,386.66,304.29Z" />
                <path d="M302,395.16H145a5,5,0,0,0,0,10H302a5,5,0,0,0,0-10Z" />
                <path d="M386.66,370.61a5,5,0,0,0-6.86,1.72L353,417.16l-8.1-8.68a5,5,0,0,0-7.31,6.83l12.64,13.53a5,5,0,0,0,3.65,1.59,4.71,4.71,0,0,0,.53,0,5,5,0,0,0,3.76-2.4l30.23-50.53A5,5,0,0,0,386.66,370.61Z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Requirement Analysis
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Analyzing your requirements and planning the process of
                development are the most important parts of our mobile app
                development program.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                viewBox="0 0 64 64"
                fill="#A41F5C"
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Analysis-Case-Document-Virus-History">
                  <path d="M61,24H53a1,1,0,0,0-1,1V52a1,1,0,0,0,.086.406l4,9a1,1,0,0,0,1.828,0l4-9A1,1,0,0,0,62,52V25A1,1,0,0,0,61,24Zm-1,2v4H54V26ZM54.539,53h4.922l-.889,2H55.428ZM54,51V32h2V51Zm4,0V32h2V51Zm-1.683,6h1.366L57,58.538Z" />
                  <path d="M39.707,2.293A1,1,0,0,0,39,2H9A5.006,5.006,0,0,0,4,7V57a5.006,5.006,0,0,0,5,5H45a5.006,5.006,0,0,0,5-5V13a1,1,0,0,0-.293-.707ZM40,5.414,46.586,12H41a1,1,0,0,1-1-1ZM45,60H9a3,3,0,0,1-3-3V7A3,3,0,0,1,9,4H38v7a3,3,0,0,0,3,3h7V57A3,3,0,0,1,45,60Z" />
                  <path d="M21.167,27.247l1.49-1.49-1.414-1.414-1.49,1.49A4.969,4.969,0,0,0,18,25.1V23H16v2.1a4.969,4.969,0,0,0-1.753.732l-1.49-1.49-1.414,1.414,1.49,1.49A4.961,4.961,0,0,0,12.1,29H10v2h2.1a4.961,4.961,0,0,0,.732,1.753l-1.49,1.49,1.414,1.414,1.49-1.49A4.969,4.969,0,0,0,16,34.9V37h2V34.9a4.969,4.969,0,0,0,1.753-.732l1.49,1.49,1.414-1.414-1.49-1.49A4.961,4.961,0,0,0,21.9,31H24V29H21.9A4.961,4.961,0,0,0,21.167,27.247ZM17,33a3,3,0,1,1,3-3A3,3,0,0,1,17,33Z" />
                  <rect height="2" width="2" x="16" y="29" />
                  <path d="M32,20V18H28a1,1,0,0,0-.707.293l-4,4,1.414,1.414L28.414,20Z" />
                  <rect height="2" width="6" x="36" y="18" />
                  <rect height="2" width="6" x="36" y="22" />
                  <path d="M18,41H16v6a1,1,0,0,0,1,1h6V46H18Z" />
                  <rect height="2" width="2" x="27" y="46" />
                  <rect height="2" width="4" x="31" y="46" />
                  <rect height="2" width="8" x="27" y="50" />
                  <rect height="2" width="2" x="10" y="8" />
                  <rect height="2" width="4" x="14" y="8" />
                  <rect height="2" width="8" x="10" y="12" />
                  <path d="M29,38h3V36H29.414l-2.707-2.707-1.414,1.414,3,3A1,1,0,0,0,29,38Z" />
                  <rect height="2" width="6" x="36" y="36" />
                  <rect height="2" width="6" x="36" y="40" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Prototype
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                After thorough analysis, the prototype of your app is prepared
                and sent to you for evaluation and improvement analysis.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                viewBox="0 0 32 32"
                className="h-12 w-12"
                fill="#A41F5C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="27-Document-Process" id="_27-Document-Process">
                  <path d="M28.71,6.29l-6-6A1,1,0,0,0,22,0H6A3,3,0,0,0,3,3V29a3,3,0,0,0,3,3H26a3,3,0,0,0,3-3V7A1,1,0,0,0,28.71,6.29ZM27,29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V3A1,1,0,0,1,6,2H21V6a2,2,0,0,0,2,2h4Z" />
                  <path d="M19.43,16l1.27-1.27-1.41-1.41L18,14.57a4,4,0,0,0-1-.42V12H15v2.14a4,4,0,0,0-1,.42l-1.27-1.27-1.41,1.41L12.57,16a4,4,0,0,0-.42,1H10v2h2.14a4,4,0,0,0,.42,1l-1.27,1.27,1.41,1.41L14,21.43a4,4,0,0,0,1,.42V24h2V21.86a4,4,0,0,0,1-.42l1.27,1.27,1.41-1.41L19.43,20a4,4,0,0,0,.42-1H22V17H19.86A4,4,0,0,0,19.43,16ZM16,20a2,2,0,1,1,2-2A2,2,0,0,1,16,20Z" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                App Development
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                The App Development gets started on the preferable platforms
                with complete transparency.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                id="Layer_1"
                fill="#A41F5C"
                className="h-12 w-12"
                version="1.1"
                viewBox="0 0 256 256"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path d="M174,175.3c0.8,0.3,2.1,0.7,3.6,0.6c2.4-0.1,4.6-1.1,6.2-2.7c1.8-1.8,2.7-4.2,2.7-6.7c-0.2-15.1,9.4-28.3,23.7-32.8   c1-0.3,2-0.8,2.9-1.5c2-1.5,3.3-3.7,3.6-6c0.4-2.5-0.2-5-1.7-7.1c-9-12.1-9.1-28.4-0.1-40.5l1.1-1.4l0.5-1.5c0.8-2.4,0.5-5-0.6-7   c-1.1-2.3-3.1-4-5.5-4.7c-14.3-4.6-23.9-17.7-23.7-32.7c0-1.2-0.2-2.2-0.5-3.2c-0.8-2.3-2.5-4.2-4.8-5.4c-2.2-1-4.7-1.2-7-0.4   c-3.5,1.2-7.2,1.8-10.9,1.8c-11,0-21.4-5.3-27.7-14.3c-0.7-0.9-1.5-1.7-2.2-2.2c-4.2-3-10-2-13,2.2c-6.4,9-16.7,14.3-27.7,14.3   c-3.8,0-7.4-0.6-10.8-1.8c-3.2-1.1-7.3-0.3-9.7,2.2c-1.8,1.8-2.7,4.2-2.7,6.6c0.2,15.1-9.4,28.3-23.7,32.7c-1.1,0.3-2,0.8-3,1.5   c-4.1,3.1-4.9,8.9-1.9,13.1c9,12.1,9,28.4,0,40.6c-0.6,0.8-1.1,1.8-1.4,2.7c-0.7,2.4-0.5,4.8,0.6,7.2c1.2,2.2,3.2,3.8,5.4,4.5   c14.4,4.6,23.9,17.8,23.7,32.6c-0.1,1.2,0.1,2.3,0.5,3.4c0.8,2.3,2.5,4.2,4.8,5.4c2.3,1,4.7,1.2,7,0.4c3.6-1.2,7.4-1.8,11.1-1.8   c11.1,0,21.1,5.2,27.6,14.3c0.6,0.8,1.4,1.6,2.2,2.2c1.6,1.1,3.5,1.7,5.4,1.7c0.5,0,1.1,0,1.6-0.1c2.5-0.4,4.6-1.8,6-3.8   C144.3,175.6,159.7,170.5,174,175.3z M127.9,181.7c-8.2-11.3-21.3-18-35.2-18c-4.6,0-9.3,0.7-13.6,2.2c0-19-12.1-35.7-30-41.4   c11.2-15.4,11.2-35.9,0.1-51.3c18-5.9,30-22.4,30.1-41.4c4.3,1.4,8.8,2.1,13.4,2.1c13.9,0,27.1-6.7,35.3-17.9   c8.2,11.2,21.4,17.9,35.4,17.9c4.7,0,9.3-0.7,13.4-2.2c0,18.8,11.9,35.3,29.9,41.4c-11.1,15.4-11.1,35.8,0,51.3   c-18,5.9-29.9,22.4-30,41.4C158.6,160,139.2,166.3,127.9,181.7z" />
                  <path d="M168.4,92.1c-15.3-6.4-27.3-18.3-33.8-33.6c-1.1-2.7-3.8-4.5-6.7-4.5c-2.9,0-5.6,1.8-6.7,4.4   c-6.5,15.2-18.4,27.1-33.6,33.6c-2.7,1.1-4.5,3.7-4.5,6.6c0,2.9,1.7,5.5,4.4,6.7c14.7,6.4,26.9,18.8,33.6,34   c1.2,2.7,3.8,4.4,6.6,4.4c0,0,0,0,0,0c2.9,0,5.5-1.7,6.6-4.4c6.4-14.8,18.8-27.1,34.1-33.9c2.6-1.2,4.3-3.8,4.3-6.7   C172.8,95.8,171.1,93.2,168.4,92.1z M127.8,130.6c-7.2-13.6-18.3-24.8-31.5-31.9c13.6-7,24.6-17.9,31.6-31.5   c7,13.7,18.1,24.7,31.8,31.6C146,106.1,134.8,117.3,127.8,130.6z" />
                  <path d="M98.6,188.8c-2.3-1.5-5.3-0.8-6.8,1.4l-26.2,40.1l-13.1-26.9l-27.3-0.1l27.4-42c1.5-2.3,0.8-5.3-1.4-6.8   c-2.3-1.5-5.3-0.8-6.8,1.4L7.1,213.1l39.3,0.1l18,36.9l35.6-54.5C101.5,193.3,100.9,190.2,98.6,188.8z" />
                  <path d="M211.5,155.9c-1.5-2.3-4.5-2.9-6.8-1.4c-2.3,1.5-2.9,4.5-1.4,6.8l27.5,42l-27.4,0.1l-13.1,26.9l-26.2-40.1   c-1.5-2.3-4.5-2.9-6.8-1.4c-2.3,1.5-2.9,4.5-1.4,6.8l35.7,54.5l18-36.9l39.3-0.1L211.5,155.9z" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Quality Assurance
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                No compromise in quality so we make sure you get a 100% bug free
                app. Testing is performed continuously during each agile sprint,
                followed by bug fixing.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                id="Layer_1"
                fill="#A41F5C"
                className="h-12 w-12"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <style type="text/css"></style>
                <g>
                  <g>
                    <path d="M490.39,399.89H21.61C10.24,399.89,1,390.64,1,379.28V56.91C1,45.55,10.24,36.3,21.61,36.3h468.78    c11.36,0,20.61,9.24,20.61,20.61v322.36C511,390.64,501.76,399.89,490.39,399.89z M21.61,51.76c-2.84,0-5.15,2.31-5.15,5.15    v322.36c0,2.84,2.31,5.16,5.15,5.16h468.78c2.84,0,5.15-2.32,5.15-5.16V56.91c0-2.84-2.31-5.15-5.15-5.15H21.61z" />
                  </g>
                  <g>
                    <path d="M468.63,475.7H43.36C20,475.7,1,451.39,1,421.51c0-4.27,3.46-7.73,7.73-7.73h164.85c1.64,0,3.22,0.52,4.55,1.48    l21.82,15.88h94.19l29.7-16.4c1.15-0.63,2.43-0.97,3.74-0.97h175.7c4.27,0,7.73,3.46,7.73,7.73    C511,451.39,491.99,475.7,468.63,475.7z M17.02,429.24c2.57,17.44,13.59,31,26.34,31h425.26c12.76,0,23.79-13.56,26.35-31H329.57    l-29.7,16.4c-1.15,0.63-2.43,0.97-3.74,0.97h-98.7c-1.64,0-3.22-0.52-4.55-1.48l-21.82-15.88H17.02z" />
                  </g>
                  <g>
                    <path d="M161.64,98.39H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h87.84c4.27,0,7.73,3.46,7.73,7.73    C169.37,94.94,165.91,98.39,161.64,98.39z" />
                  </g>
                  <g>
                    <path d="M117.72,141.77H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73    C125.45,138.31,122,141.77,117.72,141.77z" />
                  </g>
                  <g>
                    <path d="M366.62,141.77H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73    C374.35,138.31,370.89,141.77,366.62,141.77z" />
                  </g>
                  <g>
                    <path d="M271.18,141.77H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    C278.91,138.31,275.45,141.77,271.18,141.77z" />
                  </g>
                  <g>
                    <path d="M117.72,242.63H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73    S122,242.63,117.72,242.63z" />
                  </g>
                  <g>
                    <path d="M366.62,242.63H322.7c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73    S370.89,242.63,366.62,242.63z" />
                  </g>
                  <g>
                    <path d="M271.18,242.63H169.23c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    S275.45,242.63,271.18,242.63z" />
                  </g>
                  <g>
                    <path d="M117.72,343.49H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73    C125.45,340.04,122,343.49,117.72,343.49z" />
                  </g>
                  <g>
                    <path d="M366.62,343.49H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73    C374.35,340.04,370.89,343.49,366.62,343.49z" />
                  </g>
                  <g>
                    <path d="M271.18,343.49H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    C278.91,340.04,275.45,343.49,271.18,343.49z" />
                  </g>
                  <g>
                    <path d="M175.75,293.06H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    C183.47,289.61,180.02,293.06,175.75,293.06z" />
                  </g>
                  <g>
                    <path d="M323.27,293.06H221.33c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    C331,289.61,327.55,293.06,323.27,293.06z" />
                  </g>
                  <g>
                    <path d="M175.75,192.2H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    S180.02,192.2,175.75,192.2z" />
                  </g>
                  <g>
                    <path d="M323.27,192.2H221.33c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73    S327.55,192.2,323.27,192.2z" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Deployment
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                App is ready to appear on the online store at this stage of
                development.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                viewBox="0 0 22.573 22.596"
                fill="#A41F5C"
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <g data-name="Layer 1" id="Layer_1-2">
                    <path
                      d="M14.972,11.539l5.909-5.9a.332.332,0,0,0,.084-.139L22.557.463a.342.342,0,0,0-.431-.429L17.11,1.651a.346.346,0,0,0-.137.083l-5.9,5.891L8.851,5.39A4.5,4.5,0,0,0,2.961.281a.342.342,0,0,0-.127.563L5.7,3.721,3.686,5.742.824,2.867a.345.345,0,0,0-.565.127A4.52,4.52,0,0,0,1.538,7.9L.522,8.921a.342.342,0,0,0,0,.483A3.32,3.32,0,0,0,5.55,8.915l2.111,2.12-6,6c-.4-.529-1.013.085-.484.484l-.789.787a1.317,1.317,0,0,0,0,1.856l2.049,2.048a1.314,1.314,0,0,0,.929.383c.673.073,1.283-.769,1.718-1.172.4.529,1.013-.085.484-.483l6-5.988,6.9,6.935a2.413,2.413,0,0,0,3.407-3.418ZM21.705.888,20.48,4.762l-2.634-2.63ZM.755,3.767,3.2,6.227,2.021,7.415A3.837,3.837,0,0,1,.755,3.767ZM5.792,8.188c-.376-.373-.8.384-1.214.733a2.526,2.526,0,0,1-3.315.225L6.424,3.962a.343.343,0,0,0,0-.482L3.731.775A3.817,3.817,0,0,1,8.158,5.358a.342.342,0,0,0,.071.378l2.362,2.372L9.583,9.116,7.451,6.985a.342.342,0,0,0-.483.483L9.1,9.6l-.954.953ZM17.211,2.465l1.224,1.222L3.371,18.748l-1.232-1.23ZM3.807,21.724a.632.632,0,0,1-.891,0L.866,19.678c-.612-.644.432-1.247.79-1.677L4.6,20.937Zm1.272-1.271L3.855,19.231,18.919,4.17,20.15,5.4Zm16.3.948a1.757,1.757,0,0,1-2.437,0l-6.9-6.935L13,13.505l6.767,6.767a.342.342,0,0,0,.484-.484l-6.767-6.767,1-1,6.9,6.926A1.741,1.741,0,0,1,21.383,21.4Z"
                      id="serives"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Support & Maintenance
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Digonto provides full support and regular maintenance as per
                requirement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 lg:p-16 mt-20 bg-[#f8f8f8]">
        <div>
          <h1 className="uppercase text-center text-3xl font-bold text-[#333333]">
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
      <section className="lg:p-[20px_120px] p-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 items-center ">
          <div>
            <img src={engagement} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#393939]">
              We provide the opportunity to
              <span className="text-[#A41F5C]">evaluate</span> our services
              before any formal engagement.
            </h1>
          </div>
        </div>
      </section>
      <Call></Call>
    </div>
  );
};

export default MobileDev;
