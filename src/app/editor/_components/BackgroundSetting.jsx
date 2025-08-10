"use client";
import React, { useState } from "react";
import Color from "./shared/Color";
import { useCanvasHook } from "../[slug]/page";

const BackgroundSetting = () => {
  const { canvasEditor } = useCanvasHook();
  const [bg, setBg] = useState("#111");
  const onColorChange = (v) => {
    setBg(v);
    canvasEditor?.set({
      backgroundColor: v,
      backgroundImage: null,
    });
    canvasEditor.renderAll();
  };
  return (
    <div>
      <Color value={bg} onColorChange={(v) => onColorChange(v)} />
    </div>
  );
};

export default BackgroundSetting;
