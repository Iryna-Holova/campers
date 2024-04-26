import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from 'store/favorites/slice';
import { formatPrice } from 'helpers/format-data';
import CampersImage from './CampersImage/CampersImage';
import CamperStats from 'components/CampersCommon/CamperStats/CamperStats';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import icons from '../../images/sprite.svg';
import css from './CampersCard.module.css';
import CampersFeatures from 'components/CampersCommon/CampersFeatures/CampersFeatures';

const CampersCard = ({ camper, isFavorites = false }) => {
  const dispatch = useDispatch();

  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    AC,
    bathroom,
    kitchen,
    beds,
    TV,
    gallery,
    reviews,
    isFavorite = false,
  } = camper;

  return (
    <li className={css.card}>
      <CampersImage images={gallery} />
      <div className={css.details}>
        <div className={css.header}>
          <div className={css.title}>
            <h3 className="card-title">{name}</h3>
            <p className="card-title">{formatPrice(price)}</p>
            <button
              type="button"
              onClick={() =>
                isFavorite
                  ? dispatch(removeFavorite(_id))
                  : dispatch(addFavorite(camper))
              }
              className={`${css.favotite_btn} ${
                isFavorite && !isFavorites ? css.checked : ''
              }`}
            >
              {!isFavorites ? (
                <>
                  <svg width={24} height={24}>
                    <use href={icons + '#icon-heart'} />
                  </svg>{' '}
                  <svg width={24} height={24} className={css.filled}>
                    <use href={icons + '#icon-heart-filled'} />
                  </svg>
                </>
              ) : (
                <svg width={24} height={24}>
                  <use href={icons + '#icon-close'} />
                </svg>
              )}
            </button>
          </div>
          <CamperStats
            rating={rating}
            reviews={reviews.length}
            location={location}
            // onOpenReviews={handleRatingClick}
          />
        </div>
        <p className={css.description}>{description}</p>
        <CampersFeatures
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
        />
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
