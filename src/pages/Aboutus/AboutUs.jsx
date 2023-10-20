import React from "react";
import Office from "../../assets/images/office.jpg";
import Call from "../../components/Call/Call";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <PageTitle title="Digonto Soft | About Us"></PageTitle>
      <div class="relative">
        <img
          src={Office}
          alt="Your Image"
          className="w-full md:h-[80vh] lg:h-[80vh] h-[50vh] shadow-none filter-none blur-md"
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase md:text-3xl lg:text-5xl text-base font-bold"
            data-aos="fade-up"
          >
            we are digonto soft
          </h1>
          <p
            className="text-white capitalize md:text-xl lg:text-xl text-base text-center mt-2"
            data-aos="fade-up"
          >
            a software solution provider
          </p>
        </div>
      </div>
      <section className=" bg-[#F8F8F8]">
        <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_150px_2fr] items-center p-[104px_52px] md:p-[104px_60px] lg:p-[104px_208px]">
          <div className="lg:px-14" data-aos="fade-right">
            <h1 className="uppercase lg:text-right text-left text-[80px] md:text-6xl lg:text-[72px]  leading-none font-bold text-[#333333]">
              <span className="text-[#A41F5C]">who </span>we are
            </h1>
          </div>
          <div className="mr-40 hidden lg:block">
            <div className="border-r-2 h-24 border-[#A41F5C]"></div>
          </div>
          <div className="place-self-start" data-aos="fade-left">
            <p className="text-base font-normal leading-6 text-[#333333]">
              Digonto is a premier provider of software development and testing
              services. Having talented software engineers on board, we craft
              compelling web, desktop, and mobile applications for our clients.
            </p>
            <br />
            <p className="text-base font-normal leading-6 text-[#333333]">
              Since our inception, we have partnered with numerous companies and
              delivered operational gains to startup, emerging, and established
              organizations in the United States and Canada.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="mt-10 uppercase text-center text-3xl font-bold text-[#333333]">
          benefits of working with digonto
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-20">
          <div data-aos="fade-up">
            <div className="flex items-center h-36 w-36 border-4 border-[#A41F5C] rounded-full">
              <div className="mx-auto">
                <svg
                  fill="#A41F5C"
                  className="h-20 w-20"
                  viewBox="0 0 154 155"
                  width="154"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M106.407 96.8913C111.542 102.976 114.23 109.624 114.119 117.272C113.966 127.809 108.553 135.741 100.947 142.254C92.0832 149.843 81.3711 153.044 69.9069 153.943C67.396 154.087 64.8793 154.095 62.3675 153.968C61.2825 153.947 60.2075 153.756 59.1817 153.401C55.071 151.912 54.4462 148.867 57.7062 146.002C60.9065 143.191 64.3602 140.658 67.443 137.729C69.8054 135.468 71.9448 132.984 73.8318 130.313C75.8297 127.501 76.0056 124.257 74.7671 120.518C72.7928 121.437 70.9019 122.169 69.1639 123.165C65.5199 125.253 63.4643 125.166 60.3381 122.422C57.3006 119.755 54.3156 117.028 51.2938 114.343C50.8442 113.992 50.3743 113.668 49.8866 113.373C48.0535 115.067 46.3496 116.757 44.523 118.301C42.1025 120.348 39.7016 120.401 38.131 118.589C36.6588 116.893 36.901 114.651 39.0282 112.471C40.5377 110.923 42.2626 109.584 43.5372 108.461C40.1098 104.278 36.6555 100.848 34.1719 96.8237C31.2696 92.1178 34.8565 87.9231 37.0979 83.3189C32.8192 83.0504 29.3006 83.8341 26.4724 86.0033C23.7734 88.1917 21.3394 90.6881 19.2199 93.4416C17.1669 95.975 15.57 98.8767 13.7474 101.599C12.0291 104.166 10.2688 106.864 6.65102 106.491C4.14644 106.233 0.654067 101.721 0.422379 98.33C-0.102691 90.599 0.881819 83.0753 4.49168 76.0867C11.1049 63.2881 21.523 54.9657 35.0947 50.5131C40.7812 48.6478 46.5098 49.2418 52.3098 51.0087C52.6314 50.6385 53.0088 50.2697 53.3107 49.8476C68.9736 27.9581 90.3183 14.0634 115.597 5.81196C124.206 3.00217 132.916 0.444402 142.093 0.21009C144.385 0.151676 146.679 -0.0235928 148.97 0.00266074C151.958 0.036134 153.448 1.09614 153.327 4.01488C153.172 9.66322 152.644 15.2951 151.744 20.8736C148.056 41.8521 137.967 59.8443 124.863 76.254C119.763 82.6415 114.02 88.5177 108.563 94.621C107.918 95.3403 107.232 96.0243 106.407 96.8913ZM55.4163 106.628C58.8292 109.34 61.3148 111.468 63.9867 113.323C64.4408 113.537 64.9369 113.646 65.4389 113.644C65.9408 113.641 66.4358 113.527 66.8877 113.308C71.1231 111.063 75.4543 108.915 79.3969 106.215C93.4392 96.5986 106.143 85.4257 116.822 72.1336C122.616 64.9224 127.917 57.3167 133.55 49.7426L100.91 19.4316C99.8323 19.9355 98.7827 20.4966 97.7652 21.1125C91.3987 25.3374 84.9081 29.3961 78.7602 33.9196C71.8687 38.9892 66.0371 45.1843 60.8311 52.0129C52.1969 63.3367 47.1136 76.5599 40.7248 89.0828C40.0895 90.3299 40.4459 92.8417 41.3464 93.9568C43.6901 96.8598 46.5925 99.3126 49.7416 102.406C54.6641 97.3035 58.9959 92.5352 63.6454 88.0938C66.324 85.689 69.196 83.5087 72.2323 81.575C73.8285 80.4907 75.8664 80.1212 77.3268 81.7864C78.8068 83.4745 77.5322 85.1277 76.4919 86.4844C75.2622 88.0169 73.9298 89.4642 72.504 90.8162C69.5505 93.7356 66.5904 96.6465 63.5476 99.4701C60.9951 101.843 58.3212 104.081 55.4163 106.628ZM147.141 6.3889C133.175 6.41712 120.848 11.6094 108.28 15.8349L108.056 16.7045L136.962 41.0731C141.915 33.2233 145.713 20.2816 147.141 6.3889ZM77.9707 141.64C89.7309 139.425 98.8422 133.46 103.962 122.528C107.375 115.232 104.991 108.423 100.968 101.949C94.1966 107.118 87.7199 112.064 81.2445 117.008C86.3449 126.009 83.7327 133.936 77.9707 141.64ZM48.698 56.4944C31.8839 53.7377 8.64104 76.4733 10.1486 92.0817C17.0146 81.239 25.8253 74.7064 39.084 77.0567L48.698 56.4944Z"
                    fill="#A41F5C"
                  />
                  <path
                    d="M14.6051 140.579C15.1033 139.678 15.6382 138.038 16.7054 136.898C20.7301 132.601 24.9024 128.441 29.0774 124.288C30.3034 123.068 31.8543 122.299 33.4499 123.601C35.1327 124.974 34.3963 126.615 33.402 127.973C29.989 132.633 26.5682 137.293 22.9616 141.802C21.8888 143.034 20.5253 143.979 18.9947 144.55C16.7225 145.446 14.5257 143.644 14.6051 140.579Z"
                    fill="#A41F5C"
                  />
                  <path
                    d="M51.9876 123.87C54.4075 123.936 56.1665 126.118 55.0901 127.808C52.3487 132.062 49.3371 136.136 46.074 140.004C44.905 141.404 42.8061 141.206 41.3214 139.866C40.6426 139.292 40.1985 138.488 40.0735 137.607C39.9485 136.727 40.1513 135.831 40.6434 135.09C41.5342 133.607 42.5933 132.232 43.7998 130.991C45.587 129.088 47.4753 127.273 49.4167 125.529C50.22 124.897 51.0807 124.342 51.9876 123.87Z"
                    fill="#A41F5C"
                  />
                  <path
                    d="M30.3682 105.409C29.9062 106.43 29.3605 107.411 28.7366 108.341C25.689 112.145 22.5946 115.911 19.4534 119.638C18.8631 120.274 18.1765 120.813 17.4187 121.234C15.8501 122.199 14.2552 122.197 12.9904 120.769C11.6836 119.294 11.9737 117.656 13.2838 116.387C17.5723 112.23 21.91 108.121 26.3337 104.109C26.912 103.584 28.1433 103.499 28.9893 103.655C29.4973 103.749 29.8465 104.705 30.3682 105.409Z"
                    fill="#A41F5C"
                  />
                  <path
                    d="M99.4671 35.7334C103.729 35.6749 107.015 37.4181 110.313 40.1649C113.732 43.0121 116.286 46.049 117.548 50.2935C120.461 60.111 114.697 67.338 105.35 68.6599C97.775 69.731 91.3495 66.6114 86.6757 60.6814C82.672 55.6 82.5638 49.6871 85.3407 44.0052C88.1407 38.2721 93.1846 35.7944 99.4671 35.7334ZM90.4707 51.4625C91.5654 53.3514 92.3511 55.7595 93.9821 57.2317C95.6715 58.7564 98.1281 59.5118 100.344 60.3545C103.255 61.4624 105.775 60.2889 107.753 58.2294C109.668 56.2374 109.739 53.7354 108.803 51.1869C107.329 47.1688 103.891 45.1524 100.438 43.3337C97.3373 41.7008 94.3949 42.6774 92.6274 45.7353C91.7262 47.2915 91.3232 49.1358 90.4707 51.4625Z"
                    fill="#A41F5C"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h1 className="mt-10 capitalize text-3xl font-bold text-[#A41F5C]">
                quick start
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Our teams can be ramped up quickly and managed autonomously to
                implement and execute agreed plans.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex items-center h-36 w-36 border-4 border-[#A41F5C] rounded-full">
              <div className="mx-auto">
                <svg
                  id="Layer_1"
                  className="h-20 w-20"
                  fill="#A41F5C"
                  version="1.1"
                  viewBox="0 0 66 66"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path d="M28.88,27.35c0-0.73-0.59-1.33-1.33-1.33c-0.73,0-1.33,0.6-1.33,1.33c0,0.74,0.6,1.33,1.33,1.33   C28.29,28.69,28.88,28.1,28.88,27.35z" />
                    <path d="M38.46,28.69c0.74,0,1.33-0.59,1.33-1.33c0-0.73-0.59-1.33-1.33-1.33c-0.73,0-1.33,0.6-1.33,1.33   C37.12,28.1,37.72,28.69,38.46,28.69z" />
                    <path d="M33,36.21c0.87,0,1.74-0.33,2.4-0.99c0.2-0.19,0.2-0.51,0-0.71c-0.2-0.2-0.51-0.2-0.71,0c-0.94,0.93-2.46,0.93-3.4,0   c-0.19-0.19-0.51-0.19-0.71,0c-0.19,0.2-0.19,0.51,0,0.71C31.26,35.88,32.13,36.21,33,36.21z" />
                    <path d="M33,32.14c0.83,0,1.5-0.67,1.5-1.5c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5c0,0.27-0.22,0.5-0.5,0.5s-0.5-0.22-0.5-0.5   c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5C31.5,31.47,32.17,32.14,33,32.14z" />
                    <path d="M33,12.4c-1.05,0-1.91,0.86-1.91,1.91c0,1.06,0.86,1.92,1.91,1.92c1.05,0,1.91-0.86,1.91-1.92   C34.91,13.26,34.05,12.4,33,12.4z M33,15.23c-0.5,0-0.91-0.41-0.91-0.92c0-0.5,0.41-0.91,0.91-0.91s0.91,0.41,0.91,0.91   C33.91,14.82,33.5,15.23,33,15.23z" />
                    <path d="M61.29,62.72h-4.41v-9.53c0-4.09-2.61-7.67-6.5-8.93l-5.36-1.74c0,0-0.01,0-0.01-0.01l-1.81-0.59l-3.11-1.01v-3.35   c2.04-2.03,3.57-4.9,4.23-8.24c1.39-0.64,2.31-2.06,2.31-3.62c0-0.32-0.05-0.64-0.13-0.95l0.7,0c0,0,0.01,0,0.01,0   c0.64,0,1.25-0.25,1.71-0.7c0.46-0.46,0.71-1.06,0.71-1.71c0-0.65-0.25-1.26-0.7-1.72c-0.46-0.46-1.06-0.71-1.71-0.72l-0.28,0   v-1.19c0-1.53-0.25-3.02-0.73-4.44c0,0,0,0,0,0c0,0,0,0,0,0c-0.67-2.03-1.83-3.9-3.36-5.42c-0.2-0.2-0.41-0.4-0.61-0.56   c0,0,0,0,0,0c0,0,0,0,0,0C41,7.2,39.56,6.34,37.98,5.73v-1.4c0-1.13-0.92-2.04-2.04-2.04h-5.87c-1.13,0-2.04,0.92-2.04,2.04v1.4   C26.44,6.34,25,7.2,23.76,8.31c0,0,0,0,0,0c-1.84,1.62-3.22,3.69-3.97,5.98c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0   c-0.49,1.42-0.73,2.91-0.73,4.44v1.1l-0.26,0c0,0-0.01,0-0.01,0c-1.33,0-2.42,1.08-2.42,2.41c0,1.34,1.08,2.43,2.41,2.43l0.74,0   c-0.09,0.34-0.15,0.68-0.15,1.04c0,1.56,0.92,2.98,2.31,3.62c0.66,3.34,2.19,6.21,4.23,8.24v3.35l-4.89,1.59l-5.4,1.75   c-3.89,1.25-6.5,4.84-6.5,8.93v9.53h-4.4c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5h4.9h20.37h6.03h20.37h4.91   c0.28,0,0.5-0.22,0.5-0.5S61.57,62.72,61.29,62.72z M42.76,42.84l1.32,0.43l-4.94,7.6c-0.13,0.21-0.34,0.35-0.58,0.39   c-0.24,0.05-0.49-0.01-0.69-0.15l-2.01-1.44l0,0l-2.11-1.51l3.29-3.47l2.7-2.84L42.76,42.84z M35.25,50.47l0.61,0.61l-1.58,1.58   h-2.57l-1.58-1.58l0.58-0.58L33,48.86L35.25,50.47z M26.9,41.09v-2.61c1,0.8,2.08,1.39,3.2,1.77c0,0,0.01,0,0.01,0   c0.28,0.1,0.57,0.18,0.86,0.24c0.05,0.01,0.1,0.02,0.15,0.03c0.25,0.05,0.5,0.09,0.75,0.13c0.07,0.01,0.13,0.02,0.2,0.03   c0.31,0.03,0.62,0.05,0.93,0.05c0.31,0,0.62-0.02,0.92-0.05c0.07-0.01,0.14-0.02,0.21-0.03c0.25-0.03,0.5-0.07,0.74-0.12   c0.06-0.01,0.11-0.02,0.17-0.04c0.28-0.06,0.56-0.14,0.83-0.23c0.02-0.01,0.03-0.01,0.05-0.02c0.92-0.31,1.8-0.77,2.65-1.37   c0.01-0.01,0.01-0.01,0.02-0.02c0.17-0.12,0.35-0.25,0.51-0.38v2.61l-3.19,3.37L33,47.52L26.9,41.09z M42.15,9.58   c1.3,1.29,2.29,2.86,2.93,4.56l-5.02,1.67l2.08-6.24C42.14,9.58,42.15,9.58,42.15,9.58z M23.87,9.61l2.07,6.21l-5.02-1.67   C21.56,12.45,22.57,10.91,23.87,9.61z M20.05,18.73c0-1.25,0.19-2.47,0.54-3.64l5.98,1.99c0.05,0.02,0.1,0.03,0.16,0.03   c0.13,0,0.26-0.05,0.35-0.15c0.13-0.13,0.18-0.33,0.12-0.51l-2.53-7.59c1-0.85,2.12-1.53,3.35-2.04v3.33c0,0.28,0.22,0.5,0.5,0.5   s0.5-0.22,0.5-0.5V4.33c0-0.58,0.47-1.04,1.04-1.04h5.87c0.58,0,1.04,0.47,1.04,1.04v5.81c0,0.28,0.22,0.5,0.5,0.5   s0.5-0.22,0.5-0.5V6.81C39.2,7.32,40.32,8,41.33,8.85l-2.53,7.59c-0.06,0.18-0.01,0.38,0.12,0.51c0.1,0.1,0.22,0.15,0.35,0.15   c0.05,0,0.11-0.01,0.16-0.03l5.98-1.99c0.35,1.17,0.54,2.39,0.54,3.64v1.1H20.05V18.73z M18.78,23.68c-0.78,0-1.42-0.64-1.42-1.43   c0-0.38,0.15-0.74,0.42-1c0.27-0.27,0.62-0.41,1-0.41c0,0,0,0,0.01,0l28.43,0.09c0.78,0,1.42,0.64,1.42,1.43v0   c0,0.38-0.15,0.74-0.42,1c-0.27,0.27-0.62,0.41-1,0.41c0,0,0,0-0.01,0L18.78,23.68z M22.61,28.89c-0.04-0.17-0.15-0.32-0.32-0.38   c-1.15-0.43-1.92-1.55-1.92-2.79c0-0.36,0.06-0.71,0.18-1.04l24.92,0.08c0.11,0.31,0.16,0.63,0.16,0.96c0,1.24-0.77,2.36-1.92,2.79   c-0.16,0.06-0.31,0.2-0.32,0.38C42.92,39.01,27.08,46.58,22.61,28.89z M26.25,41.86l5.99,6.31l-4.12,2.95   c-0.2,0.14-0.44,0.2-0.69,0.15c-0.24-0.05-0.45-0.19-0.58-0.39l-4.94-7.6L26.25,41.86z M29.55,62.72H10.11v-9.53   c0-3.65,2.33-6.86,5.81-7.98l5-1.62l5.09,7.83c0.28,0.44,0.72,0.73,1.24,0.83c0.12,0.02,0.24,0.03,0.36,0.03   c0.39,0,0.77-0.12,1.1-0.35l0.5-0.36l1.76,1.76L29.55,62.72z M30.56,62.72l1.37-9.06h2.14l1.37,9.06H30.56z M55.88,62.72H36.44   l-1.42-9.39l1.76-1.76l0.5,0.36c0.33,0.23,0.71,0.35,1.1,0.35c0.12,0,0.24-0.01,0.36-0.03c0.51-0.1,0.95-0.39,1.24-0.83l5.09-7.83   l5,1.62c0,0,0,0,0,0c3.48,1.12,5.81,4.32,5.81,7.98V62.72z" />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="mt-10 capitalize text-3xl font-bold text-[#A41F5C]">
                top quality engineers
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Our hiring process is constantly active to ensure your access to
                the best IT professionals in the market.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex items-center h-36 w-36 border-4 border-[#A41F5C] rounded-full">
              <div className="mx-auto">
                <svg
                  enable-background="new 0 0 32 32"
                  className="h-20 w-20"
                  height="32px"
                  id="_x3C_Layer_x3E_"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="clipboard">
                    <g>
                      <g>
                        <g>
                          <path
                            d="M26.5,3h-5.958v1H26.5C26.776,4,27,4.225,27,4.5v25c0,0.275-0.224,0.5-0.5,0.5h-21      C5.224,30,5,29.775,5,29.5v-25C5,4.225,5.224,4,5.5,4h6V3h-6C4.673,3,4,3.673,4,4.5v25C4,30.327,4.673,31,5.5,31h21      c0.827,0,1.5-0.673,1.5-1.5v-25C28,3.673,27.327,3,26.5,3z"
                            fill="#A41F5C"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          d="M25.5,22c-0.276,0-0.5-0.224-0.5-0.5V6h-2.5C22.224,6,22,5.776,22,5.5S22.224,5,22.5,5h3     C25.776,5,26,5.224,26,5.5v16C26,21.776,25.776,22,25.5,22z"
                          fill="#A41F5C"
                        />
                      </g>
                      <g>
                        <path
                          d="M20.5,29h-14C6.224,29,6,28.776,6,28.5v-23C6,5.224,6.224,5,6.5,5h3C9.776,5,10,5.224,10,5.5     S9.776,6,9.5,6H7v22h13.5c0.276,0,0.5,0.224,0.5,0.5S20.776,29,20.5,29z"
                          fill="#A41F5C"
                        />
                      </g>
                      <g>
                        <path
                          d="M20.5,29c-0.064,0-0.129-0.013-0.191-0.038C20.122,28.885,20,28.702,20,28.5v-5     c0-0.276,0.224-0.5,0.5-0.5h5c0.202,0,0.385,0.122,0.462,0.309c0.078,0.187,0.035,0.402-0.108,0.545l-5,5     C20.758,28.949,20.63,29,20.5,29z M21,24v3.293L24.293,24H21z"
                          fill="#A41F5C"
                        />
                      </g>
                      <g id="customer_survey_questionnaire_2_">
                        <g>
                          <g>
                            <path
                              d="M9.653,18.016c-0.004,0-0.007,0-0.011,0c-0.142-0.003-0.276-0.066-0.368-0.174l-1.153-1.346       c-0.18-0.209-0.156-0.525,0.054-0.705c0.21-0.18,0.526-0.154,0.705,0.055l0.791,0.922l1.59-1.693       c0.189-0.201,0.505-0.211,0.707-0.021s0.211,0.506,0.022,0.707l-1.972,2.099C9.923,17.959,9.791,18.016,9.653,18.016z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M9.653,13.016c-0.004,0-0.007,0-0.011,0c-0.142-0.003-0.276-0.066-0.368-0.174l-1.153-1.346       c-0.18-0.209-0.156-0.525,0.054-0.705c0.21-0.18,0.526-0.154,0.705,0.055l0.791,0.922l1.59-1.693       c0.189-0.201,0.505-0.211,0.707-0.021s0.211,0.506,0.022,0.707l-1.972,2.099C9.923,12.959,9.791,13.016,9.653,13.016z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M17.5,23h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5       S17.776,23,17.5,23z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M22.5,21h-9c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9c0.276,0,0.5,0.224,0.5,0.5       S22.776,21,22.5,21z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M22.5,16h-3c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5       S22.776,16,22.5,16z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M20.5,18h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5       S20.776,18,20.5,18z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M17.5,16h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5       S17.776,16,17.5,16z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M22.5,11h-9c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9c0.276,0,0.5,0.224,0.5,0.5       S22.776,11,22.5,11z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M18.5,13h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5       S18.776,13,18.5,13z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M10.5,23h-2C8.224,23,8,22.776,8,22.5v-2C8,20.224,8.224,20,8.5,20h2c0.276,0,0.5,0.224,0.5,0.5v2       C11,22.776,10.776,23,10.5,23z M9,22h1v-1H9V22z"
                              fill="#A41F5C"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g>
                      <path
                        d="M20.5,7h-9C11.224,7,11,6.776,11,6.5v-3C11,2.673,11.673,2,12.5,2C12.776,2,13,2.224,13,2.5    S12.776,3,12.5,3C12.224,3,12,3.225,12,3.5V6h8V3.5C20,3.225,19.776,3,19.5,3C19.224,3,19,2.776,19,2.5S19.224,2,19.5,2    C20.327,2,21,2.673,21,3.5v3C21,6.776,20.776,7,20.5,7z"
                        fill="#A41F5C"
                      />
                    </g>
                    <g>
                      <path
                        d="M17.5,3C17.224,3,17,2.776,17,2.5C17,2.225,16.776,2,16.5,2h-1c-0.108,0-0.211,0.033-0.296,0.097    C15.074,2.192,15,2.339,15,2.5C15,2.776,14.776,3,14.5,3S14,2.776,14,2.5c0-0.475,0.228-0.926,0.609-1.207    C14.867,1.102,15.176,1,15.5,1h1C17.327,1,18,1.673,18,2.5C18,2.776,17.776,3,17.5,3z"
                        fill="#A41F5C"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="mt-10 capitalize text-3xl font-bold text-[#A41F5C]">
                End to End Management
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We are responsible for your project completion and team
                management from start to end, guaranteeing quality product
                output.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex items-center h-36 w-36 border-4 border-[#A41F5C] rounded-full">
              <div className="mx-auto">
                <svg
                  fill="#A41F5C"
                  id="Layer_1"
                  className="h-20 w-20"
                  version="1.1"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path d="M250,107.8c-0.4-2.3-2.4-4.1-4.7-4.2c-0.1,0-0.5,0-0.6,0l-4.6,0c-3.9,0-7.9,0-11.9,0c-2.5-10.4-6.6-20.2-12.2-29.4l1.4-1.4   c3.5-3.5,7-7.1,10.6-10.5c1.8-1.7,2-4.5,0.6-6.5c-7.9-11-17.5-20.5-28.5-28.4c-2-1.4-4.8-1.2-6.5,0.6c-1.9,2-3.9,3.9-5.8,5.8   c-2.1,2-4.1,4.1-6.1,6.2c-9.2-5.6-19.1-9.6-29.5-12.1c0-1.4,0-2.9,0-4.3l0-2.4c0-0.2,0-0.4,0-0.6l0-2.9c0-2.1,0-4.3,0-6.7   c0-2.5-1.8-4.6-4.2-5c-13-2.1-26.5-2.1-39.5,0c-2.5,0.4-4.3,2.7-4.2,5.3c0.1,2.1,0.1,4.3,0,6.4l0,2.9c0,0.2,0,0.4,0,0.6l0,2.4   c0,1.5,0,2.9,0,4.3c-10.4,2.5-20.3,6.5-29.5,12.1c-2-2.1-4.1-4.1-6.1-6.2c-1.9-1.9-3.9-3.9-5.8-5.8c-1.7-1.8-4.5-2-6.5-0.6   c-11,7.9-20.6,17.5-28.5,28.4c-1.5,2-1.2,4.8,0.6,6.5c3.6,3.5,7.1,7,10.6,10.5l1.4,1.4c-5.6,9.1-9.7,19-12.2,29.4   c-4-0.1-8-0.1-11.9,0l-4.6,0c-0.1,0-0.5,0-0.6,0c-2.4,0.1-4.4,1.9-4.7,4.2c-1.1,6.6-1.6,13.4-1.6,20.2c0,6.7,0.5,13.5,1.6,20.1   c0.4,2.3,2.2,4,4.5,4.2c0.4,0,0.9,0.1,1.3,0.1c3.4,0,6.7,0,10.1,0c2,0,4,0,6,0c2.5,10.5,6.7,20.5,12.4,29.7   c-2.3,2.2-4.6,4.5-6.8,6.8l-3.8,3.8c-0.6,0.6-1.1,1.1-1.5,1.5c-1.6,1.8-1.8,4.4-0.4,6.3c7.9,10.9,17.4,20.3,28.3,28.2   c1.9,1.4,4.6,1.2,6.3-0.4c0.2-0.2,0.4-0.4,0.5-0.5c2.3-2.4,4.6-4.7,6.9-7c1.5-1.5,3.1-3.1,4.6-4.6c9.2,5.6,19.1,9.7,29.6,12.2   c0,2.8,0,5.6,0,8.5c0,2.7,0,5.3,0,8.1c0,0.1,0,0.6,0,0.7c0.1,2.3,1.9,4.3,4.2,4.6c6.4,1,13.1,1.6,19.7,1.6c6.6,0,13.2-0.5,19.7-1.6   c2.3-0.4,4.1-2.3,4.2-4.6c0-0.1,0-0.7,0-0.8c0-2.7,0-5.3,0-8c0-2.8,0-5.6,0-8.5c10.5-2.5,20.4-6.6,29.6-12.2   c1.5,1.6,3.1,3.1,4.6,4.6c2.3,2.3,4.6,4.6,6.9,6.9c0.2,0.2,0.4,0.4,0.6,0.6c1.8,1.6,4.4,1.8,6.3,0.4c10.9-7.8,20.5-17.3,28.3-28.2   c1.4-1.9,1.2-4.6-0.4-6.3c-0.4-0.4-0.9-1-1.5-1.5l-3.8-3.8c-2.2-2.2-4.5-4.5-6.8-6.8c5.7-9.2,9.8-19.2,12.4-29.7c2,0,4,0,6,0   c3.4,0,6.7,0,10,0c0.5,0,1,0,1.4,0c2.3-0.2,4.1-1.9,4.5-4.2c1.1-6.6,1.6-13.3,1.6-20.1C251.6,121.2,251.1,114.5,250,107.8z    M240.7,142.2c-2.2,0-4.4,0-6.6,0c-3.1,0-6.2,0-9.4,0c-0.4,0-0.7,0-1,0c-2.3,0.2-4.1,1.8-4.6,4c-2.4,12-7.1,23.3-14,33.5   c-1.2,1.7-1.1,4,0,5.7c0.4,0.6,0.9,1.2,1.6,1.8c2.9,2.8,5.8,5.7,8.7,8.6l2.1,2.1c-5.8,7.4-12.5,14.1-20,19.9   c-1.4-1.4-2.9-2.9-4.3-4.3c-2.2-2.2-4.3-4.3-6.5-6.5c-0.6-0.6-1.2-1.2-1.9-1.6c-1.7-1.1-3.8-1.1-5.5,0   c-10.2,6.8-21.4,11.4-33.3,13.7c-1.9,0.4-3.4,1.8-3.9,3.7c-0.2,0.9-0.3,1.9-0.3,3c0.1,3.6,0.1,7.1,0.1,10.7c0,1.4,0,2.7,0,4.1   c-9.1,1.1-18.5,1.1-27.7,0c0-1.4,0-2.7,0-4.1c0-3.6,0-7.1,0.1-10.7c0-1.1-0.1-2.1-0.3-3c-0.5-1.9-2-3.4-3.9-3.7   c-12-2.3-23.2-6.9-33.3-13.7c-1.7-1.1-3.8-1.1-5.5,0c-0.7,0.4-1.3,1-1.9,1.6c-2.1,2.2-4.3,4.4-6.5,6.5c-1.4,1.4-2.9,2.8-4.3,4.3   c-7.5-5.8-14.2-12.5-20-19.9l2.1-2.1c2.9-2.9,5.7-5.8,8.7-8.6c0.6-0.6,1.1-1.2,1.5-1.8c1.2-1.7,1.2-3.9,0-5.7   c-6.9-10.2-11.6-21.5-14-33.5c-0.4-2.2-2.3-3.9-4.6-4c-0.3,0-0.7-0.1-1.1,0c-3.1,0-6.2,0-9.3,0c-2.2,0-4.3,0-6.6,0   c-0.6-4.7-0.9-9.5-0.9-14.2c0-4.8,0.3-9.6,0.9-14.3l0.7,0c4.5,0,9.2,0,13.8,0.1c1.3,0,2.4-0.1,3.4-0.3c1.9-0.5,3.3-2,3.6-3.9   c2.4-11.8,7-22.9,13.7-33c1.1-1.7,1.1-3.8,0.1-5.5c-0.7-1.1-1.6-2-2.8-3.2l-2-2c-2.5-2.5-5-5-7.5-7.5C44.2,50.7,51,44,58.6,38.1   c0.9,0.9,1.9,1.9,2.8,2.8c2.5,2.5,5,5,7.4,7.5c0.7,0.7,1.8,1.7,3.3,2.4c1.6,0.7,3.4,0.5,4.8-0.4C87,43.7,98.1,39.1,110,36.8   c1.9-0.4,3.4-1.8,3.9-3.6c0.2-0.9,0.3-1.8,0.3-2.9c-0.1-2.3-0.1-4.5,0-6.8l0-3.1c0-0.2,0-0.4,0-0.6l0-2.2c0-0.8,0-1.6,0-2.4   c9.2-1.1,18.5-1.1,27.7,0c0,0.8,0,1.6,0,2.4l0,2.2c0,0.2,0,0.4,0,0.6l0,3.1c0,2.3,0,4.5,0,6.8c0,1.1,0.1,2,0.3,2.9   c0.5,1.8,2,3.3,3.9,3.6c11.9,2.3,23,6.9,33.1,13.6c1.4,0.9,3.2,1.1,4.8,0.4c1.5-0.7,2.6-1.7,3.3-2.4c2.4-2.5,4.9-5,7.4-7.5   c0.9-0.9,1.9-1.9,2.8-2.8c7.6,5.9,14.4,12.6,20.2,20.1c-2.5,2.5-5,5-7.5,7.5l-2,2c-1.2,1.2-2.1,2.1-2.8,3.2c-1.1,1.7-1,3.8,0.1,5.5   c6.7,10.1,11.3,21.2,13.7,33c0.4,1.9,1.8,3.4,3.6,3.9c1,0.3,2.1,0.4,3.4,0.3c4.6-0.2,9.3-0.1,13.8-0.1l0.7,0   c0.6,4.7,0.9,9.6,0.9,14.3C241.6,132.8,241.3,137.5,240.7,142.2z M244.6,108.7L244.6,108.7L244.6,108.7L244.6,108.7z" />
                    <path d="M180.7,90.1c-4.1-5.8-9.2-10.8-15-14.9c-8.1-5.8-17.6-9.7-27.4-11.3c-6.8-1.1-13.9-1.1-20.7,0c-9.8,1.6-19.3,5.5-27.4,11.3   c-5.8,4.1-10.8,9.2-15,14.9c-5.8,8.1-9.7,17.5-11.4,27.3c-0.6,3.5-0.9,7-0.9,10.6c0,3.5,0.3,7.1,0.8,10.5   c1.6,9.9,5.6,19.4,11.5,27.5c4.1,5.7,9.1,10.7,14.9,14.8c8.1,5.8,17.6,9.7,27.4,11.3c3.4,0.5,6.9,0.8,10.3,0.8   c3.4,0,6.9-0.3,10.3-0.8c9.8-1.6,19.3-5.5,27.4-11.3c5.7-4.1,10.7-9.1,14.9-14.8c5.9-8.1,9.9-17.6,11.5-27.5c0,0,0,0,0,0   c0.6-3.5,0.8-7,0.8-10.5c0-3.6-0.3-7.1-0.9-10.6C190.5,107.6,186.5,98.2,180.7,90.1z M182.2,136.9c-1.4,8.3-4.7,16.4-9.7,23.2   c-3.5,4.8-7.7,9-12.6,12.5c-6.8,4.9-14.8,8.2-23.1,9.5c-5.8,0.9-11.7,0.9-17.5,0c-8.3-1.3-16.3-4.6-23.2-9.5   c-4.8-3.5-9.1-7.7-12.6-12.5c-5-6.9-8.3-14.9-9.7-23.2c-0.5-2.9-0.7-5.9-0.7-8.9c0-3,0.2-6,0.7-9c1.4-8.3,4.7-16.3,9.6-23.1   c3.5-4.9,7.8-9.1,12.7-12.6c6.8-4.9,14.8-8.2,23.1-9.5c2.9-0.5,5.8-0.7,8.8-0.7s5.9,0.2,8.8,0.7c8.3,1.3,16.3,4.6,23.1,9.5   c4.9,3.5,9.2,7.8,12.7,12.6c4.9,6.8,8.2,14.8,9.6,23.1c0.5,2.9,0.7,5.9,0.7,9C182.9,131,182.6,134,182.2,136.9z" />
                    <path d="M153.5,105.8L118,139.5l-15.3-15.9c-1.9-2-5.1-2.1-7.1-0.1c-2,1.9-2.1,5.1-0.1,7.1l18.8,19.5c1,1,2.3,1.5,3.6,1.5   c1.2,0,2.5-0.5,3.5-1.4l39.2-37.2c2-1.9,2.1-5.1,0.2-7.1C158.7,103.9,155.6,103.8,153.5,105.8z" />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="mt-10 capitalize text-3xl font-bold text-[#A41F5C]">
                Operational Efficiency
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Our cost effective services help reduce your costs to remain
                competitive without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Call></Call>
    </div>
  );
};

export default AboutUs;
