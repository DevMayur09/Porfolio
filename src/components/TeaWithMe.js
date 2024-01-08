import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin ,FaArrowRight} from "react-icons/fa";

const TeaWithMe = () => {
  return (
    <div className="w-full p-10 flex flex-col justify-center items-center text-gray-500 text-center">
      <div>
        <h1 className="text-5xl font-extralight mx-auto">Tea With Me</h1>
        <p className="mt-5">
          I love to do work on exciting and challenging project. Let's talk over
          the Tea
        </p>
      </div>
      <div className="my-10">
        <p className="text-left text-3xl my-3 px-3">
          <label>Drop the message to me</label>
        </p>
       <div className="p-1 w-[75vw] bg-gray-200 h-20 flex rounded-lg">
       <input className="p-5 w-full focus:outline-none bg-transparent " placeholder="Write a message" />
        <button className="text-5xl px-5"><FaArrowRight/></button>
       </div>
      </div>
      <div className="flex w-[75vw]">
        <div className="w-1/3 px-7 py-5">
          <span className="text-gray-700 font-bold">No © copyright issues. </span>
           Feel free to copy. If you need any help, ping me !
        </div>
        <div className="w-1/3 p-5 text-orange-500 text-4xl font-cursive font-semibold">Mayur Thool</div>
        <div className="w-1/3 p-5">
            <h1>You can find me here.</h1>
        <div>
            <ul className="flex space-x-2 justify-between p-4 mx-14 ">
              <li className="text-gray-700 text-[40px]">
                <a href="https://github.com/DevMayur09">
                  <FaGithub />
                </a>
              </li>
              <li className="text-blue-600 text-[40px]">
                <a>
                  <FaLinkedin />
                </a>
              </li>
              <li className="text-blue-900 text-[40px]">
                <a>
                  <FaFacebook />
                </a>
              </li>
              <li className="text-red-500 text-[40px]">
                <a>
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img src={require("../img/foot.jpg")} />
      </div>
    </div>
  );
};

export default TeaWithMe;
