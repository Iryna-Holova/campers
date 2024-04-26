import CampersCard from 'components/CampersCard/CampersCard';
import css from './CampersList.module.css';

const CampersList = ({ campers }) => {
  return (
    <ul>
      {campers.map(camper => (
        <CampersCard key={camper._id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
