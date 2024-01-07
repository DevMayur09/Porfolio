import React from "react";
import { FaHtml5 ,FaCss3Alt,FaReact,FaNodeJs} from "react-icons/fa";
import { TbBrandJavascript ,TbBrandTailwind} from "react-icons/tb"

const Blog = () => {
  return (
    <div className="bg-[#303030] w-full min-h-[400px] p-10">
        <div className="flex text-center flex-col justify-center mx-auto">
            <div className="">
                <h1 className="text-gray-400 font-extralight text-5xl border-b pb-5">Skills</h1>
            </div>
            <div className="mt-20">
                <ul className="flex space-x-5 text-center">
                
                        <li className="text-orange-400 text-[100px] w-48">
                        <div className="ml-11"><FaHtml5/></div>
                        <span className="text-[24px] font-medium text-gray-400">HTML</span> 
                        </li>
                        <li className="text-blue-500 text-[100px] w-48">
                        <div className="ml-11"><FaCss3Alt/></div>
                        <span className="text-[24px] font-medium text-gray-400">CSS 3</span> 
                        </li>
                        <li className="text-blue-300 text-[100px] w-48">
                        <div className="ml-11"><TbBrandTailwind/></div>
                        <span className="text-[24px] font-medium text-gray-400">Tailwind</span> 
                        </li>
                        <li className="text-yellow-400 text-[100px] w-48">
                        <div className="ml-11"><TbBrandJavascript/></div>
                        <span className="text-[24px] font-medium text-gray-400">Javascript</span> 
                        </li>
                        <li className="text-blue-800 text-[100px] w-48">
                        <div className="ml-11"><FaReact/></div>
                        <span className="text-[24px] font-medium text-gray-400">React</span> 
                        </li>
                        <li className="text-green-700 text-[100px] w-48">
                        <div className="ml-11"><FaNodeJs/></div>
                        <span className="text-[24px] font-medium text-gray-400">NodeJS</span> 
                        </li>
                    
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Blog;
