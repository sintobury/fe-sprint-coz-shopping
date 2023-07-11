import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = ( ) => {

    return (
        <header>
            <section className="left_section">
                <img src= "img/로고.png" className="logo"></img>
                <h1>COZ Shopping</h1>
            </section>
            <section className="right_section">
                <img src="img/아이콘.png" className="hamburger"></img>
            </section>
        </header>
    )
}

export default Header;