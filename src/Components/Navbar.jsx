import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoLogoAppleAr } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    ` px-3 py-2 font-medium transition duration-300 rounded-md  ${
      isActive
        ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
        : "text-gray-700 hover:text-[#632ee3]"
    }`;


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/" className={linkStyle}>
              <span className="flex items-center gap-2">
                <GoHomeFill /> Home
              </span>
            </NavLink>
            <NavLink to="/Apps" className={linkStyle}>
              <span className="flex items-center gap-2">
                <IoLogoAppleAr /> Apps
              </span>
            </NavLink>
            <NavLink to="/Installation" className={linkStyle}>
              <span className="flex items-center gap-2">
                <IoMdCloudDownload /> Installation
              </span>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-2 ml-2">
          <img src={logo} alt="Logo" className="h-8" />
          <NavLink to="/" className="text-[16px] font-bold leading-[26px] tracking-[0%] text-left capitalize font-inter bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            HERO.IO
          </NavLink>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavLink to="/" className={linkStyle}>
            <span className="flex items-center gap-2">
              <GoHomeFill /> Home
            </span>
          </NavLink>
          <NavLink to="/Apps" className={linkStyle}>
            <span className="flex items-center gap-2">
              <IoLogoAppleAr /> Apps
            </span>
          </NavLink>
          <NavLink to="/Installation" className={linkStyle}>
            <span className="flex items-center gap-2">
              <IoMdCloudDownload /> Installation
            </span>
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Mahafuj69"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white border-none"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;