"use client";
import { companies, featuredJobs } from "@/mock-data";
import { faArrowRightLong, faFile, faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Perks from "@/components/perks";
import { CompanyImage1, CompanyImage2, CompanyImage3 } from "@/assets";
import Fancybox from "@/components/fancybox";
import Jobs from "@/components/jobs";

interface Props {
  params: {
    id: string;
  };
}
const JobDetailsPage = ({ params: { id } }: Props) => {
  const job = featuredJobs.find((c) => c.id == +id);
  const [submitModal, setSubmitModal] = useState<boolean>(false);
  const company = companies.find((c) => c.id == job?.company_id);
  useEffect(() => {
    if (submitModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [submitModal]);
  if (!job) {
    return "Not Found";
  }
  return (
    <div>
      <div className="bg-[#F8F8FD]">
        <div className="container py-12 max-md:pt-5">
          <div className="flex gap-2 max-md:mb-5 text-gray-400 mb-10">
            <Link href={"/"}>Home</Link>
            <span>/</span>
            <Link href={"/jobs"}>Jobs</Link>
            <span>/</span>
            <p className="text-black">{job.title}</p>
          </div>
          <div className="border bg-white max-sm:flex-col px-5 py-6 flex justify-between sm:items-center">
            <div className="flex max-[425px]:gap-3 gap-6 max-[425px]:flex-col">
              <Image className="object-contain max-w-52" src={job.image} alt={job.title} />
              <div>
                <h1 className="text-4xl max-[425px]:text-2xl text-text max-md:text-3xl font-semibold">{job.title}</h1>
                <p className="text-gray-500 flex max-[378px]:gap-0 gap-2 max-sm:text-sm max-[378px]:flex-col">
                  <span>{job.company}</span>
                  <span className="max-[378px]:hidden">·</span>
                  <span>{job.location}</span>
                  <span className="max-[378px]:hidden">·</span>
                  <span>{job.workType}</span>
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:mt-3 max-sm:justify-between max-sm:flex-row-reverse items-center flex-shrink-0">
              <Link href={"/"}>
                <FontAwesomeIcon className="text-gray-500 text-2xl" icon={faShareAlt} />
              </Link>
              <div className="sm:border-s sm:ps-6">
                <button className="px-10 py-3 bg-primary text-white font-[500]" onClick={() => setSubmitModal(true)}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container max-lg:flex-col py-12 gap-10 border-b mb-10">
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Description</h2>
            <p className="text-slate-500 mt-3">{job.description}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Responsibilities</h2>
            <ul className="text-gray-500 mt-3">
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Community engagement to ensure that is supported and actively represented online</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Focus on social media content development and publication</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Marketing and strategy support</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Stay on top of trends on social media platforms, and suggest content ideas to the team</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Engage with online communities</p>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Who You Are</h2>
            <ul className="text-gray-500 mt-3">
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>You get energy from people and building the ideal work environment</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>You have a sense for beautiful spaces and office experiences</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>You are a confident office manager, ready for added responsibilities</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>You&apos;re detail-oriented and creative</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>You&apos;re a growth marketer and know how to run campaigns</p>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Nice-To-Haves</h2>
            <ul className="text-gray-500 mt-3">
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Fluent in English</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Project management skills</p>
              </li>
              <li className="mb-2 flex gap-2 items-center">
                <FontAwesomeIcon className="text-[#56CDAD]" icon={faCircleCheck} />
                <p>Copy editing skills</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[320px] max-md:flex-col max-lg:flex max-lg:gap-5 flex-shrink-0">
          <div className="mb-7 border-b pb-6">
            <h2 className="text-text text-3xl font-semibold mb-3">About this role</h2>
            <div className="bg-[#F8F8FD] p-3">
              <p>
                <span className="font-[600] text-text">5 applied</span> <span className="text-gray-500">of 10 capacity</span>
              </p>
              <div className="w-full h-2 bg-[#D6DDEB] mt-2">
                <span className="block h-full bg-[#56CDAD] w-7/12"></span>
              </div>
            </div>
            <ul className="text-gray-500 mt-5">
              <li className="flex justify-between items-center mb-3">
                <span>Apply Before</span>
                <span className="font-[500] text-black">July 31, 2021</span>
              </li>
              <li className="flex justify-between items-center mb-3">
                <span>Job Posted On</span>
                <span className="font-[500] text-black">July 1, 2021</span>
              </li>
              <li className="flex justify-between items-center mb-3">
                <span>Job Type</span>
                <span className="font-[500] text-black">Full-Time</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Salary</span>
                <span className="font-[500] text-black">$75k-$85k USD</span>
              </li>
            </ul>
          </div>
          <div className="mb-7 border-b pb-6">
            <h2 className="text-text text-3xl font-semibold">Categories</h2>
            <div className="flex flex-wrap text-sm md:text-base gap-3 mt-5">
              {job.tags.map((t, i) => (
                <span key={i} className={`px-3 tag py-1 rounded-full font-[500]`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-text text-3xl font-semibold">Required Skills</h2>
            <ul className="flex gap-3 items-center flex-wrap mt-5">
              <li className="bg-slate-100 text-primary px-3 py-1.5">Project Management</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Copywriting</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Social Media Marketing</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">English</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Copy Editing</li>
            </ul>
          </div>
        </div>
      </div>
      <Perks />
      {company && (
        <div className="container max-lg:flex-col border-t mt-10 max-lg:py-10 lg:py-16 flex gap-5 items-center justify-between">
          <div className="max-lg:mb-5">
            <div className="flex gap-5 items-center">
              <Image src={company.image} alt={company.title} />
              <div>
                <h2 className="text-text text-3xl font-semibold">{company.title}</h2>
                <Link href={`/company/${company.id}`} className="text-primary font-[500]">
                  Read more about {company.title} <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" />
                </Link>
              </div>
            </div>
            <p className="text-gray-500 mt-6 max-w-[650px]">{company.description}</p>
          </div>
          <Fancybox>
            <div className="flex gap-3 max-[470px]:flex-col">
              <div className="max-sm:w-[230px] max-[470px]:w-full w-[300px] h-[300px] overflow-hidden">
                <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage1} alt="company image" />
              </div>
              <div>
                <div className="w-[200px] mb-[10px] h-[145px] max-[470px]:w-full overflow-hidden">
                  <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage2} alt="company image" />
                </div>
                <div className="w-[200px] h-[145px] max-[470px]:w-full overflow-hidden">
                  <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage3} alt="company image" />
                </div>
              </div>
            </div>
          </Fancybox>
        </div>
      )}
      <Jobs jobs={featuredJobs}>
        <h2 className="lg:text-3xl text-3xl md:text-4xl text-text font-[600]">Similiar Jobs</h2>
      </Jobs>

      <div className={`fixed overflow-x-hidden top-0 overflow-auto start-0 w-full h-full z-50 bg-black bg-opacity-40 justify-center sm:py-20 hidden ${submitModal && 'show-flex'}`}>
        <form className="sm:w-[550px] w-full px-3 sm:px-6 py-10 h-min bg-white relative">
          <button className="absolute top-3 end-5 text-xl" type="button" onClick={() => setSubmitModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex gap-5 mb-7 border-b pb-7">
            <div className="flex-shrink-0">
              <Image src={job.image} alt={job.title} />
            </div>
            <div>
              <h2 className="text-text text-2xl font-[600]">{job.title}</h2>
              <p className="text-gray-500 flex max-[378px]:gap-0 gap-2 max-sm:text-sm max-[378px]:flex-col">
                <span>{job.company}</span>
                <span className="max-[378px]:hidden">·</span>
                <span>{job.location}</span>
                <span className="max-[378px]:hidden">·</span>
                <span>{job.workType}</span>
              </p>
            </div>
          </div>
          <div className="border-b pb-7">
            <h2 className="text-text text-2xl font-[600]">Submit your application</h2>
            <p className="text-gray-400 mt-1">The following is required and will only be shared with Nomad</p>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Full name</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="name" placeholder="Enter your full name" />
            </label>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Email address</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="email" name="email" placeholder="Enter your email address" />
            </label>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Phone number</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="phone" placeholder="Enter your phone number" />
            </label>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Current of previous job title</p>
              <input
                className="px-4 py-3 border outline-none w-full mt-2"
                type="text"
                name="job"
                placeholder="What's your current or previous job title?"
              />
            </label>
          </div>
          <div className="border-b pb-7 mt-7">
            <h3 className="text-text text-xl font-[600]">LINKS</h3>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">LinkedIn URL</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="linkedin" placeholder="Link to your LinkedIn URL" />
            </label>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Portfolio URL</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="portfolio" placeholder="Link to your portfolio URL" />
            </label>
          </div>
          <label className="mt-7 block">
            <p className="font-[600] text-gray-600">Additional information</p>
            <textarea
              className="px-4 py-3 border outline-none w-full mt-2 resize-none"
              rows={4}
              name="description"
              placeholder="Add a cover letter or anything else you want to share"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 leading-3">
              <span>Maximum 500 characters</span>
              <span>0 / 500</span>
            </div>
          </label>
          <label className="mt-7 flex justify-between max-sm:flex-col gap-2 sm:items-center border-b pb-8">
            <p className="font-[600] text-gray-600">Attach your resume</p>
            <div className="flex justify-center cursor-pointer gap-3 border border-primary rounded relative items-center px-4 py-2.5 border-dashed text-primary">
              <FontAwesomeIcon icon={faFile} />
              <span>Attach Resume/CV</span>
              <input
                type="file"
                name="cv"
                accept=".doc,.docx,application/msword,.pdf"
                className="w-ful cursor-pointer h-full absolute top-0 start-0 opacity-0"
              />
            </div>
          </label>
          <button className="mt-7 bg-primary text-white font-semibold text-center w-full p-3">Submit Application</button>
          <p className="mt-7 text-sm">
            By sending the request you can confirm that you accept our{" "}
            <a className="text-primary" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-primary" href="#">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobDetailsPage;
