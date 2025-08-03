"use client";
import TopHeader from "@/app/components/homeCom/Header";
import GetDesign from "../_components/GetDesign";
import SideBar from "../_components/SideBar";
import Canvas from "../_components/CanvasEle";

function Editor() {
  return (
    <div className="max-h-screen w-full">
      <TopHeader></TopHeader>
      <div className="w-full flex justify-between items-center bg-zinc-200 h-[92vh] ">
        <div className="h-[92vh] bg-[#11111120]">
          <SideBar></SideBar>
        </div>
        <Canvas />
      </div>
    </div>
  );
}

export default Editor;
