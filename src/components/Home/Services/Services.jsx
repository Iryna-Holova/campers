import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForm } from 'store/filter/slice';
import { getFilteredThunk } from 'store/campers/thunks';
import { SERVICES_SECTION } from 'constants/static';
import { TOTAL_CAMPERS } from 'constants/campers';
import Section from '../Section/Section';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './Services.module.css';

const Services = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBookNow = form => {
    dispatch(setForm(form));
    dispatch(
      getFilteredThunk({ page: 1, limit: TOTAL_CAMPERS, form, equipment: [] })
    );
    navigate('/catalog');
  };

  return (
    <Section title="Start Your Adventure">
      <ul className={css.list}>
        {SERVICES_SECTION.map(({ title, description, image, name }, idx) => (
          <li key={idx} className={css.item}>
            <img
              src={image.normal}
              srcSet={`${image.normal} 1x, ${image.retina} 2x`}
              width={424}
              height={241}
              alt={title}
              className={css.image}
            />
            <div className={css.text}>
              <h3 className="card-title">{title}</h3>
              <p>{description}</p>
            </div>
            <ButtonLink type="button" onClick={() => handleBookNow(name)}>
              Book now
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
