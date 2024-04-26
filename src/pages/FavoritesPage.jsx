import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import CampersList from 'components/CampersList/CampersList';
import CampersModal from 'components/CampersModal/CampersModal';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div className="container page-container">
      <CampersList campers={favorites} isFavorites={true} />
      <CampersModal />
    </div>
  );
};

export default FavoritesPage;
