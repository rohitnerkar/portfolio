import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import Photo from '../../images/Photo.jpg'
import './styles.scss';

const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    },
];

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);
    const location = useLocation();

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const closeMenu = () => {
        setToggleIcon(false);
    };

  return (
    <div>
      <nav className="navbar"> 
        <div className="navbar__container">
            <Link to={'/'} className="navbar__container__logo" onClick={closeMenu}>
                <img src={Photo} alt="Profile_Picture" />
                <h1>Er. Rohit Nerkar
                    <p>CSE</p>
                </h1>
            </Link>
        </div>
        <ul className= {`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
            {
                data.map((item, key) => (
                    <li key={key} className="navbar__container__menu__item">
                        <Link className={`navbar__container__menu__item__links ${location.pathname === item.to ? 'active' : ''}`}  to={item.to} onClick={closeMenu}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
            }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
