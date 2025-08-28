import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useCanvasHook } from "../../[slug]/page";

const Stroke = () => {
  const { canvasEditor } = useCanvasHook();
  const [color, setColor] = useState("#fff");
  const onColorChange = (color) => {
    if (!canvasEditor) return
    setColor(color.hex);
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      stroke: color.hex,
    });
    canvasEditor.renderAll();
  };
  return (
    <div className="flex flex-col w-full">
      <h4>Stroke color</h4>
      <SketchPicker color={color} onChange={onColorChange} />
    </div>
  );
};

export default Stroke;
