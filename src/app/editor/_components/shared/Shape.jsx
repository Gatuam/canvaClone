import { ShapeList } from "@/config";
import { Circle, Line, Rect, Triangle } from "fabric";
import React from "react";
import { useCanvasHook } from "../../[slug]/page";

const Shape = () => {
  const { canvasEditor } = useCanvasHook();
  const onShapeSelect = (shapeName) => {
    if (!canvasEditor) {
      console.log("Canvas editor not available");
      return;
    }
    const properties = {
      left: 100,
      top: 100,
      radius: 50,
      fill: "purple",
      stroke: "white",
      strokeWidth: 2,
      width: 100,
      height: 100,
    };
    if (shapeName === "Circle") {
      const circleRef = new Circle({
        ...properties,
      });
      canvasEditor.add(circleRef);
    } else if (shapeName === "Square") {
      const circleRef = new Rect({
        ...properties,
      });
      canvasEditor.add(circleRef);
    } else if (shapeName === "Triangle") {
      const circleRef = new Triangle({
        ...properties,
      });
      canvasEditor.add(circleRef);
    } else {
      const circleRef = new Line([50, 50, 200, 200], {
        stroke: "white",
        strokeWidth: 2,
      });
      canvasEditor.add(circleRef);
    }
    canvasEditor.renderAll();
  };
  return (
    <div className=" flex flex-wrap justify-self-start items-center gap-3">
      {ShapeList.map((shape, i) => (
        <div
          className="flex flex-col items-center gap-1  p-3 rounded-lg bg-purple-50 shadow-lg border border-[#a200ff15]  rounded-mdcursor-pointer "
          key={i}
          onClick={() => onShapeSelect(shape.name)}
        >
          <div>{shape.icon}</div>
          <h4 className="text-sm tracking-tight ">{shape.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Shape;
