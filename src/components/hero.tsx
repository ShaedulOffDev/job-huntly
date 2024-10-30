import { Line } from "@/assets";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#F8F8FD]">
      <div className="container py-28 max-lg:py-24 max-sm:pb-14">
        <h1 className="text-[72px] font-[600] max-lg:text-5xl text-text max-[320px]:text-4xl leading-[78px]">
          Discover <br /> more than <br />
          <span className="text-secondary">5000+ Jobs</span>
          <Image src={Line} alt="line" className="mt-2 max-lg:max-w-[300px] max-[320px]:max-w-[95%]" />
        </h1>
        <p className="lg:text-xl text-gray-700 max-w-[500px] mt-4">
          Great platform for the job seeker that searching for new career heights
          and passionate about startups.
        </p>
        <div className="mt-8">
          <form className="px-5 py-4 bg-white inline-flex max-lg:flex-wrap shadow-lg justify-between gap-5 sm:gap-8">
            <label className="flex gap-3 items-center max-lg:w-full">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl flex-shrink-0" />
              <input
                className="bg-transparent border-0 border-b py-2 outline-none max-lg:w-full"
                placeholder="Job title or keyword"
                type="text"
                name="title"
              />
            </label>
            <label className="flex gap-3 items-center max-lg:w-full">
              <FontAwesomeIcon icon={faLocationDot} className="text-xl flex-shrink-0" />
              <select
                className="min-w-52 bg-transparent border-0 border-b py-2 outline-none max-lg:w-full"
                name="location"
              >
                <option value="Tashkent">Tashkent</option>
                <option value="Surkhandarya">Surkhandarya</option>
                <option value="Bukhara">Bukhara</option>
                <option value="Andijan">Andijan</option>
                <option value="Fergana">Fergana</option>
                <option value="Jizzax">Jizzax</option>
              </select>
            </label>
            <button className="bg-primary max-sm:px-5 max-sm:text-base px-8 py-3 text-lg text-white sm:font-[500]">
              Search my job
            </button>
          </form>
          <div className="text-gray-500 mt-3 max-lg:text-sm text-base space-x-2">
            <span>Popular :</span>
            <span>Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
