import React from "react";

const SwitchInput = ({ checked, onChange = () => {}, label }) => {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2 ">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />

        <div className="block h-6 w-10 rounded-full bg-white border-2"></div>

        <div
          className={`dot absolute left-1 top-1 h-4 w-4 rounded-full  ${
            checked ? "translate-x-full bg-secondary" : "bg-neutral-400"
          } transition-all `}
        ></div>
      </div>

      <span className="text-secondary text-lg font-bold ">{label}</span>
    </label>
  );
};

export default SwitchInput;
