import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import XCircle from "./icons/XCircle";

const Modal = ({
  isOpen,
  setIsOpen,
  modalHeader = null,
  modalBody = null,
  onClose = () => {},
  onAccept = () => {},
  title,
}) => {
  const modalRef = useRef(null);

  let portalRoot = document.getElementById("portal-root");
  if (!portalRoot) portalRoot = document.body;

  useEffect(() => {
    const handleResize = () => {
      if (modalRef.current) {
        modalRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    if (isOpen) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const ModalContent = () => (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 h-[100vh] w-screen flex justify-center items-center z-10 backdrop-brightness-50 p-4 overflow-auto "
    >
      <div className=" bg-white rounded-lg text-secondary  ">
        <div className="flex justify-between w-full items-center p-4 border-b-2 ">
          <p className="font-bold text-xl">{title}</p>

          <button
            onClick={() => {
              setIsOpen(false);
              onClose();
            }}
            className="p-1 cursor-pointer hover:text-accent"
          >
            <XCircle />
          </button>
        </div>

        {modalHeader && <div className="w-full p-4 ">{modalHeader}</div>}

        {modalBody && (
          <div className="w-full p-4 pt-0 border-b-2">{modalBody}</div>
        )}

        <div className="flex w-full justify-end p-4 gap-4">
          <button
            onClick={() => {
              setIsOpen(false);
              onClose();
            }}
            className="border-2 text-secondary border-accent hover:text-white rounded-lg p-2 px-4 font-bold text-xl hover:bg-accent cursor-pointer "
          >
            close
          </button>

          <button
            onClick={() => {
              onAccept();
            }}
            className="bg-secondary rounded-lg p-2 px-4 font-bold text-xl hover:bg-accent text-white cursor-pointer "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );

  return isOpen && createPortal(<ModalContent />, portalRoot);
};

export default Modal;
