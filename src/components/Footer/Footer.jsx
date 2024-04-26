import { Link, useLocation } from 'react-router-dom';
import { PAGES_FOOTER, SOCIAL_LINKS } from 'constants/static';
import { scrollToTop } from 'helpers/scrolls';
import icons from '../../images/sprite.svg';
import css from './Footer.module.css';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      <footer className={css.footer}>
        <div className={css.wrapper + ' container'}>
          <div>
            <Link to="/" className={css.logo}>
              Camper Rental <span>Ukraine</span>
            </Link>
            <address className={css.contacts} id="contacts">
              <ul className={css.contacts}>
                <li>
                  <div className={css.contact_label}>Phone number:</div>
                  <a href="tel:+380680312813" className={css.link}>
                    +38 (068) 031-28-13
                  </a>
                </li>
                <li>
                  <div className={css.contact_label}>Email:</div>
                  <a href="mailto:support@campers.com.ua" className={css.link}>
                    support@campers.com.ua
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <ul className={css.link_list}>
            {PAGES_FOOTER.map(({ page, path }, idx) => (
              <li key={idx}>
                {pathname === path ? (
                  <button
                    type="button"
                    onClick={scrollToTop}
                    className={css.link}
                  >
                    {page}
                  </button>
                ) : (
                  <Link to={path} className={css.link}>
                    {page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className={css.social_list}>
            {SOCIAL_LINKS.map(({ link, icon }, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={css.social_link}
                >
                  <svg width={24} height={24} className={css.icon}>
                    <use href={icons + icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className={css.bottom + ' container'}>
        <span>Made with</span>
        <svg width={24} height={24}>
          <use href={icons + '#icon-heart-filled'} />
        </svg>
        <span>by</span>
        <a
          href="https://github.com/Iryna-Holova"
          target="_blanc"
          rel="noreferrer"
          className={css.github_link}
        >
          <svg width={24} height={24}>
            <use href={icons + '#icon-github'} />
          </svg>
          Iryna-Holova
        </a>
      </div>
    </>
  );
};

export default Footer;
