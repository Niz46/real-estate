import { Link } from "react-router-dom";
import Navbar from "./ui/Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="max-padd-container fixed top-1 w-full left-0 right-0 z-50">
      {/* container */}
      <div className="max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-blue-900/5">
        <div className="flexBetween py-3">
          {/* logo */}
          <Link to={"/"}>
            <span className="font-[900] text-[28px] text-secondaryBlue">
              Luxe
              <span className="font-[600] medium-20 text-blue-400">Land</span>
            </span>
          </Link>
          {/* navbar */}
          <div className="flexCenter gap-x-4">
            {/* desktop */}
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 capitalize meduim-15 ring-1 ring-blue-900/10 rounded-full p-2 bg-primary"
              }
            />
            {/* mobile */}
            <Navbar
              containerStyles={`${
                isOpen
                  ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-9 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-blue-900/5 ease-in-out duration-300 z-50"
                  : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-blue-900/5 ease-in-out duration-300"
              }`}
            />
          </div>
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!isOpen ? (
              <MdMenu
                className="xl:hidden cursor-pointer text-3xl hover:text-secondaryBlue"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="xl:hidden cursor-pointer text-3xl hover:text-secondaryBlue"
                onClick={toggleMenu}
              />
            )}
            <Link to={"/"} className="btn-secondary flexCenter gap-x-2 medium-16 rounded-full">
              <FaUser />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
