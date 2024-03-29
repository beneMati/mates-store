import "./NavBar.css";
import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import ItemOption from "./ItemOption";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const { getQuantity } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className='nav-link' to="/"><img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-145a5.appspot.com/o/mate-logo.png?alt=media&token=d8abf437-6aaa-4424-835c-b771127306ac" alt="logo" id="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                    <ul className="navbar-nav justify-content-end">
                        <ItemOption ruta="/" text="Inicio" />
                        <ItemOption ruta="/Contact" text="Contacto" />
                        {getQuantity() > 0 ? <Link to="/cart"><CartWidget quantity={getQuantity()} /></Link> : ''}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
