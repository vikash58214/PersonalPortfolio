import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ project, scrollToSection, skills, contact, about }) => {
  return (
    <>
      <div className="w-full h-12 hidden  lg:flex items-center justify-center bg-slate-950">
        <div className=" w-10/12 flex  justify-between">
          <div className="flex">
            <h1 className="text-white font-bold text-lg">About</h1>
            <h1 className="text-yellow-500 font-bold text-lg ">Me.</h1>
          </div>
          <div className="w-5/12">
            <ul className="lg:flex justify-between text-white">
              <Link to="/">
                <li className="cursor-pointer">HOME</li>
              </Link>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection(about)}
              >
                ABOUT
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection(skills)}
              >
                SKILLS
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection(project)}
              >
                PROJECT
              </li>
              <Link to="https://drive.google.com/file/d/15z2q9N5SuQZ8tXgFGwc3kWyhdhEOe53x/view?usp=drive_link">
                {" "}
                <li className="cursor-pointer">RESUME</li>
              </Link>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection(contact)}
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
