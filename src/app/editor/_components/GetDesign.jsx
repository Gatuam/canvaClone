"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const GetDesign = ({ id }) => {
  const { data: session } = useSession();
  const [design, setDesign] = useState();

  useEffect(() => {
    const fetchDesign = async () => {
      if (!session) {
        console.log("No session found");
        return;
      }
      try {
        const res = await axios.get(`/api/design/${id}`);
        setDesign(res.data.data);
        console.log("Design fetched:", res.data.data);
      } catch (error) {
        console.error("Error fetching design:", error); 
      }
    };
    
    if (id && session) { 
      fetchDesign();
    }
  }, [id, session]); 


  useEffect(() => {
    if (design) {
      console.log("Design state updated:", design);
    }
  }, [design]);

  return <div></div>;
};

export default GetDesign;