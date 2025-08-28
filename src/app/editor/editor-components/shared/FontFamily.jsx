import { Button } from "@/components/ui/button";
import { FontFamilyList } from "@/config";
import React from "react";
import { useCanvasHook } from "../../[slug]/page";

const FontFamily = () => {
  const { canvasEditor } = useCanvasHook();
    const onFontChange = (value) => {
    if (!canvasEditor) return;
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      fontFamily: value,
    });
    canvasEditor.renderAll();
  };
  return (
    <div className=" max-h-[85vh] overflow-y-scroll font-con">
      {FontFamilyList.map((font, i) => (
        <Button
        onClick={()=> onFontChange(font.font)}
          className={" cursor-pointer hover:bg-blue-200 bg-gray-200 ml-3 mb-2 text-gray-900"}
          key={i}
          asChild
        >
          <p
          style={{
            fontFamily : font.name
          }}
          >{font.name}</p>
        </Button>
      ))}
    </div>
  );
};

export default FontFamily;
