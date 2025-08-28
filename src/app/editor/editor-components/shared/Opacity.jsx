import React from "react";
import { useCanvasHook } from "../../[slug]/page";
import { Slider } from "@/components/ui/slider";

const Opacity = () => {
  const { canvasEditor } = useCanvasHook();
  const onOpacityChange = (value) => {
    if (!canvasEditor) return;
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      opacity: value,
    });
    canvasEditor.renderAll();
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-sm ">Opacity</h2>
      <Slider
        width="xl"
        className="bg-purple-500 rounded-2xl"
        defaultValue={[1]}
        min={0}
        max={1}
        step={0.1}
        onValueChange={(v) => onOpacityChange(v[0])}
      />
    </div>
  );
};

export default Opacity;
