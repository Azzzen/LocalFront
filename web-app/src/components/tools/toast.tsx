import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function showToast(type: 'success' | 'error', message: string) {
  if (type == 'success') {
    toast['success'](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
