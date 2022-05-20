import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-4xl mb-10">Practice Project</h1>
      <div>
        <ul className="flex flex-col justify-center items-center space-y-8">
          <li>
            <div className="transition-all ease-in-out hover:-translate-y-[5px]">
              <Link
                to={"/article"}
                className="transition-all ease-in-out text-xl hover:-translate-y-[5px]  hover:border-b-[5px] border-black border-solid border-2 border-collapse m-2  bg-cyan-300 font-bold py-2 px-20  rounded-full"
              >
                Article
              </Link>
            </div>
          </li>
          <li>
            <div className="transition-all ease-in-out hover:-translate-y-[5px]">
              <Link
                to={"/aboutme"}
                className="transition-all ease-in-out text-xl hover:-translate-y-[5px]  hover:border-b-[5px] border-black border-solid border-2 border-collapse m-2  bg-red-300 font-bold py-2 px-10  rounded-full"
              >
                About Me
              </Link>
            </div>
          </li>
          <li>
            <div className="transition-all ease-in-out hover:-translate-y-[5px] ">
              <Link
                to={"/article"}
                className="transition-all ease-in-out text-xl hover:-translate-y-[5px]  hover:border-b-[5px] border-black border-solid border-2 border-collapse m-2  bg-yellow-300 font-bold py-2 px-10 rounded-full"
              >
                Write
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
