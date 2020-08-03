import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Logo" />
            </a>
            <Button href="/" className="ButtonLink" as="a">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
