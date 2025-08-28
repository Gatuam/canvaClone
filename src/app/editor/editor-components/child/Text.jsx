import React from "react";
import { useCanvasHook } from "../../[slug]/page";
import { IText } from "fabric";
// import { textPresets } from "@/config";

const TextSetting = () => {
  const { canvasEditor } = useCanvasHook();
  const onAddfont = (type) => {
    if (!canvasEditor) return;

    if (type === "head") {
      const textRef = new IText("ADD HEADING", {
        fontSize: 38,
        fontWeight: "bold",
        fontFamily: "Arial",
        fill: "white",
        left: 100,
        top: 100,
      });
      canvasEditor.add(textRef);
      canvasEditor.renderAll();
    } else if (type === "sub") {
      const textRef = new IText("ADD HEADING", {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Arial",
        fill: "white",
        left: 100,
        top: 160,
      });
      canvasEditor.add(textRef);
      canvasEditor.renderAll();
    } else {
      const textRef = new IText("ADD HEADING", {
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: "Arial",
        fill: "gray",
        left: 100,
        top: 200,
      });
      canvasEditor.add(textRef);
      canvasEditor.renderAll();
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center  w-full space-y-2 ">
      {/* {textPresets.map((font, i) => (
        <h2
        key={i}
          onClick={() => onAddfont("head")}
          className=" font-bold text-2xl px-4 py-3 text-neutral-900 bg-neutral-200 rounded-lg "
        >
          {font.name}
        </h2>
      ))} */}
      <h2
        onClick={() => onAddfont("head")}
        className=" font-bold text-2xl px-4 py-3 text-neutral-900 bg-neutral-200 rounded-lg "
      >
        Heading
      </h2>
      <h2
        onClick={() => onAddfont("sub")}
        className=" text-xl px-4 py-3 text-neutral-900 bg-neutral-200 rounded-lg "
      >
        Sub Heading
      </h2>
      <h2
        onClick={() => onAddfont("body")}
        className="  text-sm px-4 py-3 text-neutral-900 bg-neutral-200 rounded-lg "
      >
        Body text
      </h2>
    </div>
  );
};

export default TextSetting;
