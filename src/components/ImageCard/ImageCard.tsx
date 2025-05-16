import React from 'react'
import {imageProps}from "./ImageCard.types"

const ImageCard:React.FC<imageProps> = ({image, onClick}) => {
  return (
   <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image.src} alt={image.alt} />
    </div>
  )
}

export default ImageCard
