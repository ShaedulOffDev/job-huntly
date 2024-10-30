import { companies, featuredJobs, specialists } from "@/mock-data";
import { faArrowRightLong, faFire, faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Australia,
  China,
  CompanyImage1,
  CompanyImage2,
  CompanyImage3,
  CompanyImage4,
  Css,
  England,
  Framer,
  Html,
  Japan,
  Js,
  Mixpanel,
  Ruby,
  Us,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FancyboxWrapper from "@/components/fancybox";
import Perks from "@/components/perks";
import Jobs from "@/components/jobs";

interface Props {
  params: {
    id: string;
  };
}
const CompanyDetailsPage = ({ params: { id } }: Props) => {
  const company = companies.find((c) => c.id == +id);
  if (!company) {
    return "Not Found";
  }
  return (
    <div>
      <div className="bg-[#F8F8FD]">
        <div className="container py-12 max-md:pt-5">
          <div className="flex gap-2 text-gray-400 max-md:mb-5 mb-10">
            <Link href={"/"}>Home</Link>
            <span>/</span>
            <Link href={"/companies"}>Companies</Link>
            <span>/</span>
            <p className="text-black">{company.title}</p>
          </div>
          <div className="flex max-sm:flex-col gap-7">
            <div className="flex-shrink-0">
              <Image src={company.image} alt={company.title} width={170} />
            </div>
            <div>
              <div className="flex gap-3 items-center mb-2">
                <h1 className="text-4xl font-bold text-text">{company.title}</h1>
                <div className="px-4 py-1 border border-primary text-primary">{company.vacancies_count} Jobs</div>
              </div>
              <a className="text-primary font-[500]" href={company.company_website}>
                {company.company_website}
              </a>
              <ul className="text-lg flex gap-x-10 gap-y-5 mt-5 flex-wrap">
                <li className="flex gap-3 items-center">
                  <div className="text-secondary bg-white w-10 h-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faFire} />
                  </div>
                  <div className="text-sm md:text-base">
                    <p className="text-slate-500">Founded</p>
                    <p className="font-[500]">July 31, 2011</p>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="text-secondary bg-white w-10 h-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className="text-sm md:text-base">
                    <p className="text-slate-500">Employees</p>
                    <p className="font-[500]">4000+</p>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="text-secondary bg-white w-10 h-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="text-sm md:text-base">
                    <p className="text-slate-500">Location</p>
                    <p className="font-[500]">20 countries</p>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="text-secondary bg-white w-10 h-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                  </div>
                  <div className="text-sm md:text-base">
                    <p className="text-slate-500">Industry</p>
                    <p className="font-[500]">{company.tags[0]}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container max-lg:flex-col py-12 gap-10">
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Company Profile</h2>
            <p className="text-slate-500 mt-3">{company.description}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-text text-3xl font-semibold">Contact</h2>
            <ul className="flex flex-wrap gap-3 mt-4">
              <li>
                <a
                  className="gap-3 inline-flex items-center px-3 py-1.5 border border-primary text-primary font-[500]"
                  href={`https://twitter.com/${company.title}`}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  <span>twitter.com/{company.title}</span>
                </a>
              </li>
              <li>
                <a
                  className="gap-3 inline-flex items-center px-3 py-1.5 border border-primary text-primary font-[500]"
                  href={`https://facebook.com/${company.title}`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                  <span>facebook.com/{company.title}</span>
                </a>
              </li>
              <li>
                <a
                  className="gap-3 inline-flex items-center px-3 py-1.5 border border-primary text-primary font-[500]"
                  href={`https://linkedin.com/company/${company.title}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>linkedin.com/company/{company.title}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <FancyboxWrapper>
              <div className="flex max-sm:flex-col gap-3">
                <div className="justify-center max-sm:flex">
                  <Image data-fancybox="company" src={CompanyImage1} alt="company image" />
                </div>
                <div className="grid max-[425px]:grid-cols-2 grid-cols-1 max-sm:grid-cols-3 max-sm:w-auto max-xl:w-[200px] w-[250px] gap-2 flex-shrink-0">
                  <div className="w-full max-sm:h-auto max-xl:h-[167px] h-[197px]">
                    <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage2} alt="company image" />
                  </div>
                  <div className="w-full max-sm:h-auto max-xl:h-[167px] h-[197px]">
                    <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage3} alt="company image" />
                  </div>
                  <div className="w-full max-sm:h-auto max-xl:h-[167px] h-[197px]">
                    <Image data-fancybox="company" className="w-full h-full object-cover" src={CompanyImage4} alt="company image" />
                  </div>
                </div>
              </div>
            </FancyboxWrapper>
          </div>
        </div>
        <div className="lg:w-[320px] max-md:flex-col max-lg:flex max-lg:gap-5 flex-shrink-0">
          <div className="mb-7">
            <h2 className="text-text text-3xl font-semibold mb-3">Tech stack</h2>
            <p className="text-slate-500">Learn about the technology and tools that Stripe uses. </p>
            <ul className="grid grid-cols-3 gap-x-3 gap-y-5 mt-7">
              <li className="flex flex-col items-center gap-1">
                <Image src={Html} alt="html" />
                <p>HTML 5</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Image src={Css} alt="CSS" />
                <p>CSS 3</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Image src={Js} alt="javascript" />
                <p>JavaScript</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Image src={Ruby} alt="Ruby" />
                <p>Ruby</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Image src={Mixpanel} alt="Mixpanel" />
                <p>Mixpanel</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Image src={Framer} alt="Framer" />
                <p>Framer</p>
              </li>
            </ul>
            <Link href={"/"} className="flex items-center gap-3 font-[500] mt-3 text-primary">
              <span>View tech stack</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
          <div>
            <h2 className="text-text text-3xl font-semibold">Office Location</h2>
            <p className="text-slate-500 mt-3">Stripe offices spread across 20 countries</p>
            <ul className="flex flex-col gap-3 mt-5">
              <li className="flex gap-2 items-center font-[500]">
                <Image src={Us} className="max-w-[40px]" alt="us America" />
                <p>United States</p>
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <Image src={England} className="max-w-[40px]" alt="england" />
                <p>England</p>
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <Image src={Japan} className="max-w-[40px]" alt="japan" />
                <p>Japan</p>
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <Image src={Australia} className="max-w-[40px]" alt="Australia" />
                <p>Australia</p>
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <Image src={China} className="max-w-[40px]" alt="china" />
                <p>China</p>
              </li>
            </ul>
            <Link href={"/"} className="flex items-center gap-3 font-[500] mt-5 text-primary">
              <span>View countries</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mb-10">
        <div className="py-14 text-center border-t border-b">
          <div className="flex justify-between items-center gap-3 mb-3">
            <h2 className="text-text text-3xl font-semibold">Team</h2>
            <Link className="font-[500] text-primary" href={"/"}>
              See all(47)
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 max-sm:grid-cols-2 max-[425px]:grid-cols-1 lg:grid-cols-5 gap-3">
            {specialists.map((s) => (
              <Link className="rounded category-item hover:bg-primary px-3 py-5 justify-center xl:py-10 flex border flex-col items-center" key={s.id} href={`/specialist/${s.id}`}>
                <div className="w-18 h-18 rounded-full overflow-hidden">
                  <Image className="w-full h-full object-cover" src={s.image} alt={s.name} />
                </div>
                <h3 className="font-[500] text-text text-lg mt-3">{s.name}</h3>
                <p className="text-slate-500">{s.job}</p>
                <div className="flex justify-center items-center gap-3 text-gray-500 text-xl mt-3">
                  <p>
                    <FontAwesomeIcon icon={faInstagram} />
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Perks/>
      <hr className="container mt-10"/>
      <Jobs jobs={featuredJobs}>
        <h2 className="lg:text-3xl text-3xl md:text-4xl text-text font-[600]">Open Jobs</h2>
      </Jobs>
    </div>
  );
};

export default CompanyDetailsPage;
