"use client";
import { featuredJobs, specialists } from "@/mock-data";
import { faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Perks from "@/components/perks";
import Jobs from "@/components/jobs";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {
  params: {
    id: string;
  };
}
const SpecialistPage = ({ params: { id } }: Props) => {
  const specialist = specialists.find((c) => c.id == +id);
  const [submitModal, setSubmitModal] = useState<boolean>(false);

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
  if (!specialist) {
    return "Not Found";
  }
  return (
    <div>
      <div className="bg-[#F8F8FD]">
        <div className="container py-12 max-md:pt-5">
          <div className="flex gap-2 max-md:mb-5 text-gray-400 mb-10">
            <Link href={"/"}>Home</Link>
            <span>/</span>
            <Link href={"/specialists"}>Specialists</Link>
            <span>/</span>
            <p className="text-black">{specialist.name}</p>
          </div>
          <div className="border bg-white max-sm:flex-col px-5 py-6 flex justify-between sm:items-center">
            <div className="flex max-[425px]:gap-3 gap-6 max-[425px]:flex-col">
              <Image className="object-contain rounded-full aspect-square max-w-52" src={specialist.image} alt={specialist.name} />
              <div>
                <h1 className="text-4xl max-[425px]:text-2xl text-text max-md:text-3xl font-semibold">{specialist.name}</h1>
                <p className="text-gray-500 max-sm:text-sm">{specialist.job}</p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:mt-3 max-sm:justify-between max-sm:flex-row-reverse items-center flex-shrink-0">
              <Link href={"/"}>
                <FontAwesomeIcon className="text-gray-500 text-2xl" icon={faShareAlt} />
              </Link>
              <div className="sm:border-s sm:ps-6">
                <button className="px-10 py-3 bg-primary text-white font-[500]" onClick={() => setSubmitModal(true)}>
                  Hire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container max-lg:flex-col py-12 gap-10 border-b mb-10">
        <div className="w-full">
          {/* About */}
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">About me</h2>
            <p className="text-slate-500 mt-3">{specialist.description}</p>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Work Experience</h2>
            <ul className="mt-3">
              <li className="border-b py-3">
                <div className="sm:flex justify-between">
                  <h4 className="text-xl font-[500]">
                    <span>Film maker</span>
                    <span className="mx-2">-</span>
                    <span>Adobe</span>
                  </h4>
                  <p>Dec. 2023 - PRESENT</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deleniti fugit aliquid placeat eos quo enim, in dignissimos fugiat
                  nam?
                </p>
              </li>
              <li className="border-b py-3">
                <div className="sm:flex justify-between">
                  <h4 className="text-xl font-[500]">
                    <span>Video maker</span>
                    <span className="mx-2">-</span>
                    <span>Union Soft</span>
                  </h4>
                  <p>March. 2022 - Dec. 2023</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deleniti fugit aliquid placeat eos quo enim, in dignissimos fugiat
                  nam?
                </p>
              </li>
              <li className="border-b py-3">
                <div className="sm:flex justify-between">
                  <h4 className="text-xl font-[500]">
                    <span>Mobilograf</span>
                    <span className="mx-2">-</span>
                    <span>EPAM</span>
                  </h4>
                  <p>May. 2019 - March. 2022</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deleniti fugit aliquid placeat eos quo enim, in dignissimos fugiat
                  nam?
                </p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Education</h2>
            <ul className="mt-3">
              <li className="border-b py-3">
                <div className="sm:flex justify-between">
                  <div>
                    <h4 className="text-xl font-[500]">
                      <span>Video maker</span>
                      <span className="mx-2">-</span>
                      <span>IT Center</span>
                    </h4>
                    <p>Diploma</p>
                  </div>
                  <p>Dec. 2014 - May. 2022</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deleniti fugit aliquid placeat eos quo enim, in dignissimos fugiat
                  nam?
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[320px] max-sm:grid-cols-1 max-lg:grid grid-cols-2 max-lg:gap-5 flex-shrink-0">
          <div className="mb-7 border-b pb-6">
            <h2 className="text-text text-3xl font-semibold">Contact Info</h2>
            <div className="mt-5">
              <div className="mb-2">
                <span className="block text-sm text-gray-400">Location</span>
                <a href="#">San Francisco GMT+1</a>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-gray-400">Email</span>
                <a href="#" className="text-primary">
                  for@example.com
                </a>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-gray-400">Phone</span>
                <a href="#" className="text-primary">
                  +998(99)999-99-99
                </a>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-gray-400">Portfolio website</span>
                <a href="#" className="text-primary">
                  my-portfolio.com
                </a>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-gray-400">
                  <FontAwesomeIcon icon={faInstagram} className="me-1" />
                  Instagram
                </span>
                <a href={specialist.socials.instagram} className="text-primary">
                  {specialist.socials.instagram.slice(8, 50)}
                </a>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-gray-400">
                  <FontAwesomeIcon icon={faLinkedin} className="me-1" />
                  Linkedin
                </span>
                <a href={specialist.socials.linkedin} className="text-primary">
                  {specialist.socials.linkedin.slice(8, 50)}
                </a>
              </div>
            </div>
          </div>
          <div className="mb-7 border-b pb-6">
            <h2 className="text-text text-3xl font-semibold">Categories</h2>
            <div className="flex flex-wrap text-sm md:text-base gap-3 mt-5">
              <span className={`px-3 tag py-1 rounded-full font-[500]`}>IT/Programming</span>
              <span className={`px-3 tag py-1 rounded-full font-[500]`}>Design</span>
            </div>
          </div>
          <div>
            <h2 className="text-text text-3xl font-semibold">Skills</h2>
            <ul className="flex gap-3 items-center flex-wrap mt-5">
              <li className="bg-slate-100 text-primary px-3 py-1.5">Adobe Photoshop</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Figma</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Film maker</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Kinemaster</li>
              <li className="bg-slate-100 text-primary px-3 py-1.5">Adobe Premiere Pro</li>
            </ul>
          </div>
        </div>
      </div>
      <Perks />
      <Jobs jobs={featuredJobs}>
        <h2 className="lg:text-3xl text-3xl md:text-4xl text-text font-[600]">Popular Jobs</h2>
      </Jobs>
      <div
        className={`fixed overflow-x-hidden top-0 overflow-auto start-0 w-full h-full z-50 bg-black bg-opacity-40 justify-center sm:py-20 hidden ${
          submitModal && "show-flex"
        }`}
      >
        <form className="sm:w-[550px] w-full px-3 sm:px-6 py-10 h-min bg-white relative">
          <button className="absolute top-3 end-5 text-xl" type="button" onClick={() => setSubmitModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex gap-5 mb-7 border-b pb-7">
            <div className="flex-shrink-0">
              <Image src={specialist.image} alt={specialist.name} />
            </div>
            <div>
              <h2 className="text-text text-2xl font-[600]">{specialist.name}</h2>
              <p className="text-gray-500 text-sm">{specialist.job}</p>
            </div>
          </div>
          <div className="border-b pb-7">
            <h2 className="text-text text-2xl font-[600]">Send your request</h2>
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
              <p className="font-[600] text-gray-600">Company</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="company" placeholder="Enter your company" />
            </label>
            <label className="mt-7 block">
              <p className="font-[600] text-gray-600">Salary</p>
              <input className="px-4 py-3 border outline-none w-full mt-2" type="text" name="salary" placeholder="Enter your monthly offer" />
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
          <button className="mt-7 bg-primary text-white font-semibold text-center w-full p-3">Send request</button>
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

export default SpecialistPage;
