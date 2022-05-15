import React from "react";

const Write = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <input className='border-4 border-gray-400' type='text' />
      <div>
        <textarea
          className='border-4 border-gray-400'
          cols='30'
          rows='10'
        ></textarea>
      </div>
    </div>
  );
};

export default Write;
