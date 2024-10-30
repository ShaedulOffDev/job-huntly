import { categories } from "@/mock-data";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="container pt-10">
      <h2 className="lg:text-5xl text-3xl md:text-4xl text-text font-[600]">
        Explore by <span className="text-primary">category</span>
      </h2>
      <div className="grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 mt-10">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/${c.id}`}
            className="lg:p-10 border p-6 py-8 bg-white hover:bg-primary category-item"
          >
            <FontAwesomeIcon icon={c.icon} className="text-5xl text-primary" />
            <div className="mt-10">
              <h3 className="text-2xl mb-1 font-semibold">{c.title}</h3>
              <p className="flex gap-3 items-center xl:text-lg text-gray-500">
                <span>{c.jobs_count} jobs available</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-black" />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
