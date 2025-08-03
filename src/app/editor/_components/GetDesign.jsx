"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const GetDesign = ({ id }) => {
  const { data: session } = useSession();
  const [design, setDesign] = useState(null);

  useEffect(() => {
    const fetchDesign = async () => {
      if (!session) {
        console.log("No session found");
        return;
      }
      try {
        const res = await axios.get(`/api/design/${id}`);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching design:", err);
      }
    };
    if(id){
        fetchDesign();
    }
    
  }, [id]);

  return <div></div>;
};

export default GetDesign;
