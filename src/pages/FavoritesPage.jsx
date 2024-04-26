import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import { scrollToTop } from 'helpers/scrolls';
import CampersList from 'components/CampersList/CampersList';
import CampersModal from 'components/CampersModal/CampersModal';

const FavoritesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const favorites = useSelector(selectFavorites);
  return (
    <div className="container page-container">
      <CampersList
        campers={favorites}
        isFavorites={true}
        empty={favorites.length === 0}
      />
      <CampersModal />
    </div>
  );
};

export default FavoritesPage;
