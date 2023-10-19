import React from "react";
import engagement from "../../../assets/images/engagement.png";
import Custom_Soft from "../../../assets/images/home/custom-software.png";
import Office from "../../../assets/images/office.jpg";
import Call from "../../../components/Call/Call";
const SoftDev = () => {
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
            Custom Software Development
          </p>
        </div>
      </div>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mt-10 items-center">
          <div className="px-6 lg:px-20">
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              Custom Software Development
            </h1>
            <p className="mt-6 text-base leading-6 whitespace-normal text-[#333333]">
              We offer our customers a wealth of software expertise. We create
              diverse and complex software solutions for any business need. We
              will transform your ideas into reality from scratch, designed
              especially for your business. Our team works autonomously but
              communicates and reports status regularly.
            </p>
            <p className="mt-4 text-base leading-6 whitespace-normal text-[#333333]">
              With Digonto you get quality software and perfect service every
              time.
            </p>
          </div>
          <div className="px-6 lg:px-20">
            <img src={Custom_Soft} alt="" />
          </div>
        </div>
      </section>
      <section>
        <h1 className="px-4 mt-10 lg:px-20 capitalize text-3xl font-bold text-[#A41F5C]">
          Why Work With Digonto
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center md:px-16 lg:px-28 px-4 mt-10">
          <div>
            <div>
              <svg
                fill="#A41F5C"
                className="h-12 w-12"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Layer_1" />
                <g id="Layer_2">
                  <g>
                    <g>
                      <g>
                        <path d="M407.7,441.4H104.3c-4.1,0-7.5-3.4-7.5-7.5V152.6c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5v273.8h288.4V85.6H167.9      c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h239.8c4.1,0,7.5,3.4,7.5,7.5v355.8C415.2,438,411.8,441.4,407.7,441.4z" />
                      </g>
                      <g>
                        <path d="M167.9,160.1h-63.5c-2.9,0-5.6-1.7-6.8-4.4c-1.2-2.7-0.8-5.8,1.1-8l63.5-74.5c2-2.4,5.4-3.3,8.3-2.2      c2.9,1.1,4.9,3.9,4.9,7v74.5C175.4,156.8,172,160.1,167.9,160.1z M120.6,145.1h39.8V98.5L120.6,145.1z" />
                      </g>
                    </g>
                    <g>
                      <path d="M357.5,160.1H211.9c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h145.5c4.1,0,7.5,3.4,7.5,7.5S361.6,160.1,357.5,160.1z" />
                    </g>
                    <g>
                      <path d="M357.5,211.2H211.9c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h145.5c4.1,0,7.5,3.4,7.5,7.5S361.6,211.2,357.5,211.2z" />
                    </g>
                    <g>
                      <path d="M357.5,262.3H211.9c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h145.5c4.1,0,7.5,3.4,7.5,7.5S361.6,262.3,357.5,262.3z" />
                    </g>
                    <g>
                      <path d="M357.5,313.4H211.9c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h145.5c4.1,0,7.5,3.4,7.5,7.5S361.6,313.4,357.5,313.4z" />
                    </g>
                    <g>
                      <path d="M279.6,364.5h-67.6c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h67.6c4.1,0,7.5,3.4,7.5,7.5S283.7,364.5,279.6,364.5z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                experience
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                A decade of experience in custom software development. We are
                focused on bringing value to our customers and on helping them
                succeed in the marketplace.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                enable-background="new 0 0 64 64"
                className="h-12 w-12"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <polygon
                    fill="#A41F5C"
                    points="24,29 27,29 27,32 28,32 28,23 28,22 24,22 24,23 27,23 27,28 24,28 24,23 23,23 23,32 24,32  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="31,29 35,29 35,23 34,23 34,28 31,28 31,23 34,23 34,22 30,22 30,32 31,32  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="40,31 39,31 39,23 40,23 40,22 37,22 37,23 38,23 38,31 37,31 37,32 40,32  "
                  />
                  <path
                    d="M19,8.429v3.811l5,4V19h-4v3h-4.763l-2.671-3.271C12.834,18.389,13,17.966,13,17.5c0-1.104-0.896-2-2-2   s-2,0.896-2,2s0.896,2,2,2c0.275,0,0.538-0.056,0.776-0.157L14.763,23H20v2h-6.207l-1.783,1.783C11.712,26.607,11.37,26.5,11,26.5   c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2c0-0.37-0.107-0.712-0.283-1.01l1.49-1.49H20v5h-6.207l-1.783,1.783   C11.712,32.607,11.37,32.5,11,32.5c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2c0-0.37-0.107-0.712-0.283-1.01l1.49-1.49H20v3h4   v1c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v-3h5.793l1.49,1.49   C51.107,33.788,51,34.13,51,34.5c0,1.104,0.896,2,2,2s2-0.896,2-2s-0.896-2-2-2c-0.37,0-0.712,0.107-1.01,0.283L50.207,31H44v-2   h6.203l1.517-1.476C52.067,27.817,52.51,28,53,28c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2c0,0.247,0.051,0.481,0.133,0.7   L49.797,28H44v-5h5.237l2.986-3.657C52.462,19.444,52.725,19.5,53,19.5c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2   c0,0.466,0.166,0.889,0.434,1.229L48.763,22H44v-3h-4v-2.76l5-4V8.429c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2   s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929v3.331l-5,4V19h-4v-4.756l5-3.917V8.429c0.861-0.223,1.5-0.999,1.5-1.929   c0-1.104-0.896-2-2-2s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929V9.84l-5,3.917V19h-4v-5.244L25,9.84V8.429   c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929v1.898l5,3.917V19h-4v-3.24l-5-4   V8.429c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2s-2,0.896-2,2C17.5,7.43,18.139,8.206,19,8.429z M11,18.5   c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S11.552,18.5,11,18.5z M11,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1   S11.552,29.5,11,29.5z M11,35.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S11.552,35.5,11,35.5z M53,33.5c0.552,0,1,0.448,1,1   s-0.448,1-1,1s-1-0.448-1-1S52.448,33.5,53,33.5z M53,25c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S52.448,25,53,25z M53,16.5   c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S52.448,16.5,53,16.5z M43.5,6.5c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1   S43.5,7.052,43.5,6.5z M38.5,6.5c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S38.5,7.052,38.5,6.5z M23.5,6.5   c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S23.5,7.052,23.5,6.5z M25.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1   S25.5,37.377,25.5,37.929z M30.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1S30.5,37.377,30.5,37.929z M35.5,37.929   c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1S35.5,37.377,35.5,37.929z M40.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1   s0.448-1,1-1S40.5,37.377,40.5,37.929z M43,20v2v1v5v1v2v1v2H21v-2v-1v-5v-1v-2v-1v-2H43z M19.5,5.5c0.552,0,1,0.448,1,1   s-0.448,1-1,1s-1-0.448-1-1S18.948,5.5,19.5,5.5z"
                    fill="#A41F5C"
                  />
                  <path
                    d="M57,10H46v1h11c0.551,0,1,0.449,1,1v32H6V12c0-0.551,0.449-1,1-1h11v-1H7c-1.1,0-2,0.9-2,2v32v0.288V47   c0,1.1,0.9,2,2,2h18.714l-1.429,5H21c-1.104,0-2,0.896-2,2v1h26v-1c0-1.104-0.896-2-2-2h-3.286l-1.429-5H57c1.1,0,2-0.9,2-2v-2.175   V44V12C59,10.9,58.1,10,57,10z M40,55h3c0.551,0,1,0.449,1,1H20c0-0.551,0.449-1,1-1h3H40z M38.674,54H25.326l1.429-5h10.491   L38.674,54z M58,47c0,0.551-0.449,1-1,1H38H26H7c-0.551,0-1-0.449-1-1v-2h52V47z"
                    fill="#A41F5C"
                  />
                  <polygon
                    fill="#A41F5C"
                    points="21,10 21,11 23.237,11 23,10.814 23,10  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="35.897,11 37.174,10 26.826,10 28.103,11  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="43,10 41,10 41,10.814 40.763,11 43,11  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="33.344,13 34.621,12 29.379,12 30.656,13  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="7,12 7,42 57,42 57,12 46,12 46,12.721 45.651,13 56,13 56,41 8,41 8,13 18.349,13 18,12.721    18,12  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="25.791,13 24.514,12 21.901,12 23.151,13  "
                  />
                  <polygon
                    fill="#A41F5C"
                    points="38.209,13 40.849,13 42.099,12 39.486,12  "
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Full-Cycle Development Services
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                From ideation to maintenance and upgrades, we can be your
                partner for the entire software development process.
              </p>
            </div>
          </div>
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
                <path d="M382.56,349.89l0-94.3a30.52,30.52,0,0,0-47.74-25.23v-9.93a30.49,30.49,0,0,0-47.87-25.12,30.45,30.45,0,0,0-47.6-23.78V99.8a30.55,30.55,0,0,0-61.1,0V229.11l-37.15,40.15a44.14,44.14,0,0,0-11.59,27.6c0,.13-.08.25-.08.39a6.22,6.22,0,0,0,.15.75,43.51,43.51,0,0,0,.56,8.89l8.48,46.72a43.16,43.16,0,0,0,9.92,20.76l29.71,40.22v64.72A6.68,6.68,0,0,0,184.9,486H355.33a6.68,6.68,0,0,0,6.69-6.69v-57l1.08-1.09C383,401.39,382.77,375.2,382.56,349.89ZM352,238.41a17.2,17.2,0,0,1,17.18,17.18v34.17l-34.38-3.92V255.59A17.21,17.21,0,0,1,352,238.41Zm-47.74-35.16a17.2,17.2,0,0,1,17.18,17.18v63.89l-34.36-3.91v-60A17.2,17.2,0,0,1,304.23,203.25Zm-152.49,148-8.47-46.72c0-.19,0-.38,0-.56h35v36.92l-25.86,12.21C152.19,352.44,151.86,351.87,151.74,351.22Zm74.2-155.61H191.58V140.85h34.36ZM191.58,209h34.36v64.46l-34.36-3.91Zm47.73,0h34.37v69.9L239.31,275Zm17.18-29.4a17.08,17.08,0,0,1,16.95,16H239.55A17.07,17.07,0,0,1,256.49,179.59Zm-47.73-97A17.19,17.19,0,0,1,225.94,99.8v27.68H191.58V99.8A17.19,17.19,0,0,1,208.76,82.63ZM178.21,248.8v41.76H144a30.49,30.49,0,0,1,6.88-12.21ZM158.9,366c-.24-.28-.37-.63-.6-.91l19.91-9.41v36.43Zm32.68,60.29H348.64v46.36H191.58ZM353.64,411.8l-1.08,1.09h-161V283l177.59,20.22,0,46.77C369.38,374.63,369.55,395.89,353.64,411.8Z" />
                <path d="M151.37,140.85a6.68,6.68,0,0,0,6.68-6.69V90.09a50.71,50.71,0,0,1,101.42,0v44.07a6.69,6.69,0,1,0,13.37,0V90.09a64.08,64.08,0,1,0-128.16,0v44.07A6.68,6.68,0,0,0,151.37,140.85Z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Transparent Process
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We ensure full transparency and effective communication to help
                you monitor progress while achieving your target.
              </p>
            </div>
          </div>
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
                <path d="M279.8,163.45a72.52,72.52,0,1,0,51.28,21.24A72.59,72.59,0,0,0,279.8,163.45Zm0,134.73A62.22,62.22,0,1,1,342,236,62.29,62.29,0,0,1,279.8,298.18Z" />
                <path d="M378.55,292.17a112.68,112.68,0,0,0,11.25-27.73l33.72-3.75a5.14,5.14,0,0,0,4.58-5.12v-41a5.14,5.14,0,0,0-4.58-5.12l-34.21-3.78a112.34,112.34,0,0,0-11.24-26.73l21.16-26.46a5.15,5.15,0,0,0-.38-6.86l-29-29a5.17,5.17,0,0,0-6.87-.38l-26.42,21.15a119.91,119.91,0,0,0-27.35-11.16l-3.78-34a5.14,5.14,0,0,0-5.12-4.58h-41a5.16,5.16,0,0,0-5.13,4.58l-3.77,34a112.81,112.81,0,0,0-27.58,11.48L196,116.22a5.17,5.17,0,0,0-6.87.38l-29,29a5.15,5.15,0,0,0-.38,6.86l21.53,26.92A109.12,109.12,0,0,0,170,206.56l-33.94,3.78a5.15,5.15,0,0,0-4.59,5.12v41a5.14,5.14,0,0,0,4.59,5.11L170,265.35a108.38,108.38,0,0,0,11.24,27.19l-21.53,26.93a5.15,5.15,0,0,0,.38,6.86l29,29a5.16,5.16,0,0,0,6.87.38l26.82-21.45a112.77,112.77,0,0,0,27.59,11.46l3.77,34a5.16,5.16,0,0,0,5.13,4.58h41a5.14,5.14,0,0,0,5.12-4.58l3.78-34A112.94,112.94,0,0,0,337.26,334l26.36,21.08a5.15,5.15,0,0,0,6.86-.38l29-29a5.16,5.16,0,0,0,.38-6.86Zm-12.09,52-23.26-18.6-1.17-1.4a5.14,5.14,0,0,0-6.73-1A102.37,102.37,0,0,1,303,336.64a5.15,5.15,0,0,0-4,5v2.47L295.7,374H263.9l-3.32-29.83v-2.47a5.15,5.15,0,0,0-4-5l-.94-.22a102.35,102.35,0,0,1-30.56-12.82,5.16,5.16,0,0,0-6,.39l-25.92,20.8L170.67,322.3l19-23.74,1.93-2.51a5.17,5.17,0,0,0,.3-5.85,99.06,99.06,0,0,1-12.62-30.44,5.14,5.14,0,0,0-4-3.9l-3.33-.64-30.11-3.36V220.07l30.4-3.39,2.86-.48a5.17,5.17,0,0,0,4.17-3.93,99.34,99.34,0,0,1,12.64-30.55,5.15,5.15,0,0,0-.31-5.87l-20.9-26.22,22.48-22.48L216.68,146l2.34,2a5.15,5.15,0,0,0,6.3.3l.73-.52a102.62,102.62,0,0,1,30.53-12.45,5.15,5.15,0,0,0,4-5V127.8L263.9,98h31.8L299,127.81v2.47a5.15,5.15,0,0,0,4,5,108.08,108.08,0,0,1,31.44,12.79,5.17,5.17,0,0,0,6.16-.59l25.2-20.34,22.48,22.48L369.38,173.3l-.07.09-1.69,2.21a5.44,5.44,0,0,0-.81,4,5.51,5.51,0,0,0,1.16,2.53,102.56,102.56,0,0,1,12.3,29.73,5.15,5.15,0,0,0,4.93,4l2.48,0,30.12,3.35V251l-30,3.34-2.61.25a5.16,5.16,0,0,0-4.53,4,102.56,102.56,0,0,1-12.88,31.64,5.14,5.14,0,0,0,.78,6.39l1.69,1.65,18.73,23.42Z" />
                <path d="M448.44,114.1c-21.22-42.31-67.25-92.49-166.18-92.49h-2.5C207,22.23,152.9,42.16,118.86,80.84,74.27,131.51,77,200.47,80.3,227.76a39.12,39.12,0,0,1-4.1,22.53L42.43,316.41a22.55,22.55,0,0,0,12.34,31.42L85.41,359A21.53,21.53,0,0,1,99.29,376l6.12,39.87A45.9,45.9,0,0,0,157,454.22l64.89-9.12v40.14a5.15,5.15,0,0,0,10.3,0V439.17a5.11,5.11,0,0,0-1.77-3.88,5.18,5.18,0,0,0-4.09-1.22L155.57,444a35.59,35.59,0,0,1-40-29.72l-6.13-39.87A31.82,31.82,0,0,0,89,349.36l-30.64-11.2a12.25,12.25,0,0,1-6.7-17.07L85.38,255a49.57,49.57,0,0,0,5.16-28.43c-3.1-25.92-5.79-91.34,36.06-138.9,32-36.38,83.58-55.13,153.25-55.72,75.6-.67,130.58,29.38,159.38,86.8,44.32,88.36,16.64,223.36-37,294a5.24,5.24,0,0,0-1,3.12v69.39a5.15,5.15,0,1,0,10.3,0V417.57C466.11,344.41,495.68,208.28,448.44,114.1Z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Agile Methodology
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We make sure that your product runs smoothly at every level,
                ensuring active participation through agile process.
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
      </section>
      <Call></Call>
    </div>
  );
};

export default SoftDev;
