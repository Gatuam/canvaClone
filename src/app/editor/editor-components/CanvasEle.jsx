"use client";
import { Canvas } from "fabric";
import React, { useEffect, useRef, useState } from "react";
import { useCanvasHook } from "../[slug]/page";

const CanvasEle = ({ designinfo }) => {
  const canvaRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const { canvasEditor, setCanvasEditor } = useCanvasHook();

  useEffect(() => {
    if (canvaRef.current) {
      const initCanva = new Canvas(canvaRef.current, {
        width: 1200 / 2,
        height: 1200 / 2,
        backgroundColor: canvasEditor || "#111",
        preserveObjectStacking: true,
      });
      const scalefactor = window.devicePixelRatio || 1;
      initCanva.set({
        width: 1200 * scalefactor,
        height: 720 * scalefactor,
        zoom: 1 * scalefactor,
      });
      initCanva.renderAll();
      setCanvas(initCanva);
      setCanvasEditor(initCanva);
      return () => {
        initCanva.dispose();
      };
    }
  }, []);

  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.key === "Delete" || e?.key === "backspace") {
        if (canvasEditor) {
          const activeObj = canvasEditor.getActiveObject();
          if (activeObj) {
            canvasEditor.remove(activeObj);
            canvasEditor.renderAll();
          }
        }
      }
    };
    document.addEventListener("keydown", handelKeyDown);

    return () => {
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, [canvasEditor]);

  return (
    <>
      
      <div className="w-full h-full flex justify-center items-center">
        <canvas className=" shadow-xl" ref={canvaRef} />
      </div>
    </>
  );
};

export default CanvasEle;
