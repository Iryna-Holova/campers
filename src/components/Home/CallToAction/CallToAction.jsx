import css from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={css.section + ' container'}>
      <h2 className='visually-hidden'>Call To Action</h2>
      <p className={css.text}>
        Ready to embark on your Ukrainian adventure? Explore our camper catalog,
        check availability, and book your dream camper today. Experience the
        beauty of Ukraine like never before with Camper Rental Ukraine!
      </p>
    </section>
  );
};

export default CallToAction;
