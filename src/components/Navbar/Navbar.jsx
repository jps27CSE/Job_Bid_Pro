import { Link, NavLink } from "react-router-dom";
import Brandlogo from "../../assets/brandLogo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Posted Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Bid Requests</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-[40px]" src={Brandlogo} alt="" />
          <a className="btn btn-ghost normal-case text-xl">JobBidPro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <span className="btn">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
