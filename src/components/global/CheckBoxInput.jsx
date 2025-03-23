import React from "react";

const CheckBoxInput = ({ label, checked, onChange = () => {}, id }) => {
  return (
    <div className="flex items-center gap-2 ml-1 px-4  ">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
      />

      <label htmlFor={id} className="text-[#404271] text-lg font-bold">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
