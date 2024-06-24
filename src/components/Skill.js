import React from "react";

const Skill = ({ img, alt, title }) => {
  return (
    <>
      <div className="w-14 ml-5 text-center">
        <img src={img} alt={alt} />
        <p className="text-white">{title}</p>
      </div>
    </>
  );
};

export default Skill;
