import {useTypewriter,cursor} from 'react-simple-typewriter'

const Header = () => {

  const [typeEffect] = useTypewriter({
    words : ['Frontend developer', 'Artist','Tea Lover','Proud Indian'],
    loop:{},
    typeSpeed:150,
    deleteSpeed:150
  })

  return (
    <div className=" flex relative justify-center bg-[#FF9130] mb-10">
      <div className="absolute">
        <div>
          <img
            className="w-screen h-screen hidden md:block"
            alt="background image"
            src={require("../img/bg.png")}
          ></img>
        </div>
      </div>
      <div className="absolute">
        <ul className="flex text-white space-x-10 px-2 md:px-5 py-5 font-light text-[20px] cursor-pointer">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Blogs</li>
          <li>Quates</li>
        </ul>
      </div>
      <div className="flex flex-col relative z-10 min-w-[75%] justify-center items-center my-[5%]">
        <div className="flex justify-center ">
          <img
            alt="plane gif"
            src={require("../img/plane.gif")}
            className="w-[40%]"
          />
        </div>
        <div className="text-white block text-center mt-[5%]">
          <h1 className="text-6xl font-cursive">Mayur Thool</h1>
          <div className="my-[40px] text-3xl font-bold">
            <span>I am a</span>
            <span className=""> {typeEffect}</span>
          </div>
        </div>
        <div className="mb-10">
          <button className="border text-white font-semibold px-7 py-4 rounded-full">
            Buy me a Tea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
