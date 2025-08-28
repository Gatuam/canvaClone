import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useCanvasHook } from "../../[slug]/page";

const FillColor = () => {
  const { canvasEditor } = useCanvasHook();
  const [color, setColor] = useState("#fff");
  const onColorChange = (color) => {
    if (!canvasEditor) return
    setColor(color.hex);
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      fill: color.hex,
    });
    canvasEditor.renderAll();
  };
  return (
    <div className="flex flex-col w-full">
        <h4>
            Shape color
        </h4>
      <SketchPicker color={color} onChange={onColorChange} />
    </div>
  );
};

export default FillColor;
