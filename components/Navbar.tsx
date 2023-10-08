import Image from "next/image";
import Link from "next/link";
import avatar from "../assets/images/avatar.svg";

function Navbar() {
  return (
    <nav className="flex items-center justify-between space-x-2 px-6 md:px-10 py-6 mx-8 my-4 bg-gradient-to-tr from-[#77BA99] to-[#45785f] rounded-xl">
      <div className="logo flex items-center justify-center space-x-2">
        <Link href="/">
          <Image
            src={avatar}
            width={50}
            height={50}
            className="rounded-full hover:shadow-md hover:border-2 hover:border-gray-700 transition-all ease-in-out"
            alt="avatar"
          ></Image>
        </Link>
        <div className="flex flex-col -space-y-2">
          <h1 className="font-titilium_semibold text-sm md:text-lg">
            stacked-stories
          </h1>
          <h1 className="font-light text-xs md:text-sm">technical blogs</h1>
        </div>
      </div>
      <div className="links flex flex-col space-y-3 md:flex-row md:justify-center md:space-y-0 md:items-center md:space-x-4">
        <Link
          href="/studio"
          className="px-5 py-2 text-xs md:text-base bg-gray-800 text-white rounded-xl text-center hover:bg-gray-950 hover:scale-105 transition-all ease-in-out"
        >
          Studio
        </Link>
        <Link
          href="https://github.com/gauthking"
          target="_blank"
          className="px-5 py-2 text-xs md:text-base bg-gray-800 text-white rounded-xl text-center hover:bg-gray-950 hover:scale-105 transition-all ease-in-out"
        >
          Visit Dev's GitHub
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
