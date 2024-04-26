import CampersCard from 'components/CampersCard/CampersCard';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import CampersSkeleton from 'components/CampersCard/CampersSkeleton/CampersSkeleton';
import css from './CampersList.module.css';

const CampersList = ({
  campers,
  isFavorites,
  isLoading = false,
  isLoadMore = false,
  onLoadMore = () => {},
}) => {
  return (
    <div className={css.wrapper}>
      <h2 className="visually-hidden">Campers</h2>
      <ul className={css.list}>
        {campers.map(camper => (
          <CampersCard
            key={camper._id}
            camper={camper}
            isFavorites={isFavorites}
          />
        ))}
        {isLoading && (
          <>
            <CampersSkeleton />
            <CampersSkeleton />
            <CampersSkeleton />
            <CampersSkeleton />
          </>
        )}
      </ul>
      {isLoadMore && (
        <ButtonLink
          type="button"
          onClick={onLoadMore}
          disabled={isLoading}
          size="smaller"
          color="secondary"
        >
          Load more
        </ButtonLink>
      )}
    </div>
  );
};

export default CampersList;
