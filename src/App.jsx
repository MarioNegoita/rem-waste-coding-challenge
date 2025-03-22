import { useState } from "react";
import SkipCard from "./components/SkipCard";
import { skipOptions } from "./constants";
import "./css/index.css";
import ConfirmSkipSize from "./components/ConfirmSkipSize";

const App = () => {
  const [hasHeavyWaste, setHasHeavyWaste] = useState(false);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleCheckboxChange = (event) => {
    setHasHeavyWaste(event.target.checked);
    setSelectedSkip(null);
  };

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#efedff]  gap-4 ">
      <div className="p-4">
        <p className="text-[#404271] font-bold text-3xl text-center lg:text-start ">
          Choose Your Skip Size
        </p>

        <p className="text-[#757496] text-2xl text-center lg:text-start  font-semibold">
          Select the skip size that best suits your needs
        </p>
      </div>

      <div className="flex items-center gap-2 ml-1 px-4 mt-4 ">
        <input
          type="checkbox"
          id="heavyWasteCheckbox"
          checked={hasHeavyWaste}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
        />

        <label
          htmlFor="heavyWasteCheckbox"
          className="text-[#404271] text-lg font-bold"
        >
          I have heavy waste
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 ">
        {skipOptions.map((skip) => (
          <SkipCard
            key={skip.id}
            skipData={skip}
            hasHeavyWaste={hasHeavyWaste}
            handleSelectSkip={handleSelectSkip}
            selectedSkip={selectedSkip}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="sticky bottom-0 w-full ">
          <ConfirmSkipSize skipData={selectedSkip} />
        </div>
      )}
    </div>
  );
};

export default App;
