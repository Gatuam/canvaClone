import ImageKit from "imagekit";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { FabricImage } from "fabric";
import { useCanvasHook } from "../../[slug]/page";

function Images() {
  const { canvasEditor, setCanvasEditor } = useCanvasHook();
  const { designId } = useParams();
  const [loading, setLoading] = useState(false);
  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onFileUpload = async (e) => {
    try {
      setLoading(true);
      const file = e.target.files[0];
      const imageRef = await imagekit.upload({
        file: file,
        fileName: designId + ".jpg",
        isPublished: true,
      });
      const canvasImage = await FabricImage.fromURL(imageRef?.url);
      canvasEditor.add(canvasImage);
      canvasEditor.renderAll();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      <label htmlFor="file" className="cursor-pointer">
        <Button
          asChild
          variant="outline"
          className="bg-gradient-to-b from-[#5e45ff] to-[#ba30ff] text-white w-full mt-2"
        >
          <span>
            {loading ? <Loader2 className=" animate-spin" /> : "Upload"}
          </span>
        </Button>
      </label>

      <input
        id="file"
        type="file"
        className="hidden"
        onChange={onFileUpload}
        multiple={false}
      />
    </div>
  );
}

export default Images;
