import React from "react";
import WarningTriangle from "./icons/WarningTriangle";

const WarningMessages = ({
  allowedOnRoad,
  AllowsHeavyWaste,
  hasHeavyWaste,
}) => {
  return (
    <div className=" flex flex-col gap-2 ">
      {!allowedOnRoad && (
        <div className="flex items-center gap-1  bg-yellow-500 px-2 rounded-r-lg p-1 font-semibold">
          <WarningTriangle />

          <p> Private property only</p>
        </div>
      )}

      {!AllowsHeavyWaste && hasHeavyWaste && (
        <div className="flex items-center gap-1  bg-red-500 text-white px-2 rounded-r-lg p-1">
          <WarningTriangle />

          <p> Not suitable for heavy waste</p>
        </div>
      )}
    </div>
  );
};

export default WarningMessages;
