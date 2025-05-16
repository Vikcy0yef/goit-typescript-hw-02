import React from 'react'
import {LoadMoreBtnProps} from "./LoadMoreBtn.types"

const LoadMoreBtn:React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return <button onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;
