import { useState } from 'react';
import icons from '../../../images/sprite.svg';
import css from './CampersImage.module.css';

const CampersImage = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleImageIncrement = () => {
    setActiveIdx(prev => (prev + 1) % images.length);
  };

  const handleImageDecrement = () => {
    setActiveIdx(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        onClick={handleImageIncrement}
        aria-label="Next Image"
        className={`${css.chevron} ${css.right}`}
      >
        <svg width={48} height={48}>
          <use href={icons + '#icon-chevron-right'} />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Previous Image"
        onClick={handleImageDecrement}
        className={css.chevron}
      >
        <svg width={48} height={48}>
          <use href={icons + '#icon-chevron-left'} />
        </svg>
      </button>
      <div className={css.dot_buttons}>
        {Array.from({ length: images.length }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIdx(index)}
            disabled={index === activeIdx}
            aria-disabled={index === activeIdx}
            aria-label={`Image ${index + 1}`}
            className={css.dot_button}
          >
            <span aria-hidden="true"></span>
          </button>
        ))}
      </div>
      <img src={images[activeIdx]} alt="Camper" />
    </div>
  );
};

export default CampersImage;
