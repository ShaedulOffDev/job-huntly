import { DashImage } from "@/assets";
import Image from "next/image";

const Posting = () => {
  return (
    <div className="container py-20">
      <div className="posting bg-primary px-8 sm:px-14 md:px-20 py-24 2xl:py-40 lg:flex overflow-hidden relative justify-between items-center text-white">
        <div>
          <h1 className="sm:text-4xl text-3xl font-semibold">Start posting <br /> jobs today</h1>
          <p className="sm:text-lg my-5">Start posting jobs for only $10.</p>
          <button className="text-primary sm:text-lg bg-white sm:px-8 px-5 py-3 font-semibold">
            Sign Up For Free
          </button>
        </div>
        <div className="lg:absolute end-24 bottom-0 max-lg:mt-10">
          <Image src={DashImage} alt="dashboard image" className="max-lg:w-auto max-xl:w-[400px]"/>
        </div>
      </div>
    </div>
  );
};

export default Posting;
