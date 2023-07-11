import React from "react";
import { Link } from "react-router-dom";

const Header = ( ) => {

    return (
        <header>
            <section className="left_section">
                <img src= "img/로고.png"></img>
                <h1>COZ Shopping</h1>
            </section>
            <section className="right_section">
                <img src="img/아이콘.png"></img>
            </section>
        </header>
    )
}

export default Header;