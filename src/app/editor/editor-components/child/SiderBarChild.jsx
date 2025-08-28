import React from "react";

const SiderBarChild = ({ select }) => {
  return (
    <>
      {select && (
        <div className="h-[92vh] max-w-md min-w-xs bg-[#f8f3fa] flex flex-col itec border  border-[#8e8e8e0a] shadow-xl p-4 space-y-4 ">
          <div className="mb-5 space-y-1">
            <h1 className="text-3xl font-semibold ">{select?.label}</h1>
            <p className="text-sm tracking-wide text-neutral-500">{select?.description}</p>
          </div>
          <div className="border border-[#1111111b] flex justify-center items-center py-4 px-4  bg-neutral-100 rounded-xl shadow-md space-y-6 cursor-pointer overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
            {select?.component || null }
          </div>
        </div>
      )}
    </>
  );
};

export default SiderBarChild;
