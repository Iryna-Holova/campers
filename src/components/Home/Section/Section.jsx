import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section + ' container'}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
