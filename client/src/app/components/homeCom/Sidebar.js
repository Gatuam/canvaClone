"use client";

import { CreditCard, FolderOpen, Home, Plus } from "lucide-react";

function SideBar() {
  return (
    <div className="w-full h-full bg-neutral-50 border border-[#11111123] rounded-lg p-4 ">
      <div className="flex justify-center items-center flex-col">
        <button className=" w-10 h-10 rounded-full bg-[#040310] flex justify-center items-center cursor-pointer text-white hover:bg-[#111111e1] ">
          <Plus />
        </button>
        <p className="text-neutral-500 text-sm ">create</p>
      </div>
      <nav className="mt-8 flex flex-col spave-y-7 w-full">
        {[
          {
            icon: <Home className="h-6 w-6" />,
            label: "Home",
            active: true,
          },
          {
            icon: <FolderOpen className="h-6 w-6" />,
            label: "Project",
            active: false,
          },
          {
            icon: <CreditCard className="h-6 w-6" />,
            label: "Bolling",
            active: false,
          },
        ].map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center ">
              <ul className="w-full flex flex-col items-center py-2 text-gray-900 mb-4">
                <div className="relative">{item.icon}</div>
                <span className="text-sm ">{item.label}</span>
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default SideBar;
