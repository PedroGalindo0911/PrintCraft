import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavbarStyles.css';

const MyNavbar = () => {
  const userName = "Usuario";
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">PRINTCRAFT</div>
      <div className="navbar-items">
        <a href="/">Catálogo</a>
        <a href="/quote">Cotización</a>
        <a href="/about-us">Sobre Nosotros</a>
      </div>
      <div className="navbar-text">
        {userName}
      </div>
      <div className="navbar-logout">
        <div className="dropdown" onClick={toggleDropdown} ref={dropdownRef}>
          <div className="dropdown-icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/account" className='account'> <FontAwesomeIcon icon={faUser} className='logoaccount' /> Cuenta</a>
              <a href="/logout" className='logout'> <FontAwesomeIcon icon={faArrowRightFromBracket} className='logologout'/> Cerrar Sesión</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
