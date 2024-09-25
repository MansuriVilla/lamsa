// CountUpWrapper.jsx
import React, { forwardRef } from "react";
import CountUp from "react-countup";

const CountUpWrapper = forwardRef((props, ref) => {
  return <CountUp ref={ref} {...props} />;
});

export default CountUpWrapper;
