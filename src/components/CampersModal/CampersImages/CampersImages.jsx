import css from './CampersImages.module.css';

const CampersImages = ({ images }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.images}>
        {images.map((image, idx) => (
          <li key={idx} className={css.image}>
            <img src={image} alt="Camper" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersImages;
