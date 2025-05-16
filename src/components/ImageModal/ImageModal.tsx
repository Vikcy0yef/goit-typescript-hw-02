import React from 'react'
import ReactModal from 'react-modal';
import {ImageModalProps, Image}from "./ImageModal.types"
ReactModal.setAppElement("#root");



const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!image || !image.urls|| !image.urls.regular) {
    return null; 
  }

  return (
      <ReactModal
          isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
          overlayClassName="modal-overlay"
          className="modalContent"
      >
          {image &&  (
              <img
                  src={image.urls.regular}
                  alt={image.alt||""}
          style={{ width: "500px", height: "500px" }}
        />
      )}
    </ReactModal>
  )
 
}

export default ImageModal
