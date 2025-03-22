import React, { useEffect, useState } from "react";
import WarningMessages from "./WarningMessages";

const SkipCard = ({
  skipData,
  hasHeavyWaste,
  handleSelectSkip,
  selectedSkip,
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const imageName = getSkipImageName(skipData.size);

    import(`../assets/skipImages/${imageName}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => console.error("Error loading image:", error));
  }, [skipData.size]);

  const isSelectable = skipData.allows_heavy_waste || !hasHeavyWaste;
  const isSelected = selectedSkip?.id === skipData.id;

  const cardClasses = `
    w-full flex flex-col rounded-lg bg-white text-[#404271] shadow-md transition-all border-2
    ${isSelected ? "border-[#23ce6b]" : "border-white"}
    ${
      isSelectable &&
      !isSelected &&
      "hover:border-[#404271] hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    }
     ${
       isSelectable &&
       isSelected &&
       "hover:-translate-y-1 hover:shadow-lg cursor-pointer"
     }
     ${!isSelectable && "cursor-not-allowed opacity-40"}
    `;

  const buttonClasses = `
    text-white p-2 rounded-lg text-xl font-bold w-full
    ${isSelected ? "bg-[#23ce6b]" : "bg-[#404271]"}
    ${(!isSelectable || isSelected) && "pointer-events-none"}
    ${
      isSelectable && !isSelected && "hover:bg-[#757496] hover:cursor-pointer"
    }`;

  return (
    <div
      onClick={isSelectable ? () => handleSelectSkip(skipData) : null}
      className={cardClasses}
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
            hasHeavyWaste={hasHeavyWaste}
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <p className="font-bold text-2xl">{skipData.size} yard skip</p>

        <div className="flex items-end">
          <p className="text-center font-bold text-3xl">
            £{skipData.price_before_vat}
          </p>

          <p className="font-semibold">/week</p>
        </div>

        <p className="text-[#757496]">
          {skipData.hire_period_days} days hire period
        </p>

        <button onClick={(e) => e.preventDefault()} className={buttonClasses}>
          {isSelected ? "Selected" : "Select this skip"}
        </button>
      </div>
    </div>
  );
};

const getSkipImageName = (size) => {
  if (size <= 8) return "small-skip";
  if (size <= 14) return "medium-skip";
  if (size <= 20) return "large-skip";
  return "extralarge-skip";
};

export default SkipCard;
