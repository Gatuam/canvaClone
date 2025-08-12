import { AITransformationSettings } from "@/config";
import Image from "next/image";
import React from "react";

const AiTransform = () => {
  return (
    <div className="grid grid-cols-2 gap-3 py-2">
      {AITransformationSettings.map((feature, i) => (
        <div key={i} className="flex flex-col gap-4 flex-wrap max-w-50 p-2 rounded-lg border border-[#11111191] shadow-xl hover:scale-105 hover:bg-purple-100">
          <Image
            src={feature.image}
            width={400}
            height={400}
            alt={feature.name}
            className="w-full h-[120px] object-cover rounded-sm shadow-lg "
          ></Image>
          <h2 className="text-sm text-purple-700 ">
            {feature.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AiTransform;
