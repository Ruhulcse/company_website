import React from "react";
import engagement from "../../../assets/images/engagement.png";
import Custom_Soft from "../../../assets/images/home/custom-software.png";
import Web_app from "../../../assets/images/home/web-app.png";
import Office from "../../../assets/images/office.jpg";
import Call from "../../../components/Call/Call";
import PageTitle from "../../../components/shared/PageTitle/PageTitle";
const WebDev = () => {
  return (
    <div className="overflow-hidden">
      <PageTitle title="Digonto Soft | Web Application"></PageTitle>
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
            Web Application Development
          </p>
        </div>
      </div>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mt-10 items-center">
          <div className="px-4 lg:px-20">
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              Web Application Development
            </h1>
            <p className="mt-6 text-base leading-6 whitespace-normal text-[#333333]">
              Diganta looks beyond conventional solutions to design and develop
              disruptive web products with robust back end and eye-catching UI.
              Driven by passion, our team deals with all kinds of modern
              technologies that are required to build custom web applications
              for small, mid, and large enterprises. Our web application
              development experts evaluate your business needs and available
              technologies thoroughly to help you pick the most relevant web
              stack.
            </p>
          </div>
          <div className="px-4 lg:px-20">
            <img src={Web_app} alt="" />
          </div>
        </div>
      </section>
      <section>
        <h1 className="px-4 mt-6 lg:px-20 capitalize text-3xl font-bold text-[#A41F5C]">
          Our Web App Expertise
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center md:px-16 lg:px-28 px-4 mt-10">
          <div>
            <div>
              <svg
                viewBox="0 0 22.575 22.576"
                fill="#A41F5C"
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <g data-name="Layer 1" id="Layer_1-2">
                    <path
                      d="M21.321,3.192a.342.342,0,0,0,0,.684.571.571,0,0,1,.57.571V16.418h-2.28V.342A.342.342,0,0,0,19.269,0H3.306a.342.342,0,0,0-.342.342V16.418H.684V4.447a.571.571,0,0,1,.57-.571.342.342,0,0,0,0-.684A1.256,1.256,0,0,0,0,4.447V18.585a1.255,1.255,0,0,0,1.254,1.254H6.841v2.052h-2.4a.342.342,0,0,0,0,.684H18.129a.342.342,0,0,0,0-.684H15.734V19.839h5.587a1.255,1.255,0,0,0,1.254-1.254V4.447A1.256,1.256,0,0,0,21.321,3.192ZM3.648.684H18.927V3.192H3.648Zm0,3.192H18.927V7.762L16.794,9.5l-2.247-.754a.34.34,0,0,0-.337.069l-2.652,2.367L8.947,10.6a26.659,26.659,0,0,0-2.914,1.38l-2.385-.367ZM18.927,8.645v7.773H17.206V10.047ZM16.522,10.13v6.288H14.78V9.546Zm-2.426-.3v6.584H12v-4.71Zm-2.783,2v4.589h-2.1V11.361Zm-2.783-.34v4.929h-2.1V12.546Zm-4.882.817,2.1.323v3.789h-2.1Zm11.4,9.585H7.525V19.839H15.05Zm6.841-3.306a.57.57,0,0,1-.57.57H1.254a.571.571,0,0,1-.57-.57V17.1H21.891ZM13.582,1.7c.32.3-.176.8-.483.484S13.271,1.39,13.582,1.7Zm1.925.242a.342.342,0,0,1-.684,0A.342.342,0,0,1,15.507,1.94Zm1.724-.247c.316.31-.174.807-.484.489A.344.344,0,0,1,17.231,1.693ZM11.362,5.815a.342.342,0,0,1,.342-.342h2.734a.342.342,0,0,1,0,.684H11.7A.342.342,0,0,1,11.362,5.815Zm-6.117,0a.342.342,0,0,1,.342-.342H9.88a.342.342,0,0,1,0,.684H5.587A.342.342,0,0,1,5.245,5.815Zm6.8,2.281a.342.342,0,0,1-.342.342H9.426a.342.342,0,0,1,0-.684H11.7A.342.342,0,0,1,12.043,8.1ZM7.6,8.438H5.587a.342.342,0,0,1,0-.684H7.6A.342.342,0,0,1,7.6,8.438Z"
                      data-name="traffic monitoring"
                      id="traffic_monitoring"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Custom Web App Development
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Having years of expertise in the given field, we help businesses
                avail our best customized web app development solutions catering
                to a wide range of industry verticals in the most effective
                manner.
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
                    <g>
                      <path d="M232.82,401.1c-1.89,0-3.73-0.7-5.15-1.97l-76.31-68.27c-3.1-2.77-3.44-7.5-0.78-10.7L378.26,46.48     c10.32-12.4,24.86-19.88,40.95-21.07c16.11-1.19,31.57,4.09,43.59,14.84c23.74,21.24,26.38,57.06,6,81.56L238.76,398.32     c-1.34,1.61-3.28,2.61-5.37,2.76C233.2,401.1,233.01,401.1,232.82,401.1z M167.21,324.32L232,382.28l224.91-270.35     c15.03-18.06,13.09-44.48-4.43-60.15c-8.87-7.93-20.22-11.85-32.15-10.95c-11.86,0.87-22.59,6.39-30.2,15.54L167.21,324.32z" />
                    </g>
                    <g>
                      <path d="M129.28,445.98c-1.78,0-3.55-0.62-4.97-1.81c-2.24-1.88-3.23-4.87-2.55-7.72l27.01-112.9c0.63-2.64,2.61-4.76,5.2-5.57     c2.59-0.8,5.42-0.21,7.45,1.6l76.52,68.03c1.98,1.75,2.91,4.39,2.5,7c-0.42,2.61-2.14,4.82-4.56,5.87l-103.54,44.87     C131.37,445.77,130.32,445.98,129.28,445.98z M160.81,339.7l-20.41,85.31l78.24-33.9L160.81,339.7z" />
                    </g>
                  </g>
                  <g>
                    <path d="M503.27,486.75H8.73c-4.27,0-7.73-3.46-7.73-7.73V86.66c0-4.27,3.46-7.73,7.73-7.73h346.15c4.27,0,7.73,3.46,7.73,7.73    c0,4.27-3.46,7.73-7.73,7.73H16.45v376.9h486.82c4.27,0,7.73,3.46,7.73,7.73S507.54,486.75,503.27,486.75z" />
                  </g>
                  <g>
                    <path d="M503.27,486.75c-4.27,0-7.73-3.46-7.73-7.73V94.39h-20.92c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h28.65    c4.27,0,7.73,3.46,7.73,7.73v392.36C511,483.29,507.54,486.75,503.27,486.75z" />
                  </g>
                  <g>
                    <path d="M503.27,202.21H398.29c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h104.98c4.27,0,7.73,3.46,7.73,7.73    C511,198.75,507.54,202.21,503.27,202.21z" />
                  </g>
                  <g>
                    <path d="M265.17,202.21H8.73c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h256.44c4.27,0,7.73,3.46,7.73,7.73    C272.9,198.75,269.44,202.21,265.17,202.21z" />
                  </g>
                  <g>
                    <path d="M70.37,174.05c-18.47,0-33.49-15.02-33.49-33.49s15.02-33.49,33.49-33.49c18.46,0,33.48,15.02,33.48,33.49    S88.83,174.05,70.37,174.05z M70.37,122.53c-9.94,0-18.03,8.09-18.03,18.03s8.09,18.03,18.03,18.03s18.03-8.09,18.03-18.03    S80.31,122.53,70.37,122.53z" />
                  </g>
                  <g>
                    <path d="M152.79,174.05c-18.47,0-33.49-15.02-33.49-33.49s15.02-33.49,33.49-33.49s33.49,15.02,33.49,33.49    S171.26,174.05,152.79,174.05z M152.79,122.53c-9.94,0-18.03,8.09-18.03,18.03s8.09,18.03,18.03,18.03    c9.94,0,18.03-8.09,18.03-18.03S162.73,122.53,152.79,122.53z" />
                  </g>
                  <g>
                    <path d="M235.22,174.05c-18.47,0-33.49-15.02-33.49-33.49s15.02-33.49,33.49-33.49s33.48,15.02,33.48,33.49    S253.68,174.05,235.22,174.05z M235.22,122.53c-9.95,0-18.03,8.09-18.03,18.03s8.09,18.03,18.03,18.03    c9.94,0,18.03-8.09,18.03-18.03S245.16,122.53,235.22,122.53z" />
                  </g>
                  <g>
                    <path d="M402.67,196.94c-1.83,0-3.61-0.65-5.01-1.85l-77.9-66.34c-3.22-2.74-3.64-7.57-0.93-10.82l37.15-44.68    c1.32-1.59,3.22-2.58,5.29-2.76c1.96-0.18,4.11,0.48,5.67,1.83l77.73,66.56c3.21,2.75,3.61,7.57,0.91,10.81l-36.98,44.45    c-1.32,1.58-3.22,2.58-5.27,2.75C403.11,196.93,402.89,196.94,402.67,196.94z M335.6,121.94l66.13,56.32l27.11-32.59l-65.99-56.51    L335.6,121.94z" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                FRedesign Outdated Apps
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We can rework or modernize unfriendly and old-fashioned web
                interfaces in order to align them with the evolving needs of end
                users and current technologies.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                className="h-12 w-12"
                fill="#A41F5C"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16,27a6,6,0,1,1,6-6A6,6,0,0,1,16,27Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,16,17Z" />
                <path d="M24,30a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,1.42-1.42l4,4a1,1,0,0,1,0,1.42A1,1,0,0,1,24,30Z" />
                <path d="M7,25A7,7,0,0,1,7,11a1,1,0,0,1,0,2A5,5,0,0,0,7,23a1,1,0,0,1,0,2Z" />
                <path d="M25,25a1,1,0,0,1,0-2,5,5,0,0,0,0-10,1,1,0,0,1,0-2,7,7,0,0,1,0,14Z" />
                <path d="M25,13a1,1,0,0,1-1-1A8,8,0,0,0,8,12a1,1,0,0,1-2,0,10,10,0,0,1,20,0A1,1,0,0,1,25,13Z" />
                <path d="M9,25H7a1,1,0,0,1,0-2H9a1,1,0,0,1,0,2Z" />
                <path d="M25,25H23a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Third-Party Integrations
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Developers at Enosis can help in integrating your product with
                various third-party applications and services.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                className="h-12 w-12"
                fill="#A41F5C"
                enable-background="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="computer_website_check_result">
                  <g>
                    <g>
                      <g>
                        <g id="response_time_5_">
                          <circle cx="7.5" cy="4.5" fill="#A41F5C" r="0.5" />
                          <circle cx="5.5" cy="4.5" fill="#A41F5C" r="0.5" />
                          <circle cx="3.5" cy="4.5" fill="#A41F5C" r="0.5" />
                          <path
                            d="M30.5,7h-29C1.224,7,1,6.776,1,6.5S1.224,6,1.5,6h29C30.776,6,31,6.224,31,6.5S30.776,7,30.5,7z"
                            fill="#A41F5C"
                          />
                        </g>
                      </g>
                      <path
                        d="M1.5,22C1.224,22,1,21.776,1,21.5v-18C1,2.673,1.673,2,2.5,2h27C30.327,2,31,2.673,31,3.5v9     c0,0.276-0.224,0.5-0.5,0.5S30,12.776,30,12.5v-9C30,3.225,29.776,3,29.5,3h-27C2.224,3,2,3.225,2,3.5v18     C2,21.776,1.776,22,1.5,22z"
                        fill="#A41F5C"
                      />
                    </g>
                    <path
                      d="M22,31H10.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.827,0,1.5-0.673,1.5-1.5v-1    c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v1c0,0.563-0.187,1.082-0.501,1.5h5.002C18.187,29.582,18,29.063,18,28.5v-3    c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v3c0,0.827,0.673,1.5,1.5,1.5H22c0.276,0,0.5,0.224,0.5,0.5S22.276,31,22,31z"
                      fill="#A41F5C"
                    />
                    <path
                      d="M18.5,26h-16C1.673,26,1,25.327,1,24.5v-3C1,21.224,1.224,21,1.5,21h14c0.276,0,0.5,0.224,0.5,0.5    S15.776,22,15.5,22H2v2.5C2,24.775,2.224,25,2.5,25h16c0.276,0,0.5,0.224,0.5,0.5S18.776,26,18.5,26z"
                      fill="#A41F5C"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M18.5,14h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5     S18.776,14,18.5,14z"
                        fill="#A41F5C"
                      />
                    </g>
                    <g>
                      <path
                        d="M27.5,10h-10C17.224,10,17,9.776,17,9.5S17.224,9,17.5,9h10C27.776,9,28,9.224,28,9.5S27.776,10,27.5,10z     "
                        fill="#A41F5C"
                      />
                    </g>
                    <g>
                      <path
                        d="M27.5,12h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5     S27.776,12,27.5,12z"
                        fill="#A41F5C"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M7.5,14h-3C4.224,14,4,13.776,4,13.5S4.224,13,4.5,13h3C7.776,13,8,13.224,8,13.5S7.776,14,7.5,14z"
                        fill="#A41F5C"
                      />
                    </g>
                    <g>
                      <path
                        d="M14.5,10h-10C4.224,10,4,9.776,4,9.5S4.224,9,4.5,9h10C14.776,9,15,9.224,15,9.5S14.776,10,14.5,10z"
                        fill="#A41F5C"
                      />
                    </g>
                    <g>
                      <path
                        d="M14.5,12h-10C4.224,12,4,11.776,4,11.5S4.224,11,4.5,11h10c0.276,0,0.5,0.224,0.5,0.5S14.776,12,14.5,12z     "
                        fill="#A41F5C"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M24,27c-3.86,0-7-3.141-7-7s3.14-7,7-7c1.352,0,2.663,0.386,3.792,1.115       c0.232,0.15,0.298,0.459,0.148,0.691c-0.15,0.23-0.458,0.3-0.691,0.148C26.283,14.33,25.159,14,24,14c-3.309,0-6,2.691-6,6       s2.691,6,6,6s6-2.691,6-6c0-0.642-0.101-1.273-0.299-1.877c-0.086-0.263,0.057-0.545,0.319-0.631       c0.262-0.088,0.545,0.057,0.631,0.318C30.882,18.516,31,19.252,31,20C31,23.859,27.86,27,24,27z"
                            fill="#A41F5C"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M23.5,22.699c-0.004,0-0.008,0-0.012,0c-0.145-0.004-0.28-0.069-0.373-0.18l-2.5-3       c-0.176-0.213-0.147-0.528,0.064-0.705c0.213-0.176,0.527-0.147,0.705,0.064l2.133,2.561l6.215-6.865       c0.188-0.204,0.504-0.216,0.706-0.031c0.203,0.187,0.217,0.503,0.03,0.707l-6.6,7.287C23.773,22.641,23.641,22.699,23.5,22.699       z"
                            fill="#A41F5C"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Enterprise Portal Development
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Enosis aims at ensuring the overall success of your
                niche-specific online business, be it hospitality, healthcare,
                technology, real estate, e-commerce, etc.
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

export default WebDev;
