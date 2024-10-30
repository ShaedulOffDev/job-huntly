import { featuredJobs } from "@/mock-data";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="container py-16">
      <div className="sm:flex justify-between items-center">
        <h2 className="lg:text-5xl text-3xl md:text-4xl text-text font-[600]">
          Featured <span className="text-primary">jobs</span>
        </h2>
        <Link
          href={"/jobs"}
          className="text-primary max-sm:mt-3 flex items-center gap-5 sm:font-[500] sm:text-lg"
        >
          <span>Show all jobs</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="grid max-[550px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-8 mt-10">
        {featuredJobs.map((f) => (
          <Link
            href={`/job/${f.id}`}
            key={f.id}
            className="sm:p-7 p-4 border bg-white hover:bg-primary category-item"
          >
            <div className="flex justify-between items-center">
              <div className="w-16 overflow-hidden aspect-square rounded-full">
                <Image
                  src={f.image}
                  alt={f.company}
                  className="object-contain max-w-full h-full"
                />
              </div>
              <p className="px-3 py-1.5 text-primary border border-primary">
                {f.workType}
              </p>
            </div>
            <div className="mt-3">
              <h3 className="text-2xl mb-1 text-text font-semibold">{f.title}</h3>
              <p className="text-sm sm:text-base text-gray-500">
                {f.company} <span className="mx-1">·</span> {f.location}
              </p>
              <p className="text-gray-400 mt-5">
                {f.description && f.description.length > 55
                  ? f.description.slice(0, 55) + "..."
                  : f.description}
              </p>
            </div>
            <div className="flex flex-wrap text-sm md:text-base gap-3 mt-7">
              {f.tags.map((t, i) => (
                <span key={i} className={`px-3 tag py-1 rounded-full font-[500]`}>
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
