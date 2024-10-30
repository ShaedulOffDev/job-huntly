"use client"

import { CompanyTitle } from "@/assets";
import { companies } from "@/mock-data";
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

const CompaniesPage = () => {
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

  const sliceHandler = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <div>
      <div className="bg-[#F8F8FD]">
        <div className="py-14 container">
          <h1 className="text-text text-5xl font-[600] sm:text-center">
            Find your{" "}
            <span className="inline-block text-secondary">
              dream companies
              <Image className="w-full h-full object-contain" src={CompanyTitle} alt="line" />
            </span>
          </h1>
          <p className="sm:text-center mt-8 text-lg text-gray-500">Find the dream companies you dream work for</p>
          <div className="mt-10">
            <form className="px-5 py-4 bg-white flex max-lg:flex-wrap shadow-lg justify-between gap-5 sm:gap-6">
              <label className="flex gap-4 w-1/2 lg:border-e lg:pe-7 items-center max-lg:w-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl flex-shrink-0" />
                <input
                  className="bg-transparent border-0 border-b py-2 outline-none w-full"
                  placeholder="Company name or keyword"
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
              <button className="bg-primary max-sm:w-full max-sm:px-5 max-sm:text-base px-8 py-3 text-lg flex-shrink-0 text-white sm:font-[500]">
                Search
              </button>
            </form>
            <div className="text-gray-400 mt-3 max-lg:text-sm text-base space-x-2">
              <span>Popular :</span>
              <span>Twitter, Microsoft, Apple, Facebook</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex gap-8 container">
        <aside
          className={`w-52 text-text overflow-auto max-lg:h-full flex-shrink-0 max-lg:fixed top-0 end-0 z-50 max-lg:w-full max-lg:bg-black max-lg:bg-opacity-50 ${
            !filter && "max-lg:hidden"
          }`}
        >
          <span className="w-full lg:hidden -z-10 h-full absolute" onClick={() => setFilter(false)}></span>
          <form className="max-lg:bg-white max-lg:w-[280px] max-lg:px-4 max-lg:py-3">
            <div className="text-end mb-2 border-b bg-white lg:hidden sticky top-0 py-2">
              <button className="text-2xl" onClick={() => setFilter(false)} type="button">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer pb-3 items-center flex justify-between" onClick={() => asideHandler("type")}>
                <span>Industry</span>
                <FontAwesomeIcon icon={aside.type ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.type && "hidden"}`}>
                <CustomCheckbox name="advertising" label="Advertising (43)" checked={false} />
                <CustomCheckbox name="business-service" label="Business Service (4)" checked={false} />
                <CustomCheckbox name="blockchain" label="Blockchain (5)" checked={true} />
                <CustomCheckbox name="cloud " label="Cloud (15)" checked={false} />
                <CustomCheckbox name="consumer-tech" label="Consumer Tech (5)" checked={false} />
                <CustomCheckbox name="education" label="Education (34)" checked={false} />
                <CustomCheckbox name="fintech" label="Fintech (45)" checked={false} />
                <CustomCheckbox name="gaming" label="Gaming (33)" checked={false} />
                <CustomCheckbox name="food-beverage" label="Food & Beverage (5)" checked={false} />
                <CustomCheckbox name="healthcare" label="Healthcare (3)" checked={false} />
                <CustomCheckbox name="hosting" label="Hosting (5)" checked={false} />
                <CustomCheckbox name="media" label="Media (4)" checked={false} />
              </div>
            </div>
            <div>
              <h4 className="font-[500] cursor-pointer py-3 items-center flex justify-between" onClick={() => asideHandler("level")}>
                <span>Company Size</span> <FontAwesomeIcon icon={aside.level ? faChevronUp : faChevronDown} />
              </h4>
              <div className={`space-y-3 text-gray-300 mt-1 mb-3 ${!aside.level && "hidden"}`}>
                <CustomCheckbox name="1-50" label="1-50 (25)" checked={false} />
                <CustomCheckbox name="51-150" label="51-150 (57)" checked={false} />
                <CustomCheckbox name="151-250" label="151-250 (45)" checked={false} />
                <CustomCheckbox name="251-50" label="251-500 (4)" checked={true} />
                <CustomCheckbox name="501-1000" label="501-1000 (43)" checked={false} />
                <CustomCheckbox name="1000-above" label="1000 - above (23)" checked={false} />
              </div>
            </div>
          </form>
        </aside>
        <div className="w-full text-text">
          <div className="flex max-sm:flex-col justify-between gap-2 sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold">All Companies</h2>
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
              <button className={`${filter && "bg-slate-200 text-primary"} px-3 py-2 rounded border ms-3 lg:hidden`} onClick={() => setFilter(true)}>
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </div>
          </div>
          <div className={`grid ${jobView == "list" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 gap-x-3"} gap-y-3 mt-5`}>
            {companies.map((c) => (
              <Link href={`/company/${c.id}`} key={c.id} className={`sm:p-7 p-4 bg-white border gap-3 hover:bg-primary category-item`}>
                <div>
                  <div className="flex justify-between gap-1 items-start mb-3">
                    <div>
                      <div className="w-16 overflow-hidden aspect-square flex-shrink-0">
                        <Image src={c.image} alt={c.title} className="object-contain max-w-full h-full" />
                      </div>
                      <h3 className={`text-2xl mt-2 font-semibold ${jobView == "cube" && "max-sm:text-center"}`}>{c.title}</h3>
                    </div>
                    <div className="text-primary bg-slate-100 px-2 py-0.5 rounded">{c.vacancies_count} Jobs</div>
                  </div>
                  <div>
                    <p className={`text-sm sm:text-base text-gray-500`}>
                      {jobView == "cube"
                        ? sliceHandler(c.description, 130)
                        : window.innerWidth > 768
                        ? sliceHandler(c.description, 300)
                        : sliceHandler(c.description, 130)}
                    </p>
                    <div className="flex flex-wrap text-[12px] sm:text-sm md:text-base gap-1 sm:gap-3 mt-5">
                      {c.tags.map((t, i) => (
                        <span key={i} className={`px-3 tag py-1 rounded-full font-[500]`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
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

export default CompaniesPage;
