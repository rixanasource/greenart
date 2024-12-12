import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="text-green-500 text-lg font-bold">
         Green Art
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-green-800 text-neon-green" : "text-green-500" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-green-800 text-neon-green" : "text-green-500" }>
          Videos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
