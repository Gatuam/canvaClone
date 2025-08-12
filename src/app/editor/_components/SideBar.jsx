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
import Element from "./child/Element";
import TopNav from "./child/TopNav";
import AiTransform from "./child/AiTransform";

function SideBar() {
  const [select, SetSelect] = useState(null);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex">
      <div className=" bg-neutral-100 border border-[#11111123] m-0 p-4">
        <div className="flex justify-center items-center flex-col">
          <button className=" w-10 h-10 rounded-full bg-[#040310] flex justify-center items-center cursor-pointer text-white hover:bg-[#111111e1] ">
            <HeartPlus />
          </button>
          <p className="text-neutral-500 text-sm ">create</p>
        </div>
        <nav className="mt-8 flex flex-col spave-y-7 w-full">
          {[
            {
              icon: <ImageIcon className="h-6 w-6" />,
              label: "Image",
              component: <ImageSetting />,
              description: "Upload, edit, and perfect your images.",
            },
            {
              icon: <Square className="h-6 w-6" />,
              label: "Shape",
              component: <Element />,
              description: "Add elegant shapes to your design.",
            },
            {
              icon: <Box className="h-6 w-6" />,
              label: "Background",
              component: <BackgroundSetting />,
              description: "Set stunning backdrops in seconds.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              label: "AI",
              component: <AiTransform />,
              description: "Let AI bring magic to your creations.",
            },
            {
              icon: <Text className="h-6 w-6" />,
              label: "Font",
              component: <BackgroundSetting />,
              description: "Choose stylish fonts that speak volumes.",
            },
            
            {
              icon: <LayoutTemplate className="h-6 w-6" />,
              label: "Template",
              component: <BackgroundSetting />,
              description: "Pick templates to jumpstart your design.",
            },
            {
              icon: <Settings className="h-6 w-6" />,
              label: "Setting",
              component: <BackgroundSetting />,
              description: "Fine-tune everything to perfection.",
            },
          ].map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  SetSelect(item);
                }}
                className={`flex justify-center mb-4 border border-[#1110] cursor-pointer hover:bg-purple-50 hover:shadow-lg rounded-xl transition-all delay-100 px-2 py-1 items-center  ${
                  select?.label === item.label &&
                  "bg-purple-50 shadow-lg border border-[#a200ff15]  rounded-md"
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
      <SiderBarChild select={select} />
      <TopNav />
    </div>
  );
}

export default SideBar;
