import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOverlay } from 'store/selectors';
import { closeLastModal } from 'store/modal/modal';
import css from './Overlay.module.css';

const Overlay = () => {
  const dispatch = useDispatch();
  const isShown = useSelector(selectIsOverlay);

  const handleEscapeClose = useCallback(
    ({ key }) => {
      if (key !== 'Escape') return;
      dispatch(closeLastModal());
    },
    [dispatch]
  );

  useEffect(() => {
    if (isShown) {
      document.querySelector('html').classList.add('no-scroll');
      document.addEventListener('keydown', handleEscapeClose);
    } else {
      document.querySelector('html').classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeClose);
    }

    return () => {
      document.querySelector('html').classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [dispatch, isShown, handleEscapeClose]);

  return (
    <div
      onClick={() => dispatch(closeLastModal())}
      className={`${css.overlay} ${isShown ? css.open : css.hidden}`}
    ></div>
  );
};

export default Overlay;
