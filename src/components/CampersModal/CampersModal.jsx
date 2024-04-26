import { useDispatch, useSelector } from 'react-redux';
import { selectModals } from 'store/selectors';
import { closeModal } from 'store/modal/modal';
import { MODALS } from 'constants/static';
import icons from '../../images/sprite.svg';
import css from './CampersModal.module.css';

const CampersModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModals);

  return (
    <div
      className={`${css.modal} ${
        isOpen[MODALS.camper] ? css.open : css.hidden
      }`}
    >
      <button
        onClick={() => dispatch(closeModal(MODALS.camper))}
        className={css.close}
      >
        <svg width={32} height={32}>
          <use href={icons + '#icon-close'} />
        </svg>
      </button>
      {/* {children} */}
    </div>
  );
};

export default CampersModal;
