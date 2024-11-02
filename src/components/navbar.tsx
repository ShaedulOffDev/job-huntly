import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHomeAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faUser } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Navbar = () => {
  return (
    <div className="bg-[#F8F8FD]">
      <div className="flex justify-between max-lg:px-7 max-lg:max-w-none items-center py-3 container">
        <div className="flex gap-10 items-center">
          <Link href={"/"}>
            <Image src={Logo} alt="logo light" />
          </Link>
          <ul className="md:flex hidden gap-7 items-center">
            <li>
              <Link href={"/jobs"}>Find jobs</Link>
            </li>
            <li>
              <Link href={"/companies"}>Companies</Link>
            </li>
            <li>
              <Link href={"/specialists"}>Specialists</Link>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden items-center gap-5 font-[500]">
          <Link href={'/login'} className="px-5 py-2 text-primary border-e">Login</Link>
          <Link href={'/register'} className="bg-primary py-2 px-5 text-white">Sign Up</Link>
        </div>
        <div className="fixed z-50 text-gray-800 bottom-0 flex md:hidden text-2xl start-0 end-0 w-full px-4 py-3 border-t border-t-primary bg-[#F8F8FD] justify-around items-center">
          <Link href={"/"}>
            <FontAwesomeIcon icon={faHomeAlt} />
          </Link>
          <Link href={"/jobs"}>
            <FontAwesomeIcon icon={faCompass} />
          </Link>
          <Link href={'/companies'}>
            <FontAwesomeIcon icon={faBuilding} />
          </Link>
          <Link href={'/specialists'}>
            <FontAwesomeIcon icon={faUsers} />
          </Link>
          <Link href={'/'}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
