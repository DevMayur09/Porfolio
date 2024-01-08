import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className="">
      <div className=" grid grid-cols-8 justify-between p-5 mx-20">
        <div className="col-span-3">
          <div>
            <img
              className="p-5 rounded-full w-[75%] mx-auto"
              src={require("../img/Iphone_Cat.png")}
              alt="profile_photo"
            />
          </div>
          <div>
            <ul className="flex space-x-2 justify-between p-4 mx-14 ">
              <li className="text-gray-700 text-[50px]">
                <a href="https://github.com/DevMayur09">
                  <FaGithub />
                </a>
              </li>
              <li className="text-blue-600 text-[50px]">
                <a>
                  <FaLinkedin />
                </a>
              </li>
              <li className="text-blue-900 text-[50px]">
                <a>
                  <FaFacebook />
                </a>
              </li>
              <li className="text-red-500 text-[50px]">
                <a>
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-5 p-10 leading-8">
          <h1 className="text-gray-800 font-extralight text-4xl mx-auto my-5">
            About Me
          </h1>
          <p className="my-5 text-gray-500">
            I am 27 year old frontend web developer, living in Pune Maharashtra. I am computer science engineer exploring
            world of web.
          </p>
          <p className="my-5  text-gray-500">
           creating a seamless visual experience
            and pixel perfect web craft for all devices with robust functioning.
            Exploring new and exciting technology for enhancing end user
            experience which is not only visually appealing but performing
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
