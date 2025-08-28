import { AITransformationSettings } from "@/config";
import Image from "next/image";
import React, { useState } from "react";
import CustomImageUpload from "../shared/CustomImageUpload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AiTransform = () => {
  const [selectedAi, setSelectedAi] = useState("");

  return (
    <div className=" flex flex-col justify-center ">
      <CustomImageUpload selectedAi={selectedAi} />
      <div className="grid grid-cols-2 gap-3 py-2">
        {AITransformationSettings.map((feature, i) => (
          <div key={i}>
            <Dialog >
              <DialogTrigger>
                <div
                  // onClick={()=> setSelectedAi(feature)}  todo

                  className="flex flex-col justify-center items-center gap-1 flex-wrap  p-2 rounded-lg border border-[#11111165] shadow-xl hover:scale-105 hover:bg-purple-100"
                >
                  <Image
                    src={feature.image}
                    width={400}
                    height={400}
                    alt={feature.name}
                    className="w-full object-cover rounded-sm shadow-lg "
                  ></Image>
                  <h2 className="text-[12px] text-purple-700 tracking-tighter text-center ">
                    {feature.name}
                  </h2>
                </div>
              </DialogTrigger>
              <DialogContent className='bg-neutral-200 space-y-4'>
                <DialogHeader>
                  <DialogTitle>Ai feature is on progress</DialogTitle>
                  <DialogDescription>
                    Ai feature will be soon in the canva clone please use other
                    feature for now
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTransform;
