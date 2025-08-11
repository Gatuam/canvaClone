"use client";

import {
  Box,
  HeartPlus,
  ImageIcon,
  LayoutTemplate,
  Settings,
  Sparkles,
  Square,
  Text,
} from "lucide-react";
import { useState } from "react";
import SiderBarChild from "./child/SiderBarChild";
import BackgroundSetting from "./child/BackgroundSetting";
import ImageSetting from "./child/ImageSetting";

function SideBar() {
  const [select, SetSelect] = useState(null);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex h-full">
      <div className=" bg-neutral-50 border border-[#11111123] m-0 p-4">
        <div className="flex justify-center items-center flex-col">
          <button className=" w-10 h-10 rounded-full bg-[#040310] flex justify-center items-center cursor-pointer text-white hover:bg-[#111111e1] ">
            <HeartPlus />
          </button>
          <p className="text-neutral-500 text-sm ">create</p>
        </div>
        <nav className="mt-8 flex flex-col spave-y-7 w-full">
          {[
            {
              icon: <LayoutTemplate className="h-6 w-6" />,
              label: "Templat",
              component : <BackgroundSetting/>
            },
            {
              icon: <ImageIcon className="h-6 w-6" />,
              label: "Image",
              component : <ImageSetting/>
            },
            {
              icon: <Square className="h-6 w-6" />,
              label: "Shape",
              component : <BackgroundSetting/>
            },
            {
              icon: <Text className="h-6 w-6" />,
              label: "Font",
              component : <BackgroundSetting/>
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              label: "Ai",
              component : <BackgroundSetting/>
            },
             {
              icon: <Box className="h-6 w-6" />,
              label: "Background",
              component : <BackgroundSetting/>
            },
            {
              icon: <Settings className="h-6 w-6" />,
              label: "Setting",
              component : <BackgroundSetting/>
            },
          ].map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                SetSelect(item);

                }}
                className={`flex justify-center mb-4 cursor-pointer hover:bg-purple-200 rounded-xl transition-all delay-100 px-2 py-1 items-center ${
                  select?.label === item.label && "bg-purple-200"
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
      {open === true && <SiderBarChild select={select} />}
    </div>
  );
}

export default SideBar;
