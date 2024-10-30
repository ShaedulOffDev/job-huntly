"use client";

import { AmdLogo, Intel, Talkit, Tesla, Vodafone } from "@/assets";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="container bg-white py-10 max-lg:max-w-none">
      <h3 className="text-gray-500 mb-7 sm:text-lg max-sm:mb-4">Companies we helped grow</h3>
      <div className="overflow-auto scrollbarhidden">
        <div className="flex justify-between items-center max-sm:min-w-[680px] min-w-[991px]">
          <div className="max-sm:w-[100px]">
            <Image
              className="max-w-full object-contain"
              src={Vodafone}
              alt="vodafone company image"
            />
          </div>
          <div className="max-sm:w-[100px]">
            <Image
              className="max-w-full object-contain"
              src={Intel}
              alt="intel company image"
            />
          </div>
          <div className="max-sm:w-[100px]">
            <Image
              className="max-w-full object-contain"
              src={Tesla}
              alt="Tesla company image"
            />
          </div>
          <div className="max-sm:w-[100px]">
            <Image
              className="max-w-full object-contain"
              src={AmdLogo}
              alt="Amd company image"
            />
          </div>
          <div className="max-sm:w-[100px]">
            <Image
              className="max-w-full object-contain"
              src={Talkit}
              alt="Talkit company image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
