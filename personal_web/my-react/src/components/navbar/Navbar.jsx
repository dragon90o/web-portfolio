import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <Link to="/" className="navbar-link">
            <p>Home</p>
        </Link>
        <p><a href="#projects">Projects</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#blog">Articles</a></p>

    </>

);
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="dravvt__navbar">
            <div className="dravvt__navbar-links">

                <div className="dravvt__navbar-links_logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="dravvt__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="dravvt__navbar-sign">
                <Link to="/sign-in">
                    <p>Sign in</p>
                </Link>
                <Link to="/sign-up">
                    <button type="button">Sign up</button>
                </Link>
            </div>
            <div className="dravvt__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="dravvt__navbar-menu_container scale-up-center">
                        <div className="dravvt__navbar-menu_container-links">

                            <Menu />
                            <div className="dravvt__navbar-menu_container-link-sign">
                                <Link to="/sign-in">
                                    <p>Sign in</p>
                                </Link>
                                <Link to="/sign-up">
                                    <button type="button">Sign up</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
