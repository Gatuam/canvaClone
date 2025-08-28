import React, { useState } from "react";
import { useCanvasHook } from "../../[slug]/page";
import { Slider } from "@/components/ui/slider";
import { SketchPicker } from "react-color";

const BoxShadow = () => {
  const { canvasEditor } = useCanvasHook();
  const [shadowProps, setShadowProps] = useState({
    blur: 10,
    offsetX: 5,
    offsetY: 5,
    color: "#000000",
    opacity: 0.5
  });

  const applyShadow = (newProps) => {
    if (!canvasEditor) return;
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;

    const updatedProps = { ...shadowProps, ...newProps };
    setShadowProps(updatedProps);

    activeObj.set({
      shadow: {
        color: updatedProps.color,
        blur: updatedProps.blur,
        offsetX: updatedProps.offsetX,
        offsetY: updatedProps.offsetY,
        opacity: updatedProps.opacity
      }
    });
    
    canvasEditor.renderAll();
  };

  const removeShadow = () => {
    if (!canvasEditor) return;
    const activeObj = canvasEditor.getActiveObject();
    if (!activeObj) return;

    activeObj.set({ shadow: null });
    canvasEditor.renderAll();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Box Shadow</h2>
        <button 
          onClick={removeShadow}
          className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Remove
        </button>
      </div>

 
      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-600">Blur: {shadowProps.blur}px</label>
        <Slider
        className="bg-purple-500 rounded-2xl"
          width="xl"
          defaultValue={[shadowProps.blur]}
          min={0}
          max={50}
          step={1}
          onValueChange={(v) => applyShadow({ blur: v[0] })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-600">Offset X: {shadowProps.offsetX}px</label>
        <Slider
        className="bg-purple-500 rounded-2xl"
          width="xl"
          defaultValue={[shadowProps.offsetX]}
          min={-50}
          max={50}
          step={1}
          onValueChange={(v) => applyShadow({ offsetX: v[0] })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-600">Offset Y: {shadowProps.offsetY}px</label>
        <Slider
        className="bg-purple-500 rounded-2xl"
          width="xl"
          defaultValue={[shadowProps.offsetY]}
          min={-50}
          max={50}
          step={1}
          onValueChange={(v) => applyShadow({ offsetY: v[0] })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-600">Opacity: {Math.round(shadowProps.opacity * 100)}%</label>
        <Slider
        className="bg-purple-500 rounded-2xl"
          width="xl"
          defaultValue={[shadowProps.opacity]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={(v) => applyShadow({ opacity: v[0] })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-600">Shadow Color</label>
        <div className="w-fit">
          <SketchPicker
            color={shadowProps.color}
            onChange={(color) => applyShadow({ color: color.hex })}
            width="200px"
            disableAlpha={false}
          />
        </div>
      </div>
       {/* <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">Presets</label>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => applyShadow({ blur: 5, offsetX: 2, offsetY: 2, opacity: 0.3 })}
            className="text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            Subtle
          </button>
          <button
            onClick={() => applyShadow({ blur: 15, offsetX: 5, offsetY: 5, opacity: 0.4 })}
            className="text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            Medium
          </button>
          <button
            onClick={() => applyShadow({ blur: 25, offsetX: 10, offsetY: 10, opacity: 0.5 })}
            className="text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            Strong
          </button>
          <button
            onClick={() => applyShadow({ blur: 0, offsetX: 0, offsetY: 4, opacity: 0.6 })}
            className="text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            Drop
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default BoxShadow;

// const BoxShadowSimple = () => {
//   const { canvasEditor } = useCanvasHook();
//   const [shadowBlur, setShadowBlur] = useState(10);
  
//   const onShadowChange = (blur) => {
//     if (!canvasEditor) return;
//     const activeObj = canvasEditor.getActiveObject();
//     if (!activeObj) return;

//     setShadowBlur(blur);
    
//     activeObj.set({
//       shadow: {
//         color: '#000000',
//         blur: blur,
//         offsetX: blur / 2,
//         offsetY: blur / 2,
//         opacity: 0.4
//       }
//     });
    
//     canvasEditor.renderAll();
//   };

//   return (
//     <div className="flex flex-col gap-3 w-full">
//       <h2 className="text-sm">Box Shadow</h2>
//       <Slider
//         width="xl"
//         className="bg-blue-500 rounded-2xl"
//         defaultValue={[10]}
//         min={0}
//         max={50}
//         step={1}
//         onValueChange={(v) => onShadowChange(v[0])}
//       />
//     </div>
//   );
// };