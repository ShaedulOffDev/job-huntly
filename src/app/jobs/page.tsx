"use client";

import { JobLine } from "@/assets";
import { categories, featuredJobs } from "@/mock-data";
import CustomCheckbox from "@/ui/custom-checkbox";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faClose,
  faFilter,
  faList,
  faLocationDot,
  faMagnifyingGlass,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AsideState = {
  type: boolean;
  categories: boolean;
  level: boolean;
  salary: boolean;
};

const JobsPage = () => {
  const [aside, setAside] = useState<AsideState>({
    type: true,
    categories: true,
    level: true,
    salary: true,
  });
  const [jobView, setJobView] = useState("list");
  const asideHandler = (s: keyof AsideState) => {
    setAside((prev) => ({ ...prev, [s]: !prev[s] }));
  };
  const [filter, setFilter] = useState(false);
  return (
    <div>
      <div className="bg-[#F8F8FD]">
        <div className="py-14 container">
          <h1 className="text-text text-5xl font-[600] sm:text-center">
            Find your{" "}
            <span className="inline-block text-secondary">
              dream job
              <Image className="w-full object-contain" src={JobLine} alt="line" />
            </span>
          </h1>
          <p className="sm:text-center mt-8 text-lg text-gray-500">Find your next career at companies like HubSpot, Nike, and Dropbox</p>
          <div className="mt-10">
            <form className="px-5 py-4 bg-white flex max-lg:flex-wrap shadow-lg justify-between gap-5 sm:gap-6">
              <label className="flex gap-4 w-1/2 lg:border-e lg:pe-7 items-center max-lg:w-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl flex-shrink-0" />
                <input
                  className="bg-transparent border-0 border-b py-2 outline-none w-full"
                  placeholder="Job title or keyword"
                  type="text"
                  name="title"
                />
              </label>
              <label className="flex gap-4 items-center w-1/2 max-lg:w-full">
                <FontAwesomeIcon icon={faLocationDot} className="text-xl flex-shrink-0" />
                <select className="min-w-52 w-full bg-transparent border-0 border-b py-2.5 outline-none" name="location">
                  <option value="Tashkent">Tashkent</option>
                  <option value="Surkhandarya">Surkhandarya</option>
                  <option value="Bukhara">Bukhara</option>
                  <option value="Andijan">Andijan</option>
                  <option value="Fergana">Fergana</option>
                  <option value="Jizzax">Jizzax</option>
                </select>
              </label>
              <button className="bg-primary max-sm:w-full max-sm:px-5 max-sm:text-base px-8 py-3 text-lg flex-shrink-0 text-white sm:font-[500]">Search</button>
            </form>
            <div className="text-gray-400 mt-3 max-lg:text-sm text-base space-x-2">
              <span>Popular :</span>
              <span>Designer, UX Researcher, Android, Admin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex gap-8 container">
        <aside className={`w-52 text-text overflow-auto max-lg:h-full flex-shrink-0 max-lg:fixed top-0 end-0 z-50 max-lg:w-full max-lg:bg-black max-lg:bg-opacity-50 ${!filter && window.innerWidth < 1023.5 && 'max-lg:hidden'}`}>
          <span className="w-full lg:hidden -z-10 h-full absolute" onClick={() => setFilter(false)}></span>
          <form className="max-lg:bg-white max-lg:w-[280px] max-lg:px-4 max-lg:py-3">
            <div className="text-end mb-2 border-b bg-white lg:hidden sticky top-0 py-2">
              <button className="text-2xl" onClick={() => setFilter(false)} type="button">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer pb-3 items-center flex justify-between" onClick={() => asideHandler("type")}>
                <span>Type of Employment</span>
                <FontAwesomeIcon icon={aside.type ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.type && "hidden"}`}>
                <CustomCheckbox name="full-time" label="Full Time(3)" checked={false} />
                <CustomCheckbox name="part-time" label="Part Time(5)" checked={false} />
                <CustomCheckbox name="remote" label="Remote(2)" checked={false} />
                <CustomCheckbox name="internship" label="Internship(24)" checked={false} />
                <CustomCheckbox name="contract" label="Contract(3)" checked={false} />
              </div>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer py-3 items-center flex justify-between" onClick={() => asideHandler("categories")}>
                <span>Categories</span>
                <FontAwesomeIcon icon={aside.categories ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.categories && "hidden"}`}>
                {categories.map((c) => (
                  <CustomCheckbox key={c.id} name={c.title} label={`${c.title} (${Math.floor(c.jobs_count / 10)})`} checked={false} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer py-3 items-center flex justify-between" onClick={() => asideHandler("level")}>
                <span>Job Level</span> <FontAwesomeIcon icon={aside.level ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.level && "hidden"}`}>
                <CustomCheckbox name="entry" label="Entry Level (57)" checked={false} />
                <CustomCheckbox name="middle" label="Mid Level (3)" checked={false} />
                <CustomCheckbox name="Senior" label="Senior Level (5)" checked={false} />
                <CustomCheckbox name="director" label="Director (12)" checked={false} />
                <CustomCheckbox name="vp" label="VP or Above (8)" checked={false} />
              </div>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer py-3 items-center flex justify-between" onClick={() => asideHandler("salary")}>
                <span>Salary Range</span>
                <FontAwesomeIcon icon={aside.salary ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.salary && "hidden"}`}>
                <CustomCheckbox name="700-1000" label="$700 - $1000 (4)" checked={false} />
                <CustomCheckbox name="1000-1500" label="$1000 - $1500 (6)" checked={false} />
                <CustomCheckbox name="1500-2000" label="$1500 - $2000 (10)" checked={false} />
                <CustomCheckbox name="3000" label="$3000 or above (4)" checked={false} />
              </div>
            </div>
          </form>
        </aside>
        <div className="w-full text-text">
          <div className="flex max-sm:flex-col justify-between gap-2 sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold">All Jobs</h2>
              <p className="text-gray-400">Showing 73 results</p>
            </div>
            <div className="flex items-center max-sm:justify-between">
              <div className="md:border-e md:pe-5 md:me-5 space-x-3">
                <span className="text-gray-400">Sort by:</span>
                <select name="sort" className="bg-transparent outline-none">
                  <option value="relevance" className="text-black">
                    Most relevance
                  </option>
                  <option value="popular" className="text-black">
                    Most popular
                  </option>
                </select>
              </div>
              <div className="space-x-2 text-xl hidden md:block">
                <button
                  className={`${jobView == "cube" && "bg-slate-200 bg-opacity-50 text-primary"} px-3 py-2 rounded`}
                  onClick={() => setJobView("cube")}
                >
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                </button>
                <button
                  className={`${jobView == "list" && "bg-slate-200 bg-opacity-50 text-primary"} px-3 py-2 rounded`}
                  onClick={() => setJobView("list")}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
              <button className={`${filter && 'bg-slate-200 text-primary'} px-3 py-2 rounded border ms-3 lg:hidden`} onClick={() => setFilter(true)}>
                <FontAwesomeIcon icon={faFilter}/>
              </button>
            </div>
          </div>
          <div className={`grid ${jobView == "list" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 gap-x-3"} gap-y-3 mt-5`}>
            {featuredJobs.map((f) => (
              <Link
                href={`/job/${f.id}`}
                key={f.id}
                className={`sm:p-7 p-4 ${
                  jobView == "cube" ? "flex-col" : "justify-between items-start max-md:flex-col max-md:items-stretch"
                } bg-white border flex gap-3 hover:bg-primary category-item`}
              >
                <div className={`flex items-start gap-3 ${jobView == "cube" ? "mb-4 max-lg:flex-col max-lg:text-center max-lg:items-center" : 'max-[450px]:flex-col max-[450px]:text-center max-[450px]:items-center'}`}>
                  <div className="w-16 overflow-hidden aspect-square rounded-full flex-shrink-0">
                    <Image src={f.image} alt={f.company} className="object-contain max-w-full h-full" />
                  </div>
                  <div>
                    <h3 className={`text-2xl mb-1 font-semibold ${jobView == 'cube' && 'max-sm:text-center'}`}>{f.title}</h3>
                    <p className={`text-sm sm:text-base text-gray-500 ${jobView == 'cube' && 'max-sm:text-center'}`}>
                      {f.company} <span className="mx-1">·</span> {f.location}
                    </p>
                    <div className={`flex max-[380px]:gap-2 ${jobView == 'cube' ? 'max-lg:flex-col max-lg:gap-2' : 'max-[380px]:gap-2 max-[380px]:flex-col'} items-center mt-4`}>
                      <div className={`${jobView == 'cube' ? 'max-lg:border-e-0 max-lg:pe-0 max-lg:me-0' : 'max-[380px]:border-e-0 max-[380px]:pe-0 max-[380px]:me-0'} border-e pe-2 me-2 flex-shrink-0`}>
                        <span className={`px-3 py-1 text-green-500 bg-green-100 rounded-full font-[500]`}>{f.workType}</span>
                      </div>
                      <div className="flex flex-wrap text-sm md:text-base gap-3">
                        {f.tags.map((t, i) => (
                          <span key={i} className={`px-3 tag py-1 rounded-full font-[500]`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${jobView == "cube" ? "flex-col-reverse" : "flex-col"} flex gap-2`}>
                  <button className="w-full font-[500] text-white transition-all hover:bg-white hover:text-primary bg-primary px-10 py-3 text-lg border border-white">
                    Apply
                  </button>
                  <div className="w-full h-[6px] bg-[#D6DDEB]">
                    <span className="h-full w-1/4 bg-[#56CDAD] block"></span>
                  </div>
                  <p>
                    5 applied <span className="text-gray-400">of 10 capacity</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center max-sm:text-sm items-center mt-10">
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 hover:border-primary border border-white rounded">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-primary text-white rounded hover:border-primary border border-white">1</button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:border-primary border border-white">2</button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:border-primary border border-white">3</button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:border-primary border border-white">4</button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:border-primary border border-white">5</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:border-primary border border-white">33</button>
            <button className="px-3 py-1 sm:px-4 sm:py-1.5 hover:border-primary border border-white rounded">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
