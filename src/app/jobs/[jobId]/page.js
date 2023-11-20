import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "@/utils/Constants";

const JobIdPage = ({ params }) => {
  return (
    <main className="lg:grid lg:grid-cols-2 lg:px-[10rem] bg-beige h-[100vh] ">
      <section className="flex flex-col  items-center lg:text-left xs:hidden lg:block overflow-y-auto bg-white border-r-[1px] xs:px-3 xs:py-4">
        <div className="lg:text-left xs:mb-[2rem]  xs:pl-2">
          <h1 className="xs:text-xl lg:text-2xl text-left font-semi-bold">
            Recomended Jobs for you.
          </h1>
          <p className="xs:text-[11px] lg:text-sm">Based on your profile and search history.</p>
        </div>

        {data.map((data) => {
          const { id, jobName, companyName, location, jobType, salaryRange, datePosted } = data;
          return (
            <>
              <Link href={`/jobs/${id}`}>
                <div className=" lg:my-5 flex cursor-pointer onhover" key={id}>
                  <div className="">
                    <Image
                      src="https://media.licdn.com/dms/image/D560BAQE28k-oE7Hb3Q/company-logo_100_100/0/1687902244945/medvise_ai_logo?e=1707350400&v=beta&t=XdGP0BScW2ogy6rn7sPHHns4NBrqYWwjUCreBb_c92Q"
                      width="100"
                      height="100"
                      alt="Company logo"
                      className=" mix-blend-multiply lg:mr-3 "
                    />
                  </div>
                  <div className="border-b-2 xs:ml-5 lg:ml-0 pb-4">
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
            </>
          );
        })}
      </section>

      <section className=" bg-white lg:px-8 h-[100%] text-left overflow-y-auto xs:px-3 xs:pt-2 xs:pb-24">
        {data.map((d) => {
          if (d.id == params.jobId) {
            return (
              <div key={d.id}>
                <section>
                  <h1 className="text-2xl font-bold">{d.jobName}</h1>
                  <div className="flex pt-2 font-light">
                    <h4 className="pr-4">{d.location}</h4>
                    <h4> ({d.country})</h4>
                  </div>
                </section>

                <section className="flex items-center text-sm font-light pt-5">
                  <i className="fa-solid fa-bag-shopping text-xl px-[6px]"></i>
                  <h4 className="px-2 mx-2 rounded-md bg-green-100">{d.jobType}</h4>
                  <h4 className="px-2 mx-2 rounded-md  bg-green-100">{d.duration}</h4>
                  <h4 className="px-2 ">{d.position}</h4>
                </section>

                <section className="flex items-center text-sm font-light pt-5">
                  <i className=" px-[3px] fa-solid fa-people-group text-xl"></i>
                  <h4 className=" px-2">{d.employees}</h4>
                  <h4 className=" px-2">{d.industry}</h4>
                </section>

                <section className="flex items-center text-sm font-light pt-5">
                  <i className=" px-1 fa-solid fa-list text-xl"></i>
                  <div className="flex items-center">
                    <h4 className="text-lg ml-3">Skills: </h4>
                    <p className="text-sm  ml-3">{d.skills}</p>
                  </div>
                </section>

                <section className="flex items-center cursor-pointer my-5">
                  <div className="bg-blue-500 hover:bg-blue-800  rounded-lg px-3 py-2">
                    <button className=" text-white text-xl px-2">Apply</button>
                    <i className="fa-solid fa-arrow-up-right-from-square text-white text-sm "></i>
                  </div>
                </section>

                <section className="lg:mt-[4rem] xs:mt-[2rem] xs:px-3">
                  <h2 className="text-2xl mb-5">About the job</h2>
                  <h4 className="mb-5 text-sm font-semibold underline">Company Overview</h4>
                  <p className="text-sm mb-4">{d.companyDesc}</p>
                  <h3 className="text-sm font-semibold underline mb-4">
                    The position: {d.jobName}
                  </h3>
                  <h5 className="text-sm">{data.jobDesc}</h5>
                  <h5 className="text-sm font-semibold underline mt-5 mb-4">Responsibilities</h5>
                  {d.responsibilities.map((res, index) => {
                    if (d.id == params.jobId) {
                      return (
                        <ul key={index}>
                          <li className="list-disc text-sm ">{res}</li>
                        </ul>
                      );
                    }
                  })}
                </section>
                <section className="mt-6 xs:px-3">
                  <h3 className="text-sm font-semibold underline mb-4">Required Skills</h3>
                  {d.reqSkills.map((skills, index) => {
                    if (d.id == params.jobId) {
                      return (
                        <ul className="flex" key={index}>
                          <li className=" list-disc flex-col">{skills}</li>
                        </ul>
                      );
                    }
                  })}
                </section>
              </div>
            );
          }
        })}
      </section>
    </main>
  );
};

export default JobIdPage;
