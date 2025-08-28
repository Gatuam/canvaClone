'use client'
import { stickerList } from "@/config";
import Image from "next/image";
import React, { useState } from "react";
import { useCanvasHook } from "../../[slug]/page";
import { FabricImage } from "fabric"; // Make sure to import FabricImage

const Sticker = () => {
  const { canvasEditor } = useCanvasHook();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const addStickerToCanvas = async (stickerLink) => {
    try {
      setLoading(true);
      const canvasImage = await FabricImage.fromURL(stickerLink);
      
      
      canvasEditor.add(canvasImage);
      canvasEditor.renderAll();
    } catch (error) {
      console.log("Error adding sticker:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-full gap-6">
      {stickerList.map((sticker, i) => (
        <div 
          key={i} 
          onClick={() => addStickerToCanvas(sticker.link)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            className="object-contain"
            src={sticker.link}
            width={80}
            height={60}
            alt={sticker.name}
          />
        </div>
      ))}
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default Sticker;