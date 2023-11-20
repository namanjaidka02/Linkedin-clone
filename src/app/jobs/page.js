"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { data } from "../../utils/Constants";

const Jobs = () => {
  const [jobData, setJobData] = useState(data);

  const handleClick = (id) => {
    const filteredJobs = jobData.filter((d) => d.id !== id);
    console.log(filteredJobs);

    setJobData(filteredJobs);
    console.log("clicked");
  };

  return (
    <main className="  bg-beige h-[100vh] overflow-auto">
      <section className="flex flex-col justify-center items-center  bg-white  lg:py-5 rounded-md lg:pl-0 lg:mx-[25rem] xs:px-4 xs:pt-2 xs:pb-16  lg:pb-2 lg:px-0">
        <div className="lg:text-left xs:mb-[2rem] lg:mr-[2rem] xs:pl-2">
          <h1 className="xs:text-2xl lg:text-3xl font-semi-bold">Recomended Jobs for you.</h1>
          <p className="xs:text-[11px] xs:text-center lg:text-sm">
            Based on your profile and search history.
          </p>
        </div>

        {jobData.map((job) => {
          const { id, jobName, companyName, location, jobType, salaryRange, datePosted } = job;
          return (
            <div className="flex " key={id}>
              <div>
                <Link href={`/jobs/${id}`}>
                  <div className="flex  cursor-pointer onhover pt-5  mb-5">
                    <div className="">
                      <Image
                        src="https://media.licdn.com/dms/image/D560BAQE28k-oE7Hb3Q/company-logo_100_100/0/1687902244945/medvise_ai_logo?e=1707350400&v=beta&t=XdGP0BScW2ogy6rn7sPHHns4NBrqYWwjUCreBb_c92Q"
                        width="100"
                        height="100"
                        alt="Company logo"
                        className=" mix-blend-multiply lg:mr-3 "
                      />
                    </div>
                    <div className=" lg:border-b-2 xs:ml-5 lg:pr-[5rem] pb-5">
                      <h2 className="text-blue-600 jobname font-semi-bold text-lg">{jobName}</h2>
                      <h3>{companyName}</h3>
                      <h3>
                        {location} ({jobType})
                      </h3>
                      <h3>{salaryRange}</h3>
                      <h3>{datePosted}</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="xl:mt-5">
                <button onClick={() => handleClick(id)} className="text-xl">
                  X
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Jobs;
