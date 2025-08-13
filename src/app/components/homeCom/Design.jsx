"use client";
import axios from "axios";
import { designTypes } from "../../config/index";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function DesignType() {
  const { data: session, status } = useSession();
  console.log('session', session);
  const router = useRouter();

  const createDesign = async (design) => {
    try {
      if (status === "loading") {
        console.log("Session loading...");
        return;
      }
      
      if (!session) {
        console.log("No session found");
        return;
      }

      const res = await axios.post("/api/design", {
        title: design.label || "Untitled",
        width: design.width,
        height: design.height,
        data: {},
        imagePreview: "",
      });
      
      router.push('/editor/' + session?.userId);
      
    } catch (error) {
      console.error("Error creating design:", error);

      if (error.response?.status === 401) {
        console.log("User not authenticated");
      } else if (error.response?.status === 404) {
        console.log("User not found in database");
      }
    }
  };

  const handleDesignClick = (design) => {
    if (status === "loading") return; 

    if (!session) {
      console.log("Please sign in first");
      return;
    }
    
    createDesign(design);
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mt-8">
      {designTypes.map((design, i) => {
        return (
          <div
            key={i}
            className="flex flex-col items-center mt-5 cursor-pointer"
            onClick={() => handleDesignClick(design)}
          >
            <div
              className={`${design.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-2 hover:scale-110 hover:shadow-lg transition-transform`}
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