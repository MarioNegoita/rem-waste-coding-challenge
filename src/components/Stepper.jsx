import React from "react";

const Stepper = ({ items, activeStep, setActiveStep }) => {
  const size = 80;
  const strokeWidth = 6;
  const percentage = (activeStep / (items.length - 1)) * 100;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <>
      <div className="w-full hidden lg:flex items-center py-4 bg-white rounded-lg px-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center font-bold ${
              index < items.length - 1 ? "flex-grow" : ""
            }
          ${index <= activeStep ? "text-[#404271]" : "text-slate-400"}
          `}
          >
            <button
              onClick={() => setActiveStep(index)}
              className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
            {index < items.length - 1 && (
              <div
                className={`flex-grow transition-colors ease-linear h-0.5 ${
                  index < activeStep ? "bg-[#404271]" : "bg-gray-300"
                } mx-2`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className=" flex lg:hidden  items-center transition-all text-[#404271] gap-4 bg-white p-4 rounded-lg">
        <div className="relative flex items-center justify-center">
          <svg width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#e0e0e0"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>

          <div className="absolute text-center">
            <span className="font-bold text-lg">
              {activeStep + 1} of {items.length}
            </span>
          </div>
        </div>

        <div>
          <div className="flex text-xl font-bold gap-1 items-center ">
            {items[activeStep].icon}
            {items[activeStep].label}
          </div>

          {activeStep + 1 < items.length && (
            <p className="font-bold text-[#757496]">
              Next: {items[activeStep + 1].label}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
