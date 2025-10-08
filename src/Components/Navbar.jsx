import { Link } from "react-router";
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className=" hover:text-purple-700"><Link to='/'>Home</Link></li>
        <li className=" hover:text-purple-700"><Link to='/Apps'>Apps</Link></li>
        <li className=" hover:text-purple-700"><Link to='/Installation'> Installation</Link></li>
      </ul>
    </div>
        <img src={logo} alt="" className="h-8" />
    <Link to='/' className="text-xl font-bold text-primary">HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     <li className=" hover:text-purple-700"><Link to='/' >Home</Link></li>
        <li className=" hover:text-purple-700"><Link to='/Apps' >Apps</Link></li>
        <li className=" hover:text-purple-700"><Link to='/Installation' > Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">Contribute</a>
  </div>
</div>
    );
};

export default Navbar;