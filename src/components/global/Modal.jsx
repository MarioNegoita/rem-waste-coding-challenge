import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import XCircle from "./icons/XCircle";

let portalRoot = document.getElementById("portal-root");
if (!portalRoot) portalRoot = document.body;

const Modal = ({
  isOpen,
  setIsOpen,
  modalHeader = null,
  modalBody = null,
  modalFooter = null,
  onClose = () => {},
  title,
}) => {
  const modalRef = useRef(null);

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

  return (
    isOpen &&
    createPortal(
      <div
        ref={modalRef}
        className="fixed top-0 left-0 h-[100svh] w-screen flex justify-center items-center z-10 backdrop-brightness-50 p-4 overflow-auto "
      >
        <div className=" bg-white rounded-lg text-[#404271]  ">
          <div className="flex justify-between w-full items-center p-4 ">
            <p className="font-bold text-xl">{title}</p>

            <button
              onClick={() => {
                setIsOpen(false);
                onClose();
              }}
              className="p-1 cursor-pointer hover:text-[#757496]"
            >
              <XCircle />
            </button>
          </div>

          {modalHeader && <div className="w-full p-4 ">{modalHeader}</div>}

          {modalBody && <div className="w-full p-4 pt-0">{modalBody}</div>}

          {modalFooter && <div className="w-full p-4">{modalFooter}</div>}
        </div>
      </div>,
      portalRoot
    )
  );
};

export default Modal;
