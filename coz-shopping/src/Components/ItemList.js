import React , {useEffect} from "react";
import ProductItem from "./Productitem";
import CategoryItem from "./CategoryItem";
import ExhibitionItem from "./ExhibitionItem";
import BrandItem from "./BrandItem";
import "./ItemList.css"
 
const ItemList = ({data, setBookmarkList, bookmarkList}) => {
    const Item = (type) => {
        return data.filter((item)=>item.type === type)
    }
    const Product = Item('Product')
    const Category = Item('Category')
    const Exhibition = Item('Exhibition')
    const Brand = Item('Brand')

    const getRandomIntInclusive = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    let productidx = 0;  
    let categoryidx = 0; 
    let exhibitionidx = 0;
    let brandidx = 0;

    const setRandomIdx = ()=> {
        productidx = getRandomIntInclusive(0, Product.length-1)
        categoryidx = getRandomIntInclusive(0, Category.length-1)
        exhibitionidx = getRandomIntInclusive(0, Exhibition.length-1)
        brandidx = getRandomIntInclusive(0, Brand.length-1)
    }
    
    useEffect(()=> {
        setRandomIdx();
    },[data])

    return (
        <div className="itemlist_container">
            <h2>상품 리스트</h2>
            <div className="item_container">
                <ProductItem data={Product} idx={productidx} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList} />
                <CategoryItem data={Category} idx={categoryidx} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                <ExhibitionItem data={Exhibition} idx={exhibitionidx} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                <BrandItem data={Brand} idx={brandidx} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
            </div>
        </div>
    )
}

export default ItemList