import { ADVANTAGES_SECTION } from 'constants/static';
import icons from '../../../images/sprite.svg';
import Section from '../Section/Section';
import css from './Advantages.module.css';

const Advantages = () => {
  return (
    <Section title="Why choose us">
      <ul className={css.list}>
        {ADVANTAGES_SECTION.map(({ title, description, icon }, idx) => (
          <li key={idx} className={css.item}>
            <div className={css.icon}>
              <svg width={64} height={64}>
                <use href={icons + icon} />
              </svg>
            </div>
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;
