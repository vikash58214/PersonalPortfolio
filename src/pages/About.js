import React from "react";
import Img from "../assets/about .png";
import ContactBtn from "../components/ContactBtn";

const About = ({ about }) => {
  return (
    <>
      <div
        ref={about}
        className="w-full min-h-screen bg-slate-950 flex justify-center items-center"
      >
        <div className="lg:w-10/12 lg:flex justify-between">
          <div className="lg:w-6/12  w-11/12">
            <img src={Img} alt="abott" />
          </div>
          <div className="lg:w-6/12 mt-8 lg:mt-0 flex flex-col justify-center ">
            <div className="flex w-full  justify-center lg:justify-start mb-4">
              <h1 className="text-white font-bold text-4xl">About</h1>
              <h1 className="font-bold text-4xl text-yellow-500">Me</h1>
            </div>
            <div>
              <p className="text-gray-500 lg:w-8/12 lg:my-5">
                I'm a passionate web developer with expertise in the MERN stack
                (MongoDB, Express.js, React, Node.js) and Java. I create
                dynamic, responsive web applications and enjoy solving complex
                problems with innovative solutions. Let's build something great
                together!
              </p>
              <ContactBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
