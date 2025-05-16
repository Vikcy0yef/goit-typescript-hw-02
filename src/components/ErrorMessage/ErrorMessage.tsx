import React from 'react'
import { ErrorMessageProps } from './ErrorMessage.type';

const ErrorMessage:React.FC<ErrorMessageProps> = ({ message }) => {
   return (
    <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
      {message || "Something went wrong. Please try again."}
    </div>
  )
};

export default ErrorMessage;
