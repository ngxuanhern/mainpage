import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
    <nav>
      <div 
      
      className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Single</p>
          <p className="text-secondary">Blooming</p>
          <GiFlowerPot className="text-pink-400" />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3
                   hover:text-primary hover:shadow-[0_3px_0_-1px_red] font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          
          {/* Sign In Icon */}
          <button className="relative flex items-center justify-center text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiUser size={24} />
          </button>

          {/* Cart Icon */}
          <button className="relative flex items-center justify-center text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiShoppingCart size={24} />
            <span className="absolute text-white bg-red-700 w-4 h-4 rounded-full flex items-center justify-center text-[0.6rem] font-semibold -top-1 -right-1">
              0
            </span>
          </button>
          </ul>
        </div>
        {/*Mobile Hamburger Menu section*/}
        <div className="md:hidden" onClick={()=> setOpen(!open)}>
        <GiHamburgerMenu  className="text-4xl"/>
        </div>
      </div>
    </nav>

    {/*Mobile Menu section*/}
    <ResponsiveMenu open={open} setOpen={setOpen}/>
</>
  );
};

export default Navbar;
