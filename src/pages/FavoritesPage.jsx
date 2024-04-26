import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import CampersList from 'components/CampersList/CampersList';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div className="container page-container">
      <CampersList campers={favorites} isFavorites={true} />
    </div>
  );
};

export default FavoritesPage;
