'use client'
import axios from "axios";
import { designTypes } from "../../config/index";
import { useSession } from "next-auth/react";

 function DesignType() {
  const { data: session } = useSession();
  console.log(session)

  const createDesign = async (design) => {
    try {
      const res = await axios.post("/api/design", {
        title: design.title,
        width: design.width,
        height: design.height,
        data: "",
        imagePreview: "",
      },
       {
    withCredentials: true,
  }
    );
      console.log("Design created:", res.data.design);
    } catch (error) {
      console.error("Error creating design:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mt-8 ">
      {designTypes.map((design, i) => {
        return (
          <div
            key={i}
            className="flex flex-col items-center  mt-5 cursor-pointer "
            onClick={()=> createDesign(design)}
          >
            <div
              className={`${design.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-2 hover:scale-1.1 hover:shadow-lg `}
            >
              {design.icon}
            </div>
            <span className="text-sm text-center">{design.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default DesignType;
