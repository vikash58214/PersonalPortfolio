import React from "react";
import Img1 from "../assets/project1.png";
import Img2 from "../assets/project2.png";
import Img3 from "../assets/project3.png";
import { Link } from "react-router-dom";

const Projects = ({ project }) => {
  return (
    <>
      <div
        ref={project}
        className="w-full min-h-screen bg-slate-950 flex justify-center"
      >
        <div className="w-10/12 py-14 flex flex-col justify-center h-full">
          <div>
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-4xl">My</h1>
              <h1 className="text-yellow-500 font-bold text-4xl">Project</h1>
            </div>
            <div className="text-gray-500 flex justify-center items-center mt-12">
              <p className="lg:w-4/12 text-center">
                asdfasfljalsdjlas laskd jflakjs flasdjk flasdkj flkalsdfjl sald
                jflasd fsad flks adflkasd kf asdl fdsa fasd flsad flasd f sadf
                sadlk flsda fasj dfl
              </p>
            </div>
          </div>
          <div className="lg:flex w-full justify-between mt-16 text-black font-bold">
            <div className="lg:w-4/12  cursor-pointer border-2 rounded-md border-yellow-500">
              <Link to="/project1">
                <img src={Img1} alt="project" />
              </Link>
              <p className="text-center bg-yellow-400">E-Commerce Website</p>
            </div>

            <div className="lg:w-4/12 lg:mx-3 my-4 lg:my-0  border-2 rounded-md border-yellow-500   cursor-pointer">
              <Link to="/project2">
                <img src={Img2} alt="project" />
              </Link>
              <p className="text-center bg-yellow-400">Social Media</p>
            </div>
            <div className="lg:w-4/12  cursor-pointer border-2 rounded-md border-yellow-500">
              <Link to="project3">
                <img src={Img3} alt="project" />
              </Link>
              <p className="text-center bg-yellow-400">Weather Application</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
