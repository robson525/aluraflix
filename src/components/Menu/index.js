import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Logo" />
            </Link>
            <Button to="/cadastro/video" className="ButtonLink" as={Link}>
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
