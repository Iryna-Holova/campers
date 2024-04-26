import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampersThunk, getFilteredThunk } from 'store/campers/thunks';
import { clearFilter, setFilter } from 'store/filter/slice';
import {
  selectCampersShown,
  selectFilterValues,
  selectIsFilterActive,
  selectIsLoadMore,
  selectIsLoaded,
  selectIsLoading,
  selectPage,
} from 'store/selectors';
import { scrollToTop } from 'helpers/scrolls';
import { CATALOG_LIMIT, TOTAL_CAMPERS } from 'constants/campers';
import CampersList from 'components/CampersList/CampersList';
import Filter from 'components/Filter/Filter';
import CampersModal from 'components/CampersModal/CampersModal';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampersShown);
  const page = useSelector(selectPage);
  const isLoadMore = useSelector(selectIsLoadMore);
  const isLoading = useSelector(selectIsLoading);
  const isLoaded = useSelector(selectIsLoaded);
  const isFilterActive = useSelector(selectIsFilterActive);
  const filterValues = useSelector(selectFilterValues);
  // const error = useSelector(selectError);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (isLoaded) return;
    if (isFilterActive) {
      dispatch(
        getFilteredThunk({ page: 1, limit: TOTAL_CAMPERS, ...filterValues })
      );
    } else {
      dispatch(getCampersThunk({ page: 1, limit: CATALOG_LIMIT }));
    }
  }, [dispatch, filterValues, isFilterActive, isLoaded]);

  const handleSearch = async values => {
    await dispatch(
      getFilteredThunk({ page: 1, limit: TOTAL_CAMPERS, ...values })
    ).unwrap();
    dispatch(setFilter(values));
  };

  const handleResetSearch = async () => {
    await dispatch(getCampersThunk({ page: 1, limit: CATALOG_LIMIT })).unwrap();
    dispatch(clearFilter());
  };
  return (
    <div className="container page-container">
      <Filter onSearch={handleSearch} onReset={handleResetSearch} />
      <CampersList
        campers={campers}
        isLoading={isLoading}
        isLoadMore={isLoadMore}
        onLoadMore={() =>
          dispatch(getCampersThunk({ page: page + 1, limit: CATALOG_LIMIT }))
        }
      />
      <CampersModal />
    </div>
  );
};

export default CatalogPage;
