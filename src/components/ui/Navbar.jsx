import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavIcons, navs } from "../../constants/data";

const Navbar = ({ containerStyles }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Check if the current URL matches the parent or any child paths
  const isActive = (nav) => {
    if (nav.path === location.pathname) return true;
    if (nav.children) {
      return nav.children.some((child) => child.path === location.pathname); // Any child match
    }
    return false;
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className={`${containerStyles}`}>
      {navs.map((nav) => (
        <div key={nav.path}>
          <div>
            <NavLink
              to={nav.children ? "#" : nav.path} // Prevent navigation for dropdown parents
              className={() =>
                isActive(nav)
                  ? "active-link flexCenter gap-x-1 rounded-full py-1 px-2"
                  : "flexCenter gap-x-1 py-1 px-2 rounded-full hover:text-secondaryBlue ease-in-out duration-300"
              }
              onClick={() => nav.children && toggleDropdown(nav.name)}
            >
              {NavIcons[nav.name.toLowerCase()] && (
                <span>{NavIcons[nav.name.toLowerCase()]}</span>
              )}
              <div>{nav.name}</div>
            </NavLink>
          </div>
          {nav.children && openDropdown === nav.name && (
            <div className="absolute top-full mt-2 min-w-[210px] bg-white shadow-lg rounded-md p-2 z-50">
              {nav.children.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={
                    "dropdown-item flex gap-x-1 rounded-full cursor-pointer py-3 px-3 hover:text-secondaryBlue ease-in-out duration-300"
                  }
                >
                  {child.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
