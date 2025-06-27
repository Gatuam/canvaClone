import { designTypes } from "../../config/index";

function DesignType() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mt-8">
      {designTypes.map((design, i) => {
        return (
          <div
            key={i}
            className="flex flex-col items-center  mt-5 cursor-pointer hover:scale-1.1"
          >
            <div
              className={`${design.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-2`}
            >
              {design.icon}
            </div>
            <span className="text-sm text-center ">{design.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default DesignType;
