import {
  fontSettingsList,
  shapesSettingsList,
  TextSettingsList,
} from "@/config";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash } from "lucide-react";
import { useCanvasHook } from "../../[slug]/page";

const FontSteeings = () => {
  const { canvasEditor } = useCanvasHook();
  const [selectedSetting, setSelectedSetting] = useState(null);
  const onDelete = () => {
    if (canvasEditor) {
      const activeObj = canvasEditor.getActiveObject();
      if (activeObj) {
        canvasEditor.remove(activeObj);
        canvasEditor.renderAll();
      }
    }
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {fontSettingsList.map((setting, i) => (
        <div
          className={`w-full h-full cursor-pointer p-2 border border-[#1110] hover:text-purple-500 hover:scale-107 transition-all ease-in-out 
            ${
              selectedSetting === i &&
              "text-purple-600 bg-purple-50 shadow-lg border border-[#a200ff15]  rounded-md"
            }
          `}
          key={i}
          onClick={() => setSelectedSetting(i)}
        >
          
            <Popover >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <PopoverTrigger asChild>
                      <div className="flex items-center justify-center w-5 h-5">
                        {setting?.icon}
                      </div>
                    </PopoverTrigger>
                  </div>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  className="
                  data-[side=right]:slide-in-from-left-2 
                  data-[side=right]:animate-in 
                  duration-200 
                  ease-out 
                  bg-white 
                  border 
                  border-[#11111134] 
                  shadow-md
                "
                >
                  <h6 className="text-sm">{setting?.name}</h6>
                </TooltipContent>
              </Tooltip>

              <PopoverContent className="absolute left-9 -top-10 bg-[#ffffff] border-[#11111132]  justify-center items-center w-fit">
                {setting?.component}
              </PopoverContent>
            </Popover>
          </div>
      ))}

      <Tooltip>
        <TooltipTrigger asChild>
          <Trash
            onClick={() => onDelete()}
            className="w-5 h-5 cursor-pointer hover:text-purple-500 hover:scale-107 transition-all ease-in-out mt-4 text-red-600"
          />
        </TooltipTrigger>

        <TooltipContent
          side="right"
          className="
            data-[side=right]:slide-in-from-left-2 
            data-[side=right]:animate-in 
            duration-200 
            ease-out 
            bg-white 
            border 
            border-[#11111134] 
            shadow-md
          "
        >
          <h6 className="text-sm">Delete Object</h6>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default FontSteeings;
