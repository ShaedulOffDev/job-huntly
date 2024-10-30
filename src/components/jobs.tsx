import { jobType } from "@/interfaces";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Jobs = ({ children, jobs }: { children: ReactNode; jobs: jobType[] }) => {
  return (
    <div className="container py-16">
      <div className="sm:flex justify-between items-center">
        {children}
        <Link href={"/jobs"} className="text-primary max-sm:mt-3 flex items-center gap-5 sm:font-[500] sm:text-lg">
          <span>Show all jobs</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3 mt-10">
        {jobs.map((l) => (
          <Link
            href={`/job/${l.id}`}
            key={l.id}
            className="sm:p-7 p-4 border bg-white sm:flex-row flex-col items-center flex sm:items-start gap-3 hover:bg-primary category-item"
          >
            <div className="w-16 overflow-hidden aspect-square rounded-full flex-shrink-0">
              <Image src={l.image} alt={l.company} className="object-contain max-w-full h-full" />
            </div>
            <div>
              <h3 className="text-2xl text-text mb-1 font-semibold max-sm:text-center">{l.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 max-sm:text-center">
                {l.company} <span className="mx-1">·</span> {l.location}
              </p>
              <div className="flex max-[380px]:gap-2 max-[380px]:flex-col items-center mt-4 ">
                <div className="max-[380px]:border-e-0 border-e max-[380px]:pe-0 pe-2 max-[380px]:me-0 me-2 flex-shrink-0">
                  <span className={`px-3 py-1 text-green-500 bg-green-100 rounded-full font-[500]`}>{l.workType}</span>
                </div>
                <div className="flex flex-wrap text-sm md:text-base gap-3">
                  {l.tags.map((t, i) => (
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
    </div>
  );
};

export default Jobs;
