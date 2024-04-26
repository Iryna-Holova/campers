import css from './CampersCard.module.css';

const CampersCard = ({ camper }) => {
  return <li>{camper.name}</li>;
};

export default CampersCard;
