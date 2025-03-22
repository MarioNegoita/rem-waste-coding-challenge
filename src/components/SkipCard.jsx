import React, { useEffect, useState } from "react";

import WarningMessages from "./WarningMessages";

const SkipCard = ({ skipData }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let imageName;

    // if (skipData.size <= 6) {
    //   imageName = "extrasmall-skip";
    // } else
    if (skipData.size <= 8) {
      imageName = "small-skip";
    } else if (skipData.size <= 14) {
      imageName = "medium-skip";
    } else if (skipData.size <= 20) {
      imageName = "large-skip";
    } else {
      imageName = "extralarge-skip";
    }

    import(`../assets/skipImages/${imageName}.png`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [skipData.size]);

  return (
    <div
      onClick={() => console.log("selected")}
      className="w-full flex flex-col rounded-lg bg-white text-[#404271] shadow-md transition-all border-2 border-white hover:border-[#404271] hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      <div className="h-70 w-full rounded-t-md overflow-hidden flex relative">
        <img
          src={imageSrc}
          alt={`Skip of size ${skipData.size}`}
          className="size-full object-cover"
        />

        <div className="absolute bottom-2 flex flex-col gap-2">
          <WarningMessages
            allowedOnRoad={skipData.allowed_on_road}
            AllowsHeavyWaste={skipData.allows_heavy_waste}
          />
        </div>
      </div>

      <div className="p-4  space-y-4">
        <p className="font-bold text-2xl">{skipData.size} yard skip</p>

        <div className="flex  items-end">
          <p className="text-center font-bold text-3xl ">
            {skipData.price_before_vat}£
          </p>

          <p className="font-semibold">/week</p>
        </div>

        <p className="text-[#757496]">
          {skipData.hire_period_days} days hire period
        </p>

        <button className="bg-[#404271] hover:bg-[#757496] text-white p-2 rounded-lg text-xl font-bold w-full hover:cursor-pointer">
          Select this skip
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
