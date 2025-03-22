import React from "react";
import WarningTriangle from "./icons/WarningTriangle";

const WarningMessages = ({ allowedOnRoad, AllowsHeavyWaste }) => {
  return (
    <div className=" flex flex-col gap-2">
      {!allowedOnRoad && (
        <div className="flex items-center gap-2  bg-yellow-500 px-2 rounded-r-lg">
          <WarningTriangle />

          <p> Private property only</p>
        </div>
      )}

      {!AllowsHeavyWaste && (
        <div className="flex items-center gap-2  bg-red-500 text-white px-2 rounded-r-lg">
          <WarningTriangle />

          <p> Not suitable for heavy waste</p>
        </div>
      )}
    </div>
  );
};

export default WarningMessages;
