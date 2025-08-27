import React, { useEffect, useState } from "react";
import ShapeSetting from "../shared/ShapeSetting";
import { useCanvasHook } from "../../[slug]/page";
import FontSteeings from "./FontSteeings";

const TopNav = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [selectText, setSelectText] = useState(false);
  const { canvasEditor } = useCanvasHook(false);
  useEffect(() => {
    if (!canvasEditor) return;

    canvasEditor.on("selection:created", (e) => {
      if (e.selected[0]?.cornerStyle === "rect") {
        setShowSetting(true);
        setSelectText(false);
      }
      const activeObj = canvasEditor.getActiveObject();
      console.log(activeObj);
      if (activeObj?.text) {
        setSelectText(true);
        setShowSetting(false);
      }
    });
    canvasEditor.on("selection:updated", (e) => {
      if (e.selected[0]?.cornerStyle === "rect") {
        setShowSetting(true);
        setSelectText(false);
      }
      const activeObj = canvasEditor.getActiveObject();
      if (activeObj?.text) {
        setSelectText(true);
        setShowSetting(false);
      }
    });

    canvasEditor.on("selection:cleared", () => {
      setShowSetting(false);
      setSelectText(false);
    });
  }, [canvasEditor]);
  return (
    <>
      {(showSetting || selectText) && (
        <div className="p-4 bg-neutral-100 border-l border-[#11111124] ">
          {showSetting && <ShapeSetting />}
          {selectText && <FontSteeings />}
        </div>
      )}
    </>
  );
};

export default TopNav;
