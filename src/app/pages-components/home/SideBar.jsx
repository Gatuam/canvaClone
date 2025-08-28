"use client";

import { CreditCard, FolderOpen, Home, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function SideBar() {
  const router = useRouter();

  const handleDesignClick = () => {
    router.push("/editor/custom-design");
  };
  const path = usePathname();
  return (
    <div className="w-full h-full bg-neutral-50 border border-[#11111123] rounded-lg p-4 ">
      <div className="flex justify-center items-center flex-col">
        <button
          onClick={() => handleDesignClick()}
          className=" w-10 h-10 rounded-full bg-[#040310] flex justify-center items-center cursor-pointer text-white hover:bg-[#111111e1] "
        >
          <Plus />
        </button>
        <p className="text-neutral-500 text-sm ">create</p>
      </div>
      <nav className="mt-8 flex flex-col spave-y-7 w-full">
        {[
          {
            icon: <Home className="h-6 w-6" />,
            label: "Home",
            path: "/",
          },
          {
            icon: <FolderOpen className="h-6 w-6" />,
            label: "Project",
            path: "/folder",
          },
          {
            icon: <CreditCard className="h-6 w-6" />,
            label: "Bolling",
            path: "/billing",
          },
        ].map((item, i) => {
          return (
            <div
              key={i}
              className={`flex justify-center mb-4 cursor-pointer hover:bg-purple-200 rounded-xl transition-all delay-100 px-2 py-1 items-center ${
                item.path === path && "bg-purple-200"
              }
                `}
            >
              <ul className="w-full flex flex-col items-center py-2 text-gray-900 ">
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
