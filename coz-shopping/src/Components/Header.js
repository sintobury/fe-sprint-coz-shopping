import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Header = ( ) => {
    const [hover,setHover] = useState(false)

    const hoverMouseover = ()=>{
        setHover(true);
    }
    const hoverMouseout = ()=>{
        setHover(false);
    }
    
    return (
        <header>
            <section className="left_section">
                <Link to='/'>
                    <img src= "img/로고.png" className="logo" alt="logo" id="logo"></img>
                    <label htmlFor="logo"><h1>COZ Shopping</h1></label>
                </Link>
            </section>
            <section className="right_section" onMouseOver={hoverMouseover} onMouseOut={hoverMouseout}>
                <img src="img/아이콘.png" className="hamburger" alt="더보기" ></img>
                <div className="dropdown_container"> {/*{hover ? "dropdown_container" : 'hide'}> */}
                    <div className="dropdown_menu">000님, 안녕하세요!</div>
                    <div className="dropdown_menu">
                        <Link to='/products/list'>
                            <img src="img/상품 아이콘.png" alt="상품리스트 페이지" id="product_icon"></img>
                            <label htmlFor="product_icon">상품리스트 페이지</label>
                        </Link>
                    </div>
                    <div className="dropdown_menu">
                        <Link to='/bookmark'>
                            <img src="img/북마크 아이콘.png" alt="북마크" id="bookmark_icon"></img>
                            <label htmlFor="">북마크 페이지</label>
                        </Link>
                    </div>
                </div>
            </section>
        
        </header>
    )
}

export default Header;