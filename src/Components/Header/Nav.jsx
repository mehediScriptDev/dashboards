import logo from "../../images/logo.png";
import logo1 from "../../images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Dashboards from './../../Pages/Dashboards';
const Nav = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to={"/about"}>About us</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to={"/services"}>Services</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to={"/blog"}>Blog & Research</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to={"/dashboards"}>Dashboards</NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="relative z-50 bg-gradient-to-r from-[#06422c]/10 via-[#013522cd]/35 to-[#035a3ab8]/35">
      <div className="navbar z-10 w-11/12 mx-auto 2xl:max-w-9/12">
        <div className="navbar-start">
          <div className="dropdown mr-0 lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="">
                  <FaBars />
                </label>
              </div>
              <div className="drawer-side ">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                ></label>
                <ul className="menu bg-gradient-to-r from-[#06422c] via-[#013522] to-[#035a3aee]  text-white min-h-full  w-80 p-4">
                    <div className="flex items-center gap-2 mb-6 border-b border-white pb-4">
                        <img src={logo1} className="w-10 h-auto" alt="" />
                        <h1 className="text-xl font-semibold">PajeetLand</h1>
                    </div>
                  {/* Sidebar content here */}
                  {links}
                </ul>
              </div>
            </div>
          </div>
          <a className="btn btn-ghost mx-0 text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal [&_a]:rounded-none px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          
          <a className="btn btn-xs shadow-none md:btn-sm bg-btn-primary border-transparent px-6 text-white">
            Download App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
