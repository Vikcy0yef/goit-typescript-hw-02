import React from 'react'
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");
// import s from "./ImageModal.module.css"


const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
      <ReactModal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="modal-overlay"
          className="modalContent"
      >
          {image && (
              <img
                  src={image.src}
                  alt={image.alt}
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </ReactModal>
  )
}

export default ImageModal
