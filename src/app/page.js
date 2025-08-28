"use client";

import Banner from "./pages-components/home/Banner";
import DesignType from "./pages-components/home/Design";
import TopHeader from "./pages-components/home/Header";
import SideBar from "./pages-components/home/SideBar";
import AiFeatures from "./pages-components/home/AiFeature";
import RecentDesigns from "./pages-components/home/RecentDesign";

export default function Home() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="w-[8%] h-screen bg-[#11111120]">
        <SideBar></SideBar>
      </div>

      <div className="flex flex-1 flex-col ">
        <TopHeader></TopHeader>
        <main className="pt-3 p-9 overflow-y-auto  ">
          <Banner></Banner>
          <DesignType></DesignType>
          <AiFeatures></AiFeatures>
          <RecentDesigns></RecentDesigns>
        </main>
      </div>
    </div>
  );
}
