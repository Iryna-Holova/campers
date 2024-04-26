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
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
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
                  className={css.link}
                >
                  {page}
                </NavLink>
              ) : (
                <button
                  type="button"
                  onClick={scrollToBottom}
                  className={css.link}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* {isOpen && <Modal onClose={handleCloseMenu} />} */}
    </header>
  );
};

export default Header;
