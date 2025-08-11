import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCanvasHook } from "../../[slug]/page";
import { FabricImage } from "fabric";

const SearchImages = () => {
  const { canvasEditor } = useCanvasHook();
  const [images, setImages] = useState([]);
  const [searchImage, setSearchImage] = useState("cat");

  useEffect(() => {
    GetImagesList("Gradients");
  }, []);
  const GetImagesList = async (searchInput) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchInput,
        page: 1,
        per_page: 20,
      },
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
      },
    });
    console.log(res);
    setImages(res?.data?.results);
  };
  const addImageToCanvas = async (imageUrl) => {
    const canvasImageRef = await FabricImage.fromURL(imageUrl);
    canvasEditor.add(canvasImageRef);
    canvasEditor.renderAll();
  };
  return (
    <>
      <div className="mt-4 border-t border-[#11111134] p-0 py-2 space-y-2">
        <h2>search images</h2>
        <div className="flex justify-center items-center gap-3 ">
          <Input
            onChange={(e) => setSearchImage(e.target.value)}
            className=" border-[#11111132] focus-visible:outline-none focus-visible:ring-0"
            placeholder={"Mountain"}
          />
          <div className="bg-gradient-to-b from-[#9223f4] to-[#a45fff] p-2 rounded-lg cursor-pointer">
            <Search
              onClick={() => GetImagesList(searchImage)}
              className="text-white w-4 h-5"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-3 mt-3 overflow-auto max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {images.map((image, i) => (
          <div
            key={i}
            className="border border-[#11111132] rounded-lg shadow-xl"
          >
            <Image
              onClick={() => addImageToCanvas(image?.urls?.small)}
              className="rounded-lg w-40 h-25 overflow-hidden object-cover cursor-pointer"
              alt={image?.slug}
              width={120}
              height={120}
              src={image?.urls?.thumb}
            ></Image>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchImages;
