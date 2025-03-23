import React, { useEffect, useState } from "react";
import Modal from "./global/Modal";
import { skipDescription } from "../constants";

const SkipInformationModal = ({
  isOpen,
  setIsOpen,
  handleSelectSkip,
  skipData,
  setModalData,
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (skipData && isOpen) {
      const imageName = getSkipImageName(skipData?.size);

      import(`../assets/skipImages/${imageName}.jpg`)
        .then((module) => setImageSrc(module.default))
        .catch((error) => console.error("Error loading image:", error));
    }
  }, [skipData?.size, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`${skipData?.size} yards skip`}
      onClose={() => {
        setModalData(null);
        setImageSrc(null);
      }}
      modalBody={
        <div className="flex flex-col items-center  w-full gap-4">
          {imageSrc && (
            <div className="md:h-50 lg:h-70 w-full flex justify-center overflow-hidden">
              <img src={imageSrc} className="object-contain rounded-lg" />
            </div>
          )}

          <div className="flex gap-2 text-lg">
            <p className="font-bold">Size:</p> <p>a x b x c</p>
          </div>

          <div className="text-center">{skipDescription[skipData?.id]}</div>
        </div>
      }
      modalFooter={
        <div className="flex w-full justify-between px-4 gap-4">
          <button
            onClick={() => {
              setIsOpen(false);
              setModalData(null);
              setImageSrc(null);
            }}
            className="border-2 text-[#404271] border-[#757496] hover:text-white rounded-lg p-2 px-4 font-bold text-xl hover:bg-[#757496] cursor-pointer w-full"
          >
            back
          </button>

          <button
            onClick={() => {
              handleSelectSkip(skipData);
              setModalData(null);
              setImageSrc(null);
            }}
            className="bg-[#404271] rounded-lg p-2 px-4 font-bold text-xl hover:bg-[#757496] text-white cursor-pointer w-full"
          >
            Select
          </button>
        </div>
      }
    />
  );
};

const getSkipImageName = (size) => {
  return `${size}-yard-skip-hire`;
};

export default SkipInformationModal;
