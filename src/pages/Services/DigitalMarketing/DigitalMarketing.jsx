import React from "react";
import engagement from "../../../assets/images/engagement.png";
import Custom_Soft from "../../../assets/images/home/custom-software.png";
import Office from "../../../assets/images/office.jpg";
import Call from "../../../components/Call/Call";
const DigitalMarketing = () => {
  return (
    <div className="overflow-hidden">
      <div class="relative">
        <img
          src={Office}
          alt="Your Image"
          className="w-full h-[80vh] shadow-none filter-none blur-md"
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase text-5xl font-bold"
            data-aos="fade-up"
          >
            our services
          </h1>
          <p
            className="text-white capitalize text-xl text-center mt-2"
            data-aos="fade-up"
          >
            Quality Assurance & Testing
          </p>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-2 items-center">
          <div className="px-20">
            <h1 className="capitalize text-3xl font-bold text-[#A41F5C]">
              Quality Assurance & Testing
            </h1>
            <p className="mt-6 text-base leading-6 whitespace-normal text-[#333333]">
              Reliability, efficiency, and expertise are the core principles of
              our QA services. With over a decade of testing experience, we are
              able to ensure quality of software products with reduced
              time-to-market, managing risks and operational costs. QA experts
              of Enosis will develop a software testing strategy to test and
              check every component of your software to eliminate possible
              issues.
            </p>
          </div>
          <div className="px-20">
            <img src={Custom_Soft} alt="" />
          </div>
        </div>
      </section>
      <section>
        <h1 className="px-20 capitalize text-3xl font-bold text-[#A41F5C]">
          Our QA & Testing Expertise
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 items-center md:px-16 lg:px-28 px-4 mt-20">
          <div>
            <div>
              <svg
                enable-background="new 0 0 128 128"
                fill="#A41F5C"
                className="h-12 w-12"
                height="128px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 128 128"
                width="128px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path d="M64.049,114.172v-2l-0.006,2c-27.642,0-50.129-22.486-50.129-50.128c0-27.642,22.487-50.13,50.129-50.13  s50.129,22.488,50.129,50.13C114.172,91.686,91.687,114.172,64.049,114.172z M64.043,17.914c-25.436,0-46.129,20.694-46.129,46.13  c0,25.436,20.693,46.128,46.129,46.128h0.006c25.433,0,46.123-20.692,46.123-46.128C110.172,38.608,89.479,17.914,64.043,17.914z" />
                <g>
                  <path d="M64.043,74.354c-1.104,0-2-0.896-2-2v-9.756c0-1.104,0.896-2,2-2c5.27,0,9.557-4.286,9.557-9.556   c0-5.271-4.287-9.56-9.557-9.56s-9.557,4.289-9.557,9.56c0,1.104-0.896,2-2,2s-2-0.896-2-2c0-7.477,6.081-13.56,13.557-13.56   S77.6,43.565,77.6,51.042c0,6.796-5.026,12.439-11.557,13.409v7.903C66.043,73.458,65.147,74.354,64.043,74.354z" />
                  <circle cx="64.042" cy="85.098" r="3.796" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Independent QA
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Diganta delivers application testing services for your software
                solutions to give you a better control over application quality
                and evaluate product compliance.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                id="Layer_1"
                className="h-12 w-12"
                fill="#A41F5C"
                version="1.1"
                viewBox="0 0 52 52"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <g>
                    <path
                      class="st0"
                      d="M49.5489655,31.3294582c0.125,0,0.25,0,0.375,0c1.4477654,0,1.4501648-2.25,0-2.25c-0.125,0-0.25,0-0.375,0    C48.1011963,29.0794582,48.0988007,31.3294582,49.5489655,31.3294582L49.5489655,31.3294582z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        class="st0"
                        d="M5.91535,3.6071351c12.4792919-0.0579834,24.9961815-0.4046152,37.4730148-0.1741138     c2.4198227,0.0447047,3.6880226-0.4664826,5.1330948,1.7431672c1.0507011,1.606617,0.8844833,2.6060305,0.8867722,4.4127808     c0.0040207,3.1739187,0.0080376,6.3478374,0.0120583,9.5217562c0.0036163,2.8565273,0.0072327,5.7130547,0.010849,8.5695801     c0.0031929,2.5195885,0.9825516,8.7144737-1.2585564,10.5797539c-1.9481316,1.6214333-8.3121147,0.5711021-10.7532349,0.5611839     c-2.9893456-0.0121422-5.9786949-0.0242844-8.9680424-0.0364265c-6.3105354-0.025631-12.6222382-0.0180969-18.932539-0.0769005     c-2.2891932-0.0213318-5.530961-0.9574776-6.8113298-3.133316c-0.5669658-0.9634933-0.0209653-3.6971245-0.0270593-4.7717876     c-0.0162358-2.8630733-0.0324714-5.7261448-0.048707-8.5892181c-0.0180397-3.1811905-0.0360792-6.3623829-0.0541189-9.5435753     c-0.0189884-3.3484936-0.590921-8.6400795,4.0957098-8.7283297c1.4460807-0.02723,1.45083-2.2773194,0-2.25     c-6.5649247,0.1236197-6.3900819,3.1535134-6.3565335,9.0696154c0.0288634,5.0899067,0.0577268,10.1798134,0.0865902,15.2697201     c0.0184411,3.2519932-1.0003055,8.4263725,0.2764211,11.4159851c2.2818911,5.3433342,11.4717884,3.5216026,15.8141727,3.539238     c9.5215015,0.0386772,19.2387333,0.6779289,28.7376308,0.0961761c6.4371605-0.3942337,6.4613724-4.104496,6.454422-9.5934162     c-0.0064316-5.07827-0.0128632-10.1565399-0.0192947-15.2348099C51.6622086,12.7326202,52.420433,8.3211632,51.5336571,4.91817     c-1.5784225-6.0571856-11.6352692-3.7189329-16.0343513-3.698493C25.6379871,1.2654963,15.7766685,1.3113158,5.91535,1.3571352     C4.4679031,1.3638605,4.4649248,3.6138744,5.91535,3.6071351L5.91535,3.6071351z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M2.0489647,31.3294582c15.708333,0,31.4166641,0,47.125,0c1.4477654,0,1.4501648-2.25,0-2.25     c-15.7083359,0-31.4166679,0-47.125,0C0.601197,29.0794582,0.598799,31.3294582,2.0489647,31.3294582L2.0489647,31.3294582z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M25.7989655,35.9544601c1.4477673,0,1.4501648-2.25,0-2.25     C24.3511963,33.7044601,24.3487988,35.9544601,25.7989655,35.9544601L25.7989655,35.9544601z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M16.7808666,17.6873589c1.4786434,0.8551579,2.8252831,1.8473835,3.9188919,3.1707535     c0.0861053,0.1041965,1.1339626,1.9934406,1.720829,2.2543602c0.9518433,0.4231873,1.365284,0.3062954,2.2749748-0.317606     c2.0550194-1.4094105,3.5404015-4.2729092,5.2139473-6.1284447c1.7174568-1.9042225,4.0733814-3.2630148,5.2971287-5.5465612     c0.6838226-1.2760391-1.2578659-2.4137478-1.9428101-1.1356182c-1.0301895,1.922368-3.0947952,3.0959625-4.5574417,4.67033     c-1.4019756,1.5090628-2.8738651,3.1614504-4.0544376,4.8512354c-0.2527657,0.2879467-0.5055294,0.5758934-0.7582932,0.8638401     c0.0068665,0.9989529-0.1511326,1.1386261-0.4739971,0.4190235c-0.3792515-0.2202892-0.8395443-1.1836109-1.1289101-1.5215492     c-1.2481461-1.4576569-2.7215843-2.5667629-4.3742638-3.5225725     C16.6606998,15.01828,15.5264587,16.9618855,16.7808666,17.6873589L16.7808666,17.6873589z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M17.0740242,50.4702682c1.1833744-3.3607559,5.8229294-3.5202217,8.7025642-3.5555382     c3.6729412-0.0450439,7.3100243-0.2631302,9.4020309,3.4974556c0.3238029-0.56427,0.6476021-1.12854,0.971405-1.6928101     c-6.409174,0.3686943-12.8903637,0.1102142-19.3093815,0.109417c-1.4477749-0.0001793-1.4501572,2.2498207,0,2.25     c6.4187641,0.0007973,12.900156,0.2592773,19.3093815-0.109417c0.8506699-0.0489349,1.4023361-0.9181633,0.971405-1.6928101     c-2.6481895-4.760376-7.096674-4.7163773-12.0833187-4.6027794c-3.9265327,0.0894508-8.6719151,1.0468674-10.1337137,5.1983414     C14.4225407,51.2405891,16.595541,51.8291512,17.0740242,50.4702682L17.0740242,50.4702682z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M19.4929333,41.0982246c0.992897,0.981842,0.8614388,3.1986237,0.7913208,4.4805984     c-0.0791359,1.4468498,2.1711063,1.4424248,2.25,0c0.1065178-1.9474792,0.030653-4.6070976-1.4503307-6.0715866     C20.0532703,38.48806,18.4613476,40.0781288,19.4929333,41.0982246L19.4929333,41.0982246z"
                      />
                    </g>
                    <g>
                      <path
                        class="st0"
                        d="M30.6841602,39.593399c-1.3870697,1.5922623-1.8035278,3.7120514-1.8128052,5.7792397     c-0.0064964,1.4480171,2.243494,1.4498558,2.25,0c0.0063553-1.4159546,0.1854534-3.0766602,1.1537952-4.1882515     C33.2224426,40.0969582,31.6374302,38.4991074,30.6841602,39.593399L30.6841602,39.593399z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Integrated Testing
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Any development project at Enosis has an integral testing scope.
                Before releasing your software, it goes through rigorous testing
                to ensure that it is working properly.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                id="Layer_1_1_"
                fill="#A41F5C"
                className="h-12 w-12"
                version="1.1"
                viewBox="0 0 64 64"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path d="M58,17H48v-3.77l-2.747-0.728c-0.198-0.589-0.432-1.158-0.698-1.7l1.424-2.452l-5.33-5.331l-2.451,1.425  c-0.544-0.267-1.112-0.5-1.7-0.699L35.77,1H28.23l-0.728,2.747c-0.588,0.198-1.156,0.432-1.7,0.699l-2.451-1.425l-5.33,5.331  l1.424,2.452c-0.267,0.542-0.5,1.111-0.698,1.7L16,13.23V17H6c-2.757,0-5,2.243-5,5v30c0,2.757,2.243,5,5,5h13v4h-4v2h34v-2h-4v-4  h13c2.757,0,5-2.243,5-5V22C63,19.243,60.757,17,58,17z M18,14.77l2.334-0.618l0.159-0.54c0.247-0.837,0.573-1.63,0.971-2.356  l0.27-0.495l-1.21-2.083l3.154-3.154l2.082,1.21l0.495-0.271c0.729-0.398,1.521-0.724,2.355-0.969l0.54-0.159L29.77,3h4.461  l0.619,2.335l0.54,0.159c0.834,0.245,1.627,0.571,2.355,0.969l0.495,0.271l2.082-1.21l3.154,3.154l-1.21,2.083l0.27,0.495  c0.397,0.727,0.724,1.52,0.971,2.356l0.159,0.54L46,14.77v4.461l-2.334,0.618l-0.159,0.54c-0.247,0.837-0.573,1.63-0.971,2.356  l-0.27,0.495l1.21,2.083L41,27.799V24c0-0.745-0.101-1.465-0.272-2.158C41.549,20.364,42,18.705,42,17c0-5.514-4.486-10-10-10  s-10,4.486-10,10c0,1.704,0.451,3.362,1.273,4.842C23.101,22.535,23,23.255,23,24v3.799l-2.477-2.477l1.21-2.083l-0.27-0.495  c-0.397-0.727-0.724-1.52-0.971-2.356l-0.159-0.54L18,19.23V14.77z M26,29.722c-0.595-0.347-1-0.985-1-1.722s0.405-1.375,1-1.722  V29.722z M24,17c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.784-0.121,1.555-0.342,2.295C38.072,16.723,35.237,15,32,15  c-3.237,0-6.071,1.723-7.657,4.295C24.121,18.554,24,17.783,24,17z M37,24h-0.172c-1.557,0-3.021-0.606-4.121-1.707L32,21.585  l-0.707,0.708C30.192,23.394,28.729,24,27.172,24H27c-0.732,0-1.409,0.212-2,0.556V24c0-3.86,3.141-7,7-7s7,3.14,7,7v0.556  C38.409,24.212,37.732,24,37,24z M34,35.667l-2,2.666l-2-2.666V35.65c0.627,0.223,1.298,0.35,2,0.35s1.373-0.128,2-0.35V35.667z   M28.65,37.2l1.95,2.6l-2.09,1.567l-1.22-3.658L28.65,37.2z M25.417,38.412l2.073,6.221L32,41.25l4.51,3.382l2.073-6.221l1.47,0.551  C41.218,39.399,42,40.528,42,41.772V45H22v-3.228c0-1.244,0.782-2.373,1.947-2.81L25.417,38.412z M35.49,41.367L33.4,39.8l1.95-2.6  l1.36,0.51L35.49,41.367z M32,34c-2.206,0-4-1.794-4-4v-4.068c1.464-0.154,2.845-0.688,4-1.596c1.155,0.909,2.536,1.442,4,1.596V30  C36,32.206,34.206,34,32,34z M38,26.278c0.595,0.347,1,0.985,1,1.722s-0.405,1.375-1,1.722V26.278z M6,19h10v1.77l2.747,0.728  c0.198,0.589,0.432,1.158,0.698,1.7l-1.424,2.452l5.33,5.331l0.64-0.372c0.593,0.684,1.404,1.165,2.334,1.324  C26.66,32.914,27.243,33.78,28,34.46v0.847l-4.756,1.783C21.304,37.818,20,39.7,20,41.772V47h24v-5.228  c0-2.072-1.304-3.954-3.244-4.683L36,35.307V34.46c0.757-0.679,1.34-1.545,1.675-2.528c0.929-0.159,1.74-0.641,2.333-1.324  l0.64,0.372l5.33-5.331l-1.424-2.452c0.267-0.542,0.5-1.111,0.698-1.7L48,20.77V19h10c1.654,0,3,1.346,3,3v27H3V22  C3,20.346,4.346,19,6,19z M43,61H21v-4h22V61z M58,55H6c-1.654,0-3-1.346-3-3v-1h58v1C61,53.654,59.654,55,58,55z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                QA Consulting
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We do a documented analysis of your project along with facts and
                experience-oriented recommendations for a proactive process
                improvement.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                height="48px"
                version="1.1"
                fill="#A41F5C"
                className="h-12 w-12"
                viewBox="0 0 48 48"
                width="48px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title />
                <g
                  fill="none"
                  fill-rule="evenodd"
                  id="arrow-recycle"
                  stroke="none"
                  stroke-width="1"
                >
                  <path
                    d="M9.11538435,4.98204034 L2.61538435,14.9820403 C2.39914905,15.31471 2.63794977,15.754625 3.03472026,15.7545345 L7.61,15.748 L7.76017,16.1887735 C10.3745434,23.6263176 16.6728391,27.7439615 23.0362941,28.2931646 C23.3214011,28.317771 23.5689587,28.0985181 23.5789804,27.8125267 L23.5902137,27.3632635 L23.5930274,26.8433622 L23.5728753,25.0912207 L23.5762319,24.7969959 C23.5819317,24.5436798 23.3972424,24.3261453 23.1463576,24.2906725 L22.7727746,24.2336299 C17.5780086,23.3811377 13.8723891,20.2736633 11.9711401,16.0031585 L11.858,15.742 L16.0322069,15.7545345 C16.430005,15.7564376 16.6706258,15.3155755 16.453828,14.9820403 L9.95382797,4.98204034 C9.75665625,4.67869924 9.31255606,4.67869924 9.11538435,4.98204034 Z M9.534,6.172 L15.11,14.75 L12.8488641,14.7429581 L11.1196487,14.7443809 C10.7726406,14.7464385 10.5331939,15.0927029 10.6537642,15.4180975 L10.7768307,15.7401433 C12.6688247,20.5436479 16.6276199,24.1143044 22.2472666,25.1569055 L22.572,25.213 L22.5931331,27.0176836 L22.591,27.241 L22.4690133,27.2271266 C16.4855915,26.4657406 10.6771193,22.3496301 8.4548177,15.1005244 C8.39023236,14.8898483 8.19534227,14.7462896 7.97499009,14.7470769 L3.955,14.754 L9.534,6.172 Z"
                    fill="#A41F5C"
                    fill-rule="nonzero"
                    id="Path"
                    transform="translate(13.063404, 16.524792) rotate(62.000000) translate(-13.063404, -16.524792) "
                  />
                  <path
                    d="M32.0516022,6.88622621 L25.5516022,16.8862262 C25.3353669,17.2188959 25.5741676,17.6588109 25.9709381,17.6587204 L30.547,17.652 L30.6963878,18.0929594 C33.3107612,25.5305035 39.6090569,29.6481473 45.9725119,30.1973505 C46.257619,30.2219569 46.5051766,30.002704 46.5151983,29.7167126 L46.5264315,29.2674493 L46.5292452,28.747548 L46.5098555,27.1735614 L46.509972,26.8441519 L46.5124498,26.7011818 C46.5181496,26.4478657 46.3334603,26.2303312 46.0825755,26.1948584 L45.7089925,26.1378158 C40.5142264,25.2853236 36.808607,22.1778492 34.907358,17.9073444 L34.794,17.646 L38.9684247,17.6587204 C39.3662229,17.6606235 39.6068437,17.2197614 39.3900458,16.8862262 L32.8900458,6.88622621 C32.6928741,6.58288511 32.2487739,6.58288511 32.0516022,6.88622621 Z M32.471,8.076 L38.046,16.654 L35.5396822,16.6467471 L34.0558665,16.6485668 C33.7088585,16.6506243 33.4694117,16.9968888 33.589982,17.3222833 L33.7130486,17.6443292 C35.6050425,22.4478338 39.5638377,26.0184903 45.1834845,27.0610914 L45.509,27.117 L45.5292144,28.7452397 L45.527,29.145 L45.4052312,29.1313125 C39.4218094,28.3699265 33.6133371,24.253816 31.3910355,17.0047103 C31.3264502,16.7940341 31.1315601,16.6504755 30.9112079,16.6512628 L26.892,16.658 L32.471,8.076 Z"
                    fill="#A41F5C"
                    fill-rule="nonzero"
                    id="Path"
                    transform="translate(35.999622, 18.428978) rotate(183.000000) translate(-35.999622, -18.428978) "
                  />
                  <path
                    d="M18.6143787,25.6111989 L12.1143787,35.6111989 C11.8981434,35.9438686 12.1369442,36.3837837 12.5337146,36.3836931 L17.109,36.377 L17.2591644,36.8179321 C19.8735378,44.2554762 26.1718335,48.3731201 32.5352884,48.9223232 C32.8203955,48.9469296 33.0679531,48.7276767 33.0779748,48.4416853 L33.0892081,47.9924221 L33.0920218,47.4725208 L33.0718697,45.7203793 L33.0752263,45.4261545 C33.0809261,45.1728385 32.8962368,44.9553039 32.645352,44.9198311 L32.271769,44.8627885 C27.077003,44.0102963 23.3713835,40.9028219 21.4701345,36.6323171 L21.357,36.371 L25.5312013,36.3836931 C25.9289994,36.3855962 26.1696202,35.9447341 25.9528223,35.6111989 L19.4528223,25.6111989 C19.2556506,25.3078578 18.8115504,25.3078578 18.6143787,25.6111989 Z M19.033,26.801 L24.609,35.379 L22.1024588,35.3717198 L20.6186431,35.3735395 C20.271635,35.3755971 20.0321883,35.7218615 20.1527586,36.0472561 L20.2758251,36.3693019 C22.167819,41.1728065 26.1266143,44.743463 31.746261,45.7860641 L32.071,45.842 L32.0908842,47.2806636 L32.09,47.87 L31.9680077,47.8562852 C25.9845859,47.0948992 20.1761136,42.9787887 17.9538121,35.729683 C17.8892267,35.5190069 17.6943367,35.3754482 17.4739845,35.3762355 L13.454,35.383 L19.033,26.801 Z"
                    fill="#A41F5C"
                    fill-rule="nonzero"
                    id="Path"
                    transform="translate(22.562398, 37.153951) rotate(304.000000) translate(-22.562398, -37.153951) "
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Full-Cycle Testing
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                Our QA teams render quality assurance services along with the
                development lifecycle, be it automated or manual.
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                height="100%"
                fill="#A41F5C"
                className="h-12 w-12"
                version="1.1"
                viewBox="0 0 64 64"
                width="100%"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:serif="http://www.serif.com/"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="ICON">
                  <path d="M59,43.335l-54,-0l-0,-9.335c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1c-0,5.767 -0,11.433 -0,14.335c-0,0.795 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879l4,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-4,-0c-0.265,-0 -0.52,-0.106 -0.707,-0.293c-0.188,-0.188 -0.293,-0.442 -0.293,-0.707l-0,-3l54,-0l-0,3c0,0.265 -0.105,0.519 -0.293,0.707c-0.187,0.187 -0.442,0.293 -0.707,0.293l-44,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l12.606,-0c-0.16,2.681 -0.855,6.146 -3.417,8l-1.689,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l21,-0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-1.689,-0c-2.562,-1.854 -3.257,-5.318 -3.417,-8l20.606,-0c0.796,-0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.326 0.879,-2.121c-0,-6.028 -0,-23.973 -0,-30c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879l-8.5,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l8.5,-0c0.265,-0 0.52,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707l-0,25Zm-23.606,8l-6.788,-0c-0.155,2.53 -0.785,5.68 -2.585,8l11.958,-0c-1.8,-2.32 -2.43,-5.47 -2.585,-8Zm-19.394,-36l-10,-0c-0.796,-0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c-0,2.451 -0,6.874 -0,11.665c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l-0,-11.665c-0,-0.265 0.105,-0.52 0.293,-0.707c0.187,-0.188 0.442,-0.293 0.707,-0.293l10,-0l0,5.665c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l-0,-17c0,-0.552 0.448,-1 1,-1c0,0 25,0 25,0c0.552,0 1,0.448 1,1l0,3l-23,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l23,0l0,14.001l-5.321,-0.001c-0.29,-0 -0.566,0.126 -0.756,0.345c-0.19,0.219 -0.276,0.51 -0.235,0.797l1.409,9.824c0.055,0.388 0.332,0.707 0.708,0.818c0.375,0.11 0.781,-0.009 1.037,-0.305l2.293,-2.644l0.865,0.75l0,3.415c-0,0.552 -0.448,1 -1,1c-0,-0 -25,-0 -25,-0c-0.552,-0 -1,-0.448 -1,-1l0,-11c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l0,11c-0,1.657 1.343,3 3,3l25,-0c1.657,-0 3,-1.343 3,-3l-0,-1.681l2.046,1.774c0.417,0.362 1.049,0.317 1.411,-0.1l2.62,-3.022c0.362,-0.418 0.317,-1.049 -0.1,-1.411l-4.911,-4.258c-0,-0 2.293,-2.645 2.293,-2.645c0.256,-0.295 0.316,-0.714 0.154,-1.07c-0.163,-0.356 -0.518,-0.585 -0.91,-0.585l-2.603,-0l-0,-19.002c0,-1.657 -1.343,-3 -3,-3l-25,0c-1.657,0 -3,1.343 -3,3l-0,9.335Zm-9,21.665l0,2c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-2c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Zm37.69,-5.331c-0.417,-0.362 -1.049,-0.317 -1.411,0.1l-1.513,1.746c-0,-0 -0.934,-6.515 -0.934,-6.515c-0,0 6.581,0.002 6.581,0.002c-0,-0 -1.513,1.745 -1.513,1.745c-0.362,0.417 -0.317,1.049 0.1,1.411l4.911,4.258c0,-0 -1.31,1.511 -1.31,1.511c-0,-0 -4.911,-4.258 -4.911,-4.258Zm-35.69,2.331l-0,-13c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,13c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1Zm15,-7c-0,-0.552 -0.448,-1 -1,-1l-2,-0c-0.552,-0 -1,0.448 -1,1l-0,2c-0,0.552 0.448,1 1,1l2,-0c0.552,0 1,-0.448 1,-1l-0,-2Zm2,2l10,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,-0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-2,-8c-0,-0.552 -0.448,-1 -1,-1l-2,-0c-0.552,0 -1,0.448 -1,1l-0,2c-0,0.552 0.448,1 1,1l2,-0c0.552,-0 1,-0.448 1,-1l-0,-2Zm2,2l16,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-16,-0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-2,-8c-0,-0.552 -0.448,-1 -1,-1l-2,-0c-0.552,0 -1,0.448 -1,1l-0,2c-0,0.552 0.448,1 1,1l2,-0c0.552,-0 1,-0.448 1,-1l-0,-2Zm2,2l16,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-16,-0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Custom Testing
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                From web to desktop and mobile applications, we create a
                comprehensive mix for testing each application to ensure
                quality.
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
                <path d="M255.61,206.59a24.49,24.49,0,1,0-24.49-24.49A24.52,24.52,0,0,0,255.61,206.59Zm0-38.32a13.83,13.83,0,1,1-13.82,13.83A13.84,13.84,0,0,1,255.61,168.27Z" />
                <path d="M435.84,211v-1.44a32.76,32.76,0,0,0-32.73-32.73H394.4l-32.61-65.09a5.31,5.31,0,0,0-4.76-3H256.37c-.13,0-.24.07-.38.08s-.24-.08-.38-.08H155a5.31,5.31,0,0,0-4.76,3l-32.61,65.09h-8.7a32.77,32.77,0,0,0-32.74,32.73V211a35.89,35.89,0,0,0-30.61,35.41v36.78a5.33,5.33,0,0,0,5.33,5.33h13v17.08a5.33,5.33,0,1,0,10.66,0V288.5h14v17.08a5.33,5.33,0,1,0,10.66,0V288.5h13a5.33,5.33,0,0,0,5.33-5.33V246.39A35.9,35.9,0,0,0,86.81,211v-1.44a22.1,22.1,0,0,1,22.08-22.07h10.35l131,94.47V313.4H190.5A30.59,30.59,0,0,0,160,344v29.77c0,.17.09.32.1.5,0,.34-.1.65-.1,1a27.94,27.94,0,0,0,50.69,16.3,27.82,27.82,0,0,0,45.36,0,27.82,27.82,0,0,0,45.36,0A27.94,27.94,0,0,0,352,375.22c0-.35-.09-.66-.1-1,0-.18.1-.33.1-.5V344a30.59,30.59,0,0,0-30.55-30.55H261.71V281.94l131-94.47h10.36a22.1,22.1,0,0,1,22.07,22.07V211a35.9,35.9,0,0,0-30.62,35.41v36.78a5.33,5.33,0,0,0,5.33,5.33h13v17.08a5.33,5.33,0,0,0,10.66,0V288.5h14v17.08a5.33,5.33,0,0,0,10.66,0V288.5h13a5.33,5.33,0,0,0,5.33-5.33V246.39A35.89,35.89,0,0,0,435.84,211ZM106.76,246.39v31.45H56.2V246.39a25.28,25.28,0,0,1,50.56,0ZM188,392.56a17.34,17.34,0,1,1,17.35-17.34A17.35,17.35,0,0,1,188,392.56Zm45.36,0a17.34,17.34,0,1,1,17.35-17.34A17.36,17.36,0,0,1,233.32,392.56Zm45.36,0A17.34,17.34,0,1,1,296,375.22,17.36,17.36,0,0,1,278.68,392.56Zm45.35,0a17.34,17.34,0,1,1,17.34-17.34A17.35,17.35,0,0,1,324,392.56Zm-2.54-68.5A19.91,19.91,0,0,1,341.37,344v9.46a27.64,27.64,0,0,0-40,5.5,27.84,27.84,0,0,0-45.36,0,27.83,27.83,0,0,0-45.36,0,27.65,27.65,0,0,0-40-5.51V344a19.91,19.91,0,0,1,19.88-19.89h65.11c.14,0,.25-.07.38-.08s.25.08.38.08ZM256,272.93,137.46,187.46h68.41a50,50,0,0,0,99.5,0l46.84,0h22.32ZM216,182.1a39.63,39.63,0,1,1,39.62,39.62A39.67,39.67,0,0,1,216,182.1Zm89.38-5.31a50,50,0,0,0-99.5,0c-28.24,0-60.87,0-76.35,0l28.74-57.35h97.35c.14,0,.25-.07.38-.08s.25.08.38.08h97.36l28.74,57.35C366.86,176.82,333.77,176.81,305.37,176.79Zm150.43,101H405.23V246.39a25.29,25.29,0,0,1,50.57,0Z" />
              </svg>
            </div>
            <div>
              <h1 className="mt-6 capitalize text-3xl font-bold text-[#A41F5C]">
                Test Automation
              </h1>
              <br />
              <p className="text-base leading-6 whitespace-normal text-[#333333]">
                We identify the best automation tool and assist based on our
                client’s test automation goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-16 mt-20 bg-[#f8f8f8]">
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
          className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 justify-items-center items-center md:px-16 lg:px-28 px-4 mt-4"
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
      <section className="p-[20px_120px]">
        <div className="grid grid-cols-2 gap-6 items-center ">
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

export default DigitalMarketing;
