import React from "react";
import Html from "../assets/html.png";
import Js from "../assets/java-script.png";
import Java from "../assets/javaLogo.png";
import Mysql from "../assets/mysql.png";
import C from "../assets/c.png";
import Node from "../assets/node-js.png";
import Python from "../assets/python.png";
import Reactt from "../assets/science.png";
import Skill from "../components/Skill";
import Mongo from "../assets/pngegg.png";
const Skills = ({ skills }) => {
  return (
    <>
      <div ref={skills} className="w-full min-h-screen bg-gray-900  ">
        <div className="flex relative top-20 justify-center">
          <h1 className="text-white text-4xl font-bold text-center mr-2">
            Technical
          </h1>
          <h1 className="text-yellow-500 text-4xl font-bold text-center ">
            Skills
          </h1>
        </div>
        <div className="flex justify-center items-center mt-44">
          <div className="w-10/12 flex">
            <div className="lg:w-4/12 h-72 lg:flex justify-between items-center lg:px-9 px-3 border-r-2">
              <Skill img={Html} alt={"html"} title={"HTML"} />
              <Skill img={Js} alt={"js"} title={"Java Script"} />
              <Skill img={Node} alt={"node"} title={"Node.js"} />
              <Skill img={Reactt} alt={"react"} title={"React"} />
            </div>
            <div className="w-4/12 h-72 lg:flex justify-center items-center lg:px-9 border-r-2 ">
              <Skill img={Java} alt={"java"} title={"Java"} />
              <Skill img={Python} alt={"python"} title={"Python"} />
              <Skill img={C} alt={"C"} title={"C"} />
            </div>
            <div className="w-4/12 h-72 lg:flex justify-center items-center lg:px-9">
              <Skill img={Mysql} alt={"MySql"} title={"MySql"} />
              <Skill img={Mongo} alt={"Mongo"} title={"MongoDB"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
