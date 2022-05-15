import React from "react";
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <h1 className='font-bold text-4xl mb-10'>Doyun's Blog</h1>
      <div>
        <ul className='flex space-x-2'>
          <li>
            <Link
              to={"/article"}
              className='bg-cyan-300 font-bold px-5 py-2 rounded-full'
            >
              Article
            </Link>
          </li>
          <li>
            <Link
              to={"/write"}
              className='bg-yellow-300 font-bold px-5 py-2 rounded-full'
            >
              Write
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
