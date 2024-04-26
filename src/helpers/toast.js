import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const infoMessage = text => {
  Toastify({
    text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
