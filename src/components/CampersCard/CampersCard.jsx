import ButtonLink from 'components/ButtonLink/ButtonLink';
import icons from './CampersCard.module.css';
import css from './CampersCard.module.css';
// import { addFavorite, removeFavorite } from 'store/favorites/slice';

const CampersCard = ({ camper }) => {
  const {
    // _id,
    // name,
    // price,
    // rating,
    // location,
    // adults,
    // engine,
    // transmission,
    description,
    // AC,
    // bathroom,
    // kitchen,
    // beds,
    // TV,
    // gallery,
    // reviews,
    isFavorite = false,
  } = camper;

  return (
    <li className={css.card}>
      {/* <CamperImage images={gallery} /> */}
      <div className={css.details}>
        <div className={css.header}>
          <div className={css.title}>
            {/* <CardTitle>{name}</CardTitle> */}
            {/* <CamperPrice price={price} /> */}
            <button
              type="button"
              // onClick={() =>
              //   isFavorite
              //     ? dispatch(removeFavorite(_id))
              //     : dispatch(addFavorite(camper))
              // }
              className={`${css.heart} ${isFavorite ? css.checked : ''}`}
            >
              <svg width={24} height={24}>
                <use href={icons + '#icon-heart'} />
              </svg>
              <svg width={24} height={24} className={css.filled}>
                <use href={icons + '#icon-heart-filled'} />
              </svg>
            </button>
          </div>
          {/* <CamperStats
            rating={rating}
            reviews={reviews.length}
            location={location}
            onOpenReviews={handleRatingClick}
          /> */}
        </div>
        <p className={css.description}>{description}</p>
        {/* <CamperFeatures
          features={{
            adults,
            transmission,
            engine,
            kitchen,
            beds,
            AC,
            TV,
            'Shower/WC': bathroom,
          }}
        /> */}
        <ButtonLink
          type="button"
          // onClick={() => setShowModal(true)}
          size="small"
        >
          Show more
        </ButtonLink>
      </div>
      {/* {showModal && (
        <Modal onClose={handleModalClose}>
          <CamperModal {...camper} modalTab={modalTab} />
        </Modal>
      )} */}
    </li>
  );
};

export default CampersCard;
