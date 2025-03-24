import React, { useEffect, useState } from "react";
import WarningMessages from "./global/WarningMessages";
import { getSkipCardImageName } from "../utils";

const SkipCard = ({
  skipData,
  hasHeavyWaste,
  handleSetModalInformation,
  selectedSkip,
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const imageName = getSkipCardImageName(skipData.size);

    import(`../assets/skipImages/${imageName}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => console.error("Error loading image:", error));
  }, [skipData.size]);

  const isSelectable = skipData.allows_heavy_waste || !hasHeavyWaste;
  const isSelected = selectedSkip?.id === skipData.id;

  let cardState;

  if (isSelectable) {
    cardState = "available";
  } else cardState = "unavailable";

  if (cardState == "available") {
    if (isSelected) {
      cardState += "-selected";
    } else cardState += "-notSelected";
  }

  const generateCardClassName = (isSelected, cardState) => {
    let className =
      "w-full flex flex-col rounded-lg bg-white text-secondary shadow-md transition-all border-3 overflow-hidden";

    if (isSelected) className += " border-success";
    else className += " border-white";

    switch (cardState) {
      case "available-notSelected":
        className +=
          " hover:border-secondary hover:-translate-y-1 hover:shadow-lg cursor-pointer";
        break;
      case "available-selected":
        className += " hover:-translate-y-1 hover:shadow-lg cursor-pointer";
        break;
      case "unavailable":
        className += " cursor-not-allowed opacity-40";
        break;
      default:
        "";
    }

    return className;
  };

  const generateButtonClassName = (isSelected, cardState) => {
    let className = " text-white p-2 rounded-lg text-xl font-bold w-full";

    if (isSelected) className += " bg-success";
    else className += " bg-secondary";

    switch (cardState) {
      case "available-notSelected":
        className += " hover:bg-accent hover:cursor-pointer";
        break;
      case "available-selected":
        className += " pointer-events-none";
        break;
      case "unavailable":
        className += " pointer-events-none";
        break;
      default:
        "";
    }

    return className;
  };

  const buttonClasses = generateButtonClassName(isSelected, cardState);
  const cardClasses = generateCardClassName(isSelected, cardState);

  return (
    <div
      onClick={isSelectable ? () => handleSetModalInformation(skipData) : null}
      className={cardClasses}
    >
      <div className="h-70 w-full overflow-hidden flex relative">
        <img
          src={imageSrc}
          alt={`Skip of size ${skipData.size}`}
          className="size-full object-cover rounded-b-lg"
        />

        <div className="absolute bottom-2 flex flex-col gap-2">
          <WarningMessages
            allowedOnRoad={skipData.allowed_on_road}
            AllowsHeavyWaste={skipData.allows_heavy_waste}
            hasHeavyWaste={hasHeavyWaste}
          />
        </div>

        <div className=" absolute flex top-2 right-0 bg-secondary text-white rounded-l-lg px-2 py-1">
          <p className="font-bold text-lg  ">{skipData.size} yard skip</p>
        </div>
      </div>

      <p className="font-bold text-2xl text-center mt-4 ">
        {skipData.size} yard skip
      </p>

      <div className="p-4 space-y-4">
        <button onClick={(e) => e.preventDefault()} className={buttonClasses}>
          {isSelected ? "Selected" : `£${skipData.price_before_vat}`}
        </button>

        <p className="text-accent text-center">
          {skipData.hire_period_days} days hire period
        </p>
      </div>
    </div>
  );
};

export default SkipCard;
