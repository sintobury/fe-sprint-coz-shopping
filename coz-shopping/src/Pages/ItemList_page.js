import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductItem from "../Components/Productitem";
import CategoryItem from "../Components/CategoryItem";
import ExhibitionItem from "../Components/ExhibitionItem";
import BrandItem from "../Components/BrandItem";
import "./ItemList_page.css"


const ItemList_Page = () => {
    return (
        <div className="ItemList_page">
            <Header/>
            <Footer/>
        </div>
    )
}

export default ItemList_Page