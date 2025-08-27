"use client";
import TopHeader from "@/app/components/homeCom/Header";
import GetDesign from "../_components/child/GetDesign";
import SideBar from "../_components/SideBar";
import Canvas from "../_components/CanvasEle";
import React, { useContext, useState } from "react";
import { CanvasContext } from "@/providers/CanvasContext";
import TopNav from "../_components/child/TopNavSettings";

function Editor() {
  const [canvasEditor, setCanvasEditor] = useState();
  return (
    <>
      <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
        <div className="max-h-screen w-full">
          <TopHeader></TopHeader>

          <div
            style={{
              backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.3) 1px, transparent 0)`,
              backgroundSize: "8px 8px",
              backgroundRepeat: "repeat",
            }}
            className="w-full flex justify-between items-center bg-zinc-200 h-[92vh] relative overflow-hidden "
          >
            <div className="h-[92vh] bg-[#11111120] flex">
              <SideBar></SideBar>
            </div>

            <Canvas />
          </div>
        </div>
      </CanvasContext.Provider>
    </>
  );
}

export default Editor;

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
