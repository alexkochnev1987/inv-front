import { useEffect } from "react";
import ReactModal from "react-modal";
import ButtonClose from "../ui/ButtonClose";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="absolute top-20 z-50 mx-3.8 rounded-5xl md:max-w-[550px] md:mx-auto"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40
        flex flex-col items-center justify-center"
        bodyOpenClassName="overflow-hidden"
      >
        <div className="modal-content  bg-black rounded-5xl">{children}</div>
        <ButtonClose onClick={handleClose} />
      </ReactModal>
    </>
  );
}
export default Modal;
//max-h-[85vh]
