import { FORMS } from 'constants/campers';
import css from './CampersDetails.module.css';

const CampersDetails = ({ details }) => {
  return (
    <div>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        {Object.entries(details).map(([key, value], idx) => {
          let text;
          switch (key) {
            case 'form':
              text = FORMS[value];
              break;
            case 'consumption':
              text = value;
              break;
            default:
              text = value.replace(/(\d)([a-zA-Z])/g, '$1 $2');
              break;
          }
          return (
            <li key={idx} className={css.item}>
              <div className={css.label}>{key}</div>
              <div>{text}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersDetails;
