import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES_HEADER } from 'constants/static';
import { scrollToBottom } from 'helpers/scrolls';
import css from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={css.header + ' container'}>
      <button
        onClick={handleToggleMenu}
        className={`
        ${css.burger}
        ${isOpen ? css.open : ''}
      `}
        aria-label="Toggle navigation"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="navigation-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        id="navigation-menu"
        className={`
        ${css.menu}
        ${isOpen ? css.open : ''}
      `}
      >
        <ul className={css.link_list}>
          {PAGES_HEADER.map(({ page, path }, idx) => (
            <li key={idx}>
              {path ? (
                <NavLink
                  to={path}
                  onClick={handleCloseMenu}
                  aria-label={page}
                  className={css.link}
                >
                  {page}
                </NavLink>
              ) : (
                <button
                  type="button"
                  onClick={scrollToBottom}
                  aria-label={page}
                  className={css.link}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
