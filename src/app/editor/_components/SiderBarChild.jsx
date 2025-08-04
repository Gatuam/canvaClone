import React from "react";

const SiderBarChild = ({ select }) => {
  return (
    <div className="h-[92vh] w-75 bg-[#f8f3fa] flex  border  border-[#9e9e9e4f] shadow-xl">
      <h1 className="text-2xl ">{select}</h1>
    </div>
  );
};

export default SiderBarChild;
