import CampersList from 'components/CampersList/CampersList';
import { campers } from 'temp';

const FavoritesPage = () => {
  return (
    <div className="container page-container">
      <CampersList campers={campers} />
    </div>
  );
};

export default FavoritesPage;
