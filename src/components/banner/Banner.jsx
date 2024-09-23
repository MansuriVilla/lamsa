import React from "react";

export default function Banner(props) {
  return (
    <>
      <div
        className="inner_banner"
        style={{ background: `url(${props.image}) center center / cover` }}
      >
        <h1>{props.title}</h1>
      </div>
    </>
  );
}
