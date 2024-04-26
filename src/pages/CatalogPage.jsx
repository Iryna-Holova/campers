import CampersList from 'components/CampersList/CampersList';
import Filter from 'components/Filter/Filter';
import { campers } from 'temp';

const CatalogPage = () => {
  return (
    <div className="container page-container">
      <Filter />
      <CampersList campers={campers} />
    </div>
  );
};

export default CatalogPage;
