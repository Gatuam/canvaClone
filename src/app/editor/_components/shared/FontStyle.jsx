import React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "../../../../../@/components/ui/toggle";
import { useCanvasHook } from "../../[slug]/page";

const FontStyle = () => {
  const { canvasEditor } = useCanvasHook();
  const onClick = (type) => {
    const activeObj = canvasEditor.getActiveObject();
    if (activeObj) {
      if (type === "bold") {
        activeObj.set({
          fontWeight: activeObj?.fontWeight === "bold" ? "" : "bold",
        });
      }
      if (type === "underline") {
        activeObj.set({
          underline: activeObj.underline === true ? false : true,
        });
      }
      if (type === "italic") {
        activeObj.set({
          fontStyle: activeObj?.fontStyle === "italic" ? "normal" : "italic",
        });
      }
      canvasEditor.add(activeObj);
    }
  };
  return (
    <div className="w-full h-full cursor-pointer py-2  ">
      <Toggle
        onClick={() => onClick("bold")}
        className={" hover:bg-gray-200 cursor-pointer"}
      >
        <Bold
          className=" h-4 w-4 text-purple-500 transition-all ease-in-out"
          size={"md"}
        />
      </Toggle>
      <Toggle
        onClick={() => onClick("italic")}
        className={" hover:bg-gray-200 cursor-pointer"}
      >
        <Italic
          className=" h-4 w-4 text-purple-500 transition-all ease-in-out"
          size={"md"}
        />
      </Toggle>
      <Toggle
        onClick={() => onClick("underline")}
        className={" hover:bg-gray-200 cursor-pointer "}
      >
        <Underline
          className=" h-4 w-4  text-purple-500 transition-all ease-in-out"
          size={"md"}
        />
      </Toggle>
    </div>
  );
};

export default FontStyle;
