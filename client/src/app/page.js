"use client";

import Banner from "./components/homeCom/Banner";
import DesignType from "./components/homeCom/design";
import TopHeader from "./components/homeCom/Header";
import SideBar from "./components/homeCom/Sidebar";
import AiFeatures from "./components/homeCom/ai-feature";
import RecentDesigns from "./components/homeCom/recentDesign";

export default function Home() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="w-[6%] h-screen bg-[#11111120]">
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
