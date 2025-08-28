import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";


function AiFeatures() {
  return (
    <div className=" bg-gradient-to-r from-[#0077ff1e] to-[#01c8ff2a] rounded-xl p-6 mb-7 flex justify-center items-center flex-col border border-[#1e5dfe1b] mt-10">
      <h2 className="text-lg font-semibold flex items-center justify-center text-[rgb(175,71,255)] ml-3">
        Ai Image Generator
        <Sparkle className="h-5 w-5 text-[#a828fd] ml-2"></Sparkle>
      </h2>
      <p className="text-neutral-800 text-sm mb-1 mt-1">
        Create Creative Image using our free ai image generator
      </p>
      <div
        className="flex flex-wrap gap-3 justify-center
            "
      >
        <Button
          variant="outline"
          className="rounded-full opox-4 py-3 bg-white cursor-pointer text-neutral-700 border border-[#6d05ff66] flex items-center hover:bg-[#ededed] mt-2"
        >
          Generate thumnial from video title
        </Button>
      </div>
    </div>
  );
}

export default AiFeatures;
