import { LogoLight } from "@/assets";
import {
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background pt-16">
      <div className="container">
        <ul className="grid sm:grid-cols-2 max-lg:gap-y-7 lg:grid-cols-4 gap-4 text-gray-300">
          <li>
            <Image src={LogoLight} alt="logo" />
            <p className="mt-5">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-[500] text-white">About</h3>
            <ul className="flex flex-col gap-y-3 mt-5">
              <li>
                <Link href={"/"}>Companies</Link>
              </li>
              <li>
                <Link href={"/"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/"}>Terms</Link>
              </li>
              <li>
                <Link href={"/"}>Advice</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-xl font-[500] text-white">Resources</h3>
            <ul className="flex flex-col gap-y-3 mt-5">
              <li>
                <Link href={"/"}>Help Docs</Link>
              </li>
              <li>
                <Link href={"/"}>Guide</Link>
              </li>
              <li>
                <Link href={"/"}>Updates</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-xl font-[500] text-white">
              Get job notifications
            </h3>
            <p className="mt-5 max-w-[300px]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="mt-8 flex gap-2">
              <input
                type="email"
                className="bg-white border-0 p-3 text-black outline-0 w-full"
                placeholder="Email Address"
                name="email"
              />
              <button className="text-white flex-shrink-0 bg-primary px-5 py-3 font-[500]">
                Subscribe
              </button>
            </form>
          </li>
        </ul>
        <div className="py-10 max-sm:gap-y-5 max-sm:flex-col-reverse border-t flex justify-center max-sm:items-center sm:justify-between border-gray-500 text-gray-300 mt-10">
          <p>2021 @ JobHuntly. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>
              <Link
                href={"/"}
                className="bg-gray-700 aspect-square w-10 rounded-full flex justify-center items-center hover:bg-white hover:text-gray-500 transition-all"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-gray-700 aspect-square w-10 rounded-full flex justify-center items-center hover:bg-white hover:text-gray-500 transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-gray-700 aspect-square w-10 rounded-full flex justify-center items-center hover:bg-white hover:text-gray-500 transition-all"
              >
                <FontAwesomeIcon icon={faDribbble} />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-gray-700 aspect-square w-10 rounded-full flex justify-center items-center hover:bg-white hover:text-gray-500 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-gray-700 aspect-square w-10 rounded-full flex justify-center items-center hover:bg-white hover:text-gray-500 transition-all"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
