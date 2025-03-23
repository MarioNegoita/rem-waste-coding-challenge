import React from "react";

const ConfirmSkipSize = ({ skipData }) => {
  return (
    <div className=" flex flex-col  w-full bg-[#efedff] border-y-2 border-[#404271] p-4 shadow-lg text-[#404271] gap-2">
      <div className="grid grid-cols-3">
        <p className="font-bold text-lg text-center">
          {skipData.size} yard skip
        </p>

        <p className="font-bold text-lg text-center">
          £{skipData.price_before_vat}
        </p>

        <p className="font-bold text-lg text-center">
          {skipData.hire_period_days} days
        </p>
      </div>

      <button className="bg-[#404271] rounded-lg p-2 px-4 font-bold text-xl hover:bg-[#757496] text-white cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default ConfirmSkipSize;
