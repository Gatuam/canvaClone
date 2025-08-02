"use client";

import { Crown } from "lucide-react";
import { Button } from "../ui/button";

function Banner() {
  return (
    <div className=" rounded-xl overflow-hidden bg-gradient-to-r from-[#04eef6] to-[#233cf4ed] flex flex-col justify-center gap-1 items-center w-full h-50  ">
      <div className="flex flex-col sm:flex-row justify-center items-center ">
        <Crown className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#ecff70]"></Crown>
        <span className=" sm:ml-2 text-2xl sm:text-4xl md:text-5xl text-[#f3fffd] ">
          Create Innovative Design
        </span>
      </div>
      <h3 className="text-[12px] tracking-wider text-white block ">
        Design Eye-catching Design with canva
      </h3>
      <Button className=" text-[#0273fd] bg-white rounded-lg px-5 py-1 mt-2 hover:bg-neutral-200 cursor-pointer">
        Start Designing
      </Button>
    </div>
  );
}

export default Banner;
