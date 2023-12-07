import { useState } from 'react';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
function Header() {
    let [burgerMenu, setBurgerMenu] = useState(false);
    let itemFunc = ()=>{
        setBurgerMenu(false);
    }
    return ( 
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <NavLink to='/' className="header__logo">
                        <picture className='logo-pic'>
                            <img src={logo} className="logo-img"/>
                        </picture>
                    </NavLink>
                    <ul className="header__list">
                        <NavLink to='/about' className="header__link">
                            <li className="header__list-item">
                                <a href="#">About</a>
                            </li>
                        </NavLink>
                        <NavLink to='/work' className="header__link">
                            <li className="header__list-item">
                                <a href="#">Work</a>
                            </li>
                        </NavLink>
                        <NavLink to='/team' className="header__link">
                            <li className="header__list-item">
                                <a href="#">Team</a>
                            </li>
                        </NavLink>
                        <NavLink to='/contact' className="header__link">
                            <li className="header__list-item">
                                <a href="#">Contact</a>
                            </li>
                        </NavLink>
                    </ul>
                    <NavLink to='/contact' className='btn'>Contact Us</NavLink>
                    <button className={burgerMenu ? 'header__burger active' : 'header__burger'} onClick={()=>setBurgerMenu(!burgerMenu)}></button>
                </nav>
            </div>
            <ul className={burgerMenu ? 'header__list-burger active' : 'header__list-burger'}>
                <NavLink to='/about' className="header__link">
                    <li onClick={()=> itemFunc()} className="header__item">
                        <a href="#">About</a>
                    </li>
                </NavLink>
                <NavLink to='/work' className="header__link">
                    <li onClick={()=> itemFunc()} className="header__item">
                        <a href="#">Work</a>
                    </li>
                </NavLink>
                <NavLink to='/team' className="header__link">
                    <li onClick={()=> itemFunc()} className="header__item">
                        <a href="#">Team</a>
                    </li>
                </NavLink>
                <NavLink to='/contact' className="header__link">
                    <li onClick={()=> itemFunc()} className="header__item">
                        <a href="#">Contact</a>
                    </li>
                </NavLink>
            </ul>
        </header>
    );
}

export default Header;