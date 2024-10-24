import React from 'react';
import { Link } from 'react-router-dom';

function MenuButton ({ toggleSidebar }) {
    return (
        <div className="rts-header__right">
            <Link
                to="https://hostie-whmcs.themewant.com/"
                className="login__btn"
                target="_blank"
            >
                Client Area
            </Link>
            <button
                id="menu-btn"
                aria-label="Menu"
                className="mobile__active menu-btn" onClick={toggleSidebar}
            >
                <i className="fa-sharp fa-solid fa-bars" />
            </button>
        </div>
    );
}

export default MenuButton;
