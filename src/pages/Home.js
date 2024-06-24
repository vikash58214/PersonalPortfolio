import React from "react";
import Img1 from "../assets/circle.png";
import ContactBtn from "../components/ContactBtn";

const Home = () => {
  return (
    <>
      <div className="w-full flex min-h-screen justify-center items-center bg-gray-900">
        <div className="w-9/12  lg:flex justify-between">
          <div className="w-6/12 flex  justify-start items-center">
            <div>
              <p className="text-yellow-500">Hello, Welcome</p>
              <h1 className="font-bold text-white text-6xl mt-8">
                I'm Vikash Sharma
              </h1>
              <p className="text-gray-500 mt-5">
                Experienced web developer specializing in the MERN stack, adept
                at building dynamic, responsive web applications. Skilled in
                MongoDB, Express.js, React, and Node.js, with a strong focus on
                delivering seamless user experiences and efficient backend
                solutions.
              </p>
              <ContactBtn />
            </div>
          </div>
          <div>
            <img src={Img1} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
