import React from "react";
import ContactBtn from "../components/ContactBtn";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/instagram.png";
import X from "../assets/twitter.png";

const Contact = ({ contact }) => {
  return (
    <>
      <div ref={contact} className="w-full min-h-screen bg-gray-900 pt-12">
        <div className="w-full flex justify-center items-center">
          <div>
            <div className="flex justify-center">
              <h1 className="font-bold text-white text-4xl">Contact </h1>
              <h1 className="font-bold text-yellow-500 text-4xl ml-2">Me</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-14  w-full">
          <div className="w-8/12 lg:flex justify-between">
            <div className="lg:w-6/12">
              <table>
                <tr>
                  <td className="text-yellow-500 w-28 py-8">Address</td>
                  <td className="text-white">
                    Kharadi, Pune, 411014, Maharashtra
                  </td>
                </tr>
                <tr>
                  <td className="text-yellow-500 w-28 py-8">Phone</td>
                  <td className="text-white">8830066227</td>
                </tr>
                <tr>
                  <td className="text-yellow-500 w-28 py-8">Email</td>
                  <td className="text-white">vikash58214@gmail.com</td>
                </tr>
              </table>
            </div>
            <div className="lg:w-6/12 flex flex-col pt-8">
              <input
                className="h-12 rounded-sm bg-gray-600"
                type="text"
                placeholder="Name"
              />
              <textarea
                className="mt-7 h-44 rounded-sm pt-5 resize-none bg-gray-600"
                placeholder="Message"
              />
              <ContactBtn />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <div className="w-5/12">
            <h1 className="text-center font-bold text-4xl text-white">
              AboutMe.
            </h1>
            <div className="w-full flex justify-center mt-5">
              <div className="lg:w-5/12 w-full flex justify-between pb-5">
                <div className="lg:w-10 w-5">
                  <img src={Facebook} alt="facebook" />
                </div>
                <div className="lg:w-10 w-5">
                  <img src={Insta} alt="insta" />
                </div>
                <div className="lg:w-10 w-5">
                  <img src={X} alt="x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
