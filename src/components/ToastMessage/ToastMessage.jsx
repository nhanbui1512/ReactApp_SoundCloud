// ToastMessage.js
import React from 'react';
import { useToast } from './ToastContext';

const ToastMessage = () => {
  const { show } = useToast();

  return (
    <button onClick={show} className="toast-button">
      Show Toast
    </button>
  );
};

export default ToastMessage;
