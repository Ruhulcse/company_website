import { Card, Input, Option, Select, Typography } from "@material-tailwind/react";
import React from "react";
import team from "../../assets/images/team.jpg";
const Careers = () => {
  const TABLE_HEAD = ["Job Title", "Location", "Department", "Employment Type"];
 
const TABLE_ROWS = [
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  },
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  },
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  },
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  },
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  },
  {
    jobTitle:"Senior web Developer",
    location:"Dhaka",
    department:"Engineering",
    jobType:"Full TIme"
  }
];
  return (
    <>
      <div class="relative">
        <img
          src={team}
          alt="Your Image"
          className="w-full h-[80vh] shadow-none filter-none blur-md"
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2/4">
          <h1
            className="text-white uppercase text-5xl font-bold"
            data-aos="fade-up"
          >
            careers
          </h1>
          <p
            className="text-white capitalize text-lg font-normal tracking-wider text-center mt-2"
            data-aos="fade-up"
          >
            come work with us
          </p>
        </div>
      </div>
      <section className="p-32 bg-[#f8f8f8]">
        <h1 className="text-black text-center uppercase text-4xl font-bold">
          join us
        </h1>
        <p className="mt-6 px-56 tracking-normal text-base text-center leading-7 whitespace-normal text-[#333333]">
          At Diganta, we foster and inspire innovative ideas to support growth
          and value addition. We are passionate about the work we do. Following
          a transparent system and keeping the communication channels open, we
          commute ideas and suggestions within the team. We invest in our people
          and offer them numerous learning and development opportunities. Join
          us to be a part of a visionary team.
        </p>
      </section>
      <section className="mt-40">
        <h1
          className="text-black text-center uppercase text-5xl font-bold"
        >
          current openings
        </h1>
        <div className="grid gap-4 grid-cols-[2fr_auto_auto] px-10 mt-10">
          <Input label="Search" color="blue-gray" size="lg" className="rounded-none focus:rounded" />
          <div>
            <Select label="All Location" color="blue-gray" size="lg" className="rounded-none focus:rounded" >
              <Option>Dhaka</Option>
            </Select>
          </div>
          <div>
            <Select label="All Department" color="blue-gray" size="lg" className="rounded-none focus:rounded" >
              <Option>Accounting</Option>
              <Option>Admin</Option>
              <Option>Engineering</Option>
              <Option>HR</Option>
            </Select>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-10">
      <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  className="font-normal leading-none text-[#A41F5C] text-left px-10"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ jobTitle, location, department, jobType }, index) => (
            <tr key={jobTitle} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal text-left px-10">
                  {jobTitle}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal px-10">
                  {location}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal px-10">
                  {department}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal px-10">
                  {jobType}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
      </section>
    </>
  );
};

export default Careers;
