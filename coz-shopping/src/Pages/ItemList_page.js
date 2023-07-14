import React, {useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductItem from "../Components/Productitem";
import CategoryItem from "../Components/CategoryItem";
import ExhibitionItem from "../Components/ExhibitionItem";
import BrandItem from "../Components/BrandItem";
import Tab from "../Components/Tab";
import "./ItemList_page.css"


const ItemList_Page = ({data, bookmarkList, setBookmarkList}) => {
    const [condition,setCondition] = useState(0);
    const Item = (type) => {
        return data.filter((item)=>item.type === type)
    }
    const Product = Item('Product')
    const Category = Item('Category')
    const Exhibition = Item('Exhibition')
    const Brand = Item('Brand')
    const All = data;
    const tabmenu = [All, Product, Category, Exhibition, Brand]


    return (
        <div className="ItemList_page">
            <Header/>
            <div className="ItemList_page_container">
                <div className="tab">
                    {tabmenu.map((el, idx) => {
                        return <Tab data={el} idx={idx} setCondition={setCondition}/>
                    })}
                </div>
                <div className="Items_container">
                    {tabmenu[condition].map((el) => {
                        if(el.type === 'Product') {
                            return <ProductItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList} />
                        } else if(el.type === "Category"){
                            return <CategoryItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                        } else if(el.type ==="Exhibition"){
                            return <ExhibitionItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                        } else if(el.type ==="Brand"){
                            return <BrandItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                        }
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ItemList_Page