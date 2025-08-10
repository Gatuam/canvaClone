"use client";
import TopHeader from "@/app/components/homeCom/Header";
import GetDesign from "../_components/GetDesign";
import SideBar from "../_components/SideBar";
import Canvas from "../_components/CanvasEle";
import React, { useContext, useState } from "react";
import { CanvasContext } from "@/providers/CanvasContext";

function Editor() {
  const [canvasEditor, setCanvasEditor] = useState();
  return (
    <>
      <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
        <div className="max-h-screen w-full">
          <TopHeader></TopHeader>
          <div className="w-full flex justify-between items-center bg-zinc-200 h-[92vh] ">
            <div className="h-[92vh] bg-[#11111120]">
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

export const useCanvasHook = ()=>{
  const context = useContext(CanvasContext)
  if(!context){
    throw new Error("error")
  }
  return context
}