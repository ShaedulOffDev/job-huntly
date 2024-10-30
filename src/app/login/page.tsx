import { DesignerImage, Google, Quote, Specialist6, StatsLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center">
      <div className="w-[550px] max-lg:hidden xl:w-[700px] flex-shrink-0 bg-[#F8F8FD] flex justify-center items-end h-[calc(100vh-100px)] relative">
        <Image src={DesignerImage} className="object-contain w-full max-w-[350px]" alt="designer image" />
        <div className="bg-white p-5 absolute top-32 left-20">
          <Image src={StatsLogo} alt="statistics logo png" />
          <p className="text-lg font-semibold mt-3">1000+</p>
          <p className="text-gray-500">People got hired</p>
        </div>
        <div className="bg-white p-5 absolute bottom-10 right-20 max-w-[300px]">
          <div className="absolute rounded-full border-slate-100 overflow-hidden w-20 h-20 bg-primary flex justify-center items-center border-8 -top-6 right-10">
            <Image src={Specialist6} className="w-full h-full object-contain" alt="specialist image" />
          </div>
          <Image src={Quote} alt="quote logo png" />
          <p className="text-gray-500 font-[500] mt-2">Adam Sandler</p>
          <p className="text-gray-400">Lead Engineer at Canva</p>
          <p className="text-lg font-semibold mt-3">“Great platform for the job seeker that searching for new career heights.”</p>
        </div>
      </div>
      <div className="w-full justify-center flex p-5 bg-white max-lg:py-10 max-lg:bg-gradient-to-t to-[#f8f8fd] from-white">
        <form className="max-w-[500px] w-full">
          <div className="flex justify-center">
            <button className="bg-slate-200 text-primary font-[600] px-4 py-2">Job Seeker</button>
            <button className="text-primary font-[600] px-4 py-2">Company</button>
          </div>
          <h2 className="text-4xl font-bold text-center text-text mt-7">Welcome Back, Dude</h2>
          <button className="border w-full flex justify-center items-center gap-2 mt-5 font-[600] text-primary p-3">
            <Image src={Google} alt="google" />
            Login with Google
          </button>
          <div className="flex justify-between gap-3 mt-7 items-center text-gray-400">
            <span className="w-1/2 bg-slate-200 h-[1px]"></span>
            <p className="flex-shrink-0">Or login with email</p>
            <span className="w-1/2 bg-slate-200 h-[1px]"></span>
          </div>
          <label className="mt-7 block">
            <p className="font-[600] text-text">Email Address</p>
            <input className="p-4 border outline-none w-full mt-2" type="email" name="email" placeholder="Enter email address" />
          </label>
          <label className="mt-7 block">
            <p className="font-[600] text-text">Password</p>
            <input className="p-4 border outline-none w-full mt-2" type="password" name="password" placeholder="Enter password" />
          </label>
          <button className="w-full text-center text-white bg-primary p-4 font-semibold mt-7">Login</button>
          <div className="mt-7 text-gray-600">
            Don&apos;t have an account?
            <Link className="text-primary ms-2 font-semibold" href={"/register"}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
