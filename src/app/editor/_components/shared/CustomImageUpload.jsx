import { Button } from "@/components/ui/button";
import { ImageUp, Loader2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageKit from "imagekit";
import { useCanvasHook } from "../../[slug]/page";
import { useParams } from "next/navigation";
import { FabricImage } from "fabric";

const CustomImageUpload = ({ selectedAi }) => {
  const { designId } = useParams();
  const { canvasEditor } = useCanvasHook();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onFileUpload = async (e) => {
    const onFileUpload = async (e) => {
      try {
        setLoading(true);
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
          setImage(event.target.result);
          console.log(event.target.result);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    const onAddToCanvas = async () => {
      try {
        if (!image) return;

        const canvasImage = await FabricImage.fromURL(image);
        canvasEditor.add(canvasImage);
        canvasEditor.renderAll();
        setImage("");
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      if (selectedAi) {
        let imageUrl = image;
        if (image?.includes("?tr=")) {
          imageUrl = imageUrl + "" + selectedAi.command;
        } else {
          imageUrl = imageUrl + "?tr=" + selectedAi.command;
        }
        console.log(imageUrl);
        setImage(imageUrl);
      }
    }, [selectedAi]);

    return (
      <div className="">
        <div className="w-full min-h-[7rem] bg-gradient-to-b from-[#bcbcbc65] to-[#d2d2d2] text-neutral-500 mt-2 mb-2 rounded-lg flex justify-center items-center relative ">
          {!image && (
            <label
              htmlFor="file"
              className="cursor-pointer p-4 flex flex-col items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className=" animate-spin " />
                </>
              ) : (
                <>
                  <ImageUp />
                  <span className="text-sm text-neutral-700 ">Upload</span>
                </>
              )}
            </label>
          )}
          {image && (
            <>
              <X
                onClick={() => setImage("")}
                className=" absolute top-2 right-3 w-5 h-5 text-red-600"
              />
              <label
                htmlFor="file"
                className="cursor-pointer p-4 flex flex-col items-center justify-center"
              >
                <Image
                  src={image || ""}
                  width={70}
                  height={70}
                  alt={"images"}
                  className=" object-cover rounded-lg shadow-xl opacity-85"
                ></Image>
              </label>
            </>
          )}
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={onFileUpload}
            multiple={false}
          />
        </div>
        {image && (
          <Button
            onClick={onAddToCanvas}
            asChild
            variant="outline"
            className="bg-gradient-to-b from-[#5e45ff] to-[#ba30ff] text-white w-full mt-2"
          >
            <span>
              {loading ? (
                <Loader2 className=" animate-spin" />
              ) : (
                "Add to canvas"
              )}
            </span>
          </Button>
        )}
      </div>
    );
  };
};
export default CustomImageUpload;
