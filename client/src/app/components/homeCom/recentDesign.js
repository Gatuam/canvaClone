"use client";

import { useEffect, useState } from "react";

function RecentDesigns() {
  const [userDesign, setUserDesign] = useState([]);

  async function fetchUserDesigns() {}

  useEffect(() => {
    fetchUserDesigns();
  }, []);

  const designs = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i,
      title: `Design ${i + 1}`,
      thumnail: "/placedesign.svg",
    }));
  return (
    <div>
      <h2 className="text-xl mb-4 mt-15">Recent Design</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {designs.map((design) => (
          <div key={design.id} className="group cursor-pointer ">
            <div className="bg-[#2c296b05] rounded-xl overflow-hidden mb-2  w-45 h-35 group-hover:shadow-md border border-[#1b3dff21] mr-2 "></div>
            <p>{design.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentDesigns;
