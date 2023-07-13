import React from "react";
import ProductItem from "./Productitem";
import CategoryItem from "./CategoryItem";
import ExhibitionItem from "./ExhibitionItem";
import BrandItem from "./BrandItem";
import "./ItemList.css"
 
const ItemList = ({addBookmark, list}) => {
    const localdata = JSON.parse(window.localStorage.getItem('itemdata'))

    const Product = localdata.filter((item)=>item.type === 'Product')
    const Category = localdata.filter((item)=>item.type === 'Category')
    const Exhibition = localdata.filter((item)=>item.type === 'Exhibition')
    const Brand = localdata.filter((item)=>item.type === 'Brand')

    const getRandomIntInclusive = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    const productidx = localdata.length === 0 ? 0 : getRandomIntInclusive(0, Product.length-1)
    const categoryidx = localdata.length === 0 ? 0 : getRandomIntInclusive(0, Category.length-1)
    const exhibitionidx = localdata.length === 0 ? 0 : getRandomIntInclusive(0, Exhibition.length-1)
    const brandidx = localdata.length === 0 ? 0 : getRandomIntInclusive(0, Brand.length-1)
    
    return (
        <div className="itemlist_container">
            <ProductItem data={Product} idx={productidx} addBookmark={addBookmark} list={list}/>
            <CategoryItem data={Category} idx={categoryidx} addBookmark={addBookmark} list={list}/>
            <ExhibitionItem data={Exhibition} idx={exhibitionidx} addBookmark={addBookmark} list={list}/>
            <BrandItem data={Brand} idx={brandidx} addBookmark={addBookmark} list={list}/>
        </div>
    )
}

export default ItemList