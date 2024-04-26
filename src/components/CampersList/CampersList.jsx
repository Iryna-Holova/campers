import CampersCard from 'components/CampersCard/CampersCard';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './CampersList.module.css';

const CampersList = ({ campers }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map(camper => (
          <CampersCard key={camper._id} camper={camper} />
        ))}
        {/* {isLoading && (
          <>
            <CamperSkeleton />
            <CamperSkeleton />
            <CamperSkeleton />
            <CamperSkeleton />
          </>
        )} */}
      </ul>
      {/* {isLoadMore && ( */}
      <ButtonLink
        type="button"
        // onClick={onLoadMore}
        // disabled={isLoading}
        size="smaller"
        color="secondary"
      >
        Load more
      </ButtonLink>
      {/* )} */}
    </div>
  );
};

export default CampersList;
