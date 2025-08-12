import React, { useState } from "react";
import ShapeSetting from "../shared/ShapeSetting";
import { useCanvasHook } from "../../[slug]/page";

const TopNav = () => {
  const [showSetting, setShowSetting] = useState(false);
  const { canvasEditor } = useCanvasHook();
  if (canvasEditor) {
    canvasEditor.on("selection:created", (e) => {
      setShowSetting(true);
    });
    canvasEditor.on("selection:cleared", (e) => {
      setShowSetting(false);
    });
  }
  return (
    <>
      {showSetting === true && (
        <div className="p-4 bg-neutral-100 border-l border-[#11111124] ">
          <ShapeSetting />
        </div>
      )}
    </>
  );
};

export default TopNav;
