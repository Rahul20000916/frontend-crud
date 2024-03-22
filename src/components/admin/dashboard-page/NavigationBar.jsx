import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import RightArrow from "../../../assets/rightArrow.svg";
import { LayoutDashboard, ShoppingBasket, Mail, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Dashboard",
    icons: LayoutDashboard,
  },
  {
    name: "Products",
    icons: ShoppingBasket,
  },
  {
    name: "Mails",
    icons: Mail,
  },
  {
    name: "Logout",
    icons: LogOut,
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

function NavigationBar({ onNavItemClick }) {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`py-5 flex flex-col border border-r-1 w-1/5 h-screen relative ${
        isExpanded ? "px-16" : "px-4"
      }`}
    >
      <div className="logo-div flex items-center">
        <img src={Logo} className="h-22 w-auto" alt="Logo" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-5 h-5 bg-pink-700 rounded-full absolute -right-[9.5px]  flex items-center justify-center ${
            isExpanded ? "top-16" : "top-6"
          }`}
      >
        <img src={RightArrow} className="w-[6px]" />
      </div>

      <div className="mt-9 flex-col space-y-8 cursor-pointer">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={`flex space-x-3 p-2 rounded ${
              activeNavIndex === index
                ? "bg-pink-700 text-white font-semibold"
                : ""
            }`}
            onClick={() => {
              onNavItemClick(index);
              setActiveNavIndex(index);
          }}          >
            <item.icons />
            <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
