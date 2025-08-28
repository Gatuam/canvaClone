import React from "react";
import { Slider } from "@/components/ui/slider";
import { useCanvasHook } from "../../[slug]/page";

const BorderWidth = () => {
  const { canvasEditor } = useCanvasHook();
  const onWidthChange = (value) => {
    if (!canvasEditor) return
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;
    activeObj.set({
      strokeWidth : value,
    });
    canvasEditor.renderAll();
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-sm ">border-width</h2>
      <Slider
      width="xl"
      className='bg-purple-500 rounded-2xl'
      defaultValue={[2]} min={0} max={100} step={1}
      onValueChange={(v)=>onWidthChange(v[0])}
      />
    </div>
  );
};

export default BorderWidth;
