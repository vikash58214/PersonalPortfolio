import React from "react";

const View = ({ link }) => {
  return (
    <div className="w-full bg-gray-900 flex justify-center">
      <div className="lg:w-8/12 w-11/12 flex justify-center">
        <iframe
          src={link}
          height="1255"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
    </div>
  );
};

export default View;
