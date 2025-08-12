import React from "react";
import { useCanvasHook } from "../../[slug]/page";
import { Slider } from "@/components/ui/slider";

const BorderRadius = () => {
  const { canvasEditor } = useCanvasHook();
  const onBorderRadiusChange = (value) => {
    if (!canvasEditor) return;
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      rx: value,
      ry : value
    });
    canvasEditor.renderAll();
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-sm ">Boder Raduis</h2>
      <Slider
        width="xl"
        className="bg-purple-500 rounded-2xl"
        defaultValue={[0]}
        min={0}
        max={100}
        step={1}
        onValueChange={(v) => onBorderRadiusChange(v[0])}
      />
    </div>
  );
};

export default BorderRadius;
