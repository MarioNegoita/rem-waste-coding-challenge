import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import "./css/index.css";
import SkipCard from "./components/SkipCard";
import ConfirmSkipSize from "./components/ConfirmSkipSize";
import Stepper from "./components/Stepper";
import SkipInformationModal from "./components/SkipInformationModal";
import {
  Truck,
  Calendar,
  CreditCard,
  LocationPin,
  Shield,
  TrashCan,
  Loader,
} from "./components/global/icons";
import SwitchInput from "./components/global/SwitchInput";

const stepperItems = [
  {
    label: "Postcode",
    icon: <LocationPin />,
    description: "Insert your post code",
  },
  {
    label: "Waste Type",
    icon: <TrashCan />,
    description: "What waste are you disposing of?",
  },
  {
    label: "Select Skip",
    icon: <Truck />,
    description: "Choose your skip size",
  },
  {
    label: "Permit Check",
    icon: <Shield />,
    description: "Check if you need a permit",
  },
  {
    label: "Choose Date",
    icon: <Calendar />,
    description: "Choose delivery date",
  },
  {
    label: "Payment",
    icon: <CreditCard />,
    description: "Payment information",
  },
];

const App = () => {
  const [skipOptions, setSkipOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasHeavyWaste, setHasHeavyWaste] = useState(false);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skipModalData, setSkipModalData] = useState(null);
  const [activeStep, setActiveStep] = useState(2);
  const scrollPosition = useRef(0);

  const handleCheckboxChange = () => {
    setHasHeavyWaste(!hasHeavyWaste);
    setSelectedSkip(null);
  };

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
    setIsModalOpen(false);
  };

  const handleSetModalData = (skipData) => {
    setIsModalOpen(true);
    setSkipModalData(skipData);
  };

  const fetchData = useCallback(async (postcode, area) => {
    setIsLoading(true);

    const url = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${encodeURIComponent(
      postcode
    )}&area=${encodeURIComponent(area)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setSkipOptions(data);
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData("NR32", "Lowestoft"); // Call fetchData with parameters
  }, [fetchData]);

  useEffect(() => {
    if (isModalOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <SkipInformationModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        skipData={skipModalData}
        handleSelectSkip={handleSelectSkip}
        setModalData={setSkipModalData}
      />

      <div
        id="portal-root"
        className="flex flex-col min-h-screen bg-primary gap-8 pb-4"
      >
        <div className="w-full px-4 pt-4">
          <Stepper
            items={stepperItems}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>

        {!isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-end px-4">
              <SwitchInput
                onChange={handleCheckboxChange}
                checked={hasHeavyWaste}
                label="I have heavy waste"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 ">
              {skipOptions.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skipData={skip}
                  hasHeavyWaste={hasHeavyWaste}
                  handleSetModalInformation={handleSetModalData}
                  selectedSkip={selectedSkip}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-center mb-20 lg:mb-0">
            <Loader />
          </div>
        )}

        {selectedSkip && (
          <div className="sticky bottom-0 w-full ">
            <ConfirmSkipSize skipData={selectedSkip} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
