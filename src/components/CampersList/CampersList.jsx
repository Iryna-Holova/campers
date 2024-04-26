import CampersCard from 'components/CampersCard/CampersCard';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import CampersSkeleton from 'components/CampersCard/CampersSkeleton/CampersSkeleton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import css from './CampersList.module.css';

const CampersList = ({
  campers,
  empty,
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
      {empty && (
        <ErrorMessage
          message={
            isFavorites ? 'Add your favorite campers here' : 'Nothing found...'
          }
        />
      )}
    </div>
  );
};

export default CampersList;
