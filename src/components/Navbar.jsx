import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Kerrousti.svg";
export default function Navbar({ inLanding }) {
  return (
    <div
      className={`flex h-16 justify-between px-8 py-2' ${
        !inLanding && "shadow-md mb-12 bg-gray-100"
      }`}
    >
      <img alt="logo" src={logo} className="cursor-pointer" />
      <ul className="cursor-pointer flex space-x-8 text-lg">
        <Link to="/home" className="hover:text-[#0066FF] flex items-center">
          <li className="hover:text-[#0066FF] flex items-center">Home</li>
        </Link>
        <Link to="/profil" className="hover:text-[#0066FF] flex items-center">
          <li>Profil</li>
        </Link>
        <li className="hover:text-[#0066FF] flex items-center">About</li>
        <li className="hover:text-[#0066FF] flex items-center">Log out</li>
      </ul>
    </div>
  );
}
