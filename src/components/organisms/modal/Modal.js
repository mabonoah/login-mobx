import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modal.scss";

export const DynamicModal = ({ open, onCloseModal, ...props }) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      showCloseIcon={false}
      center
    >
      {props.children}
    </Modal>
  );
};
