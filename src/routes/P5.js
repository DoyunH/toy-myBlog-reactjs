import React from "react";
import {ReactP5Wrapper} from "react-p5-wrapper";
import sketch from "../drawing/sketch";

const P5 = () => {
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
};

export default P5;
