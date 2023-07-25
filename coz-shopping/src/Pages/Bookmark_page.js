import React, {useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductItem from "../Components/Productitem";
import CategoryItem from "../Components/CategoryItem";
import ExhibitionItem from "../Components/ExhibitionItem";
import BrandItem from "../Components/BrandItem";
import Tab from "../Components/Tab";
import "./Bookmark_page.css"

const BookmarkList_page = ({data, bookmarkList, setBookmarkList}) => {
    const [condition,setCondition] = useState(0);
    const Item = (data, type) => {
        return data.filter((item)=>item.type === type)
    }
    const Product = Item(data, 'Product')
    const Category = Item(data, 'Category')
    const Exhibition = Item(data, 'Exhibition')
    const Brand = Item(data, 'Brand')
    const All = data;
    const tabmenu = [All, Product, Category, Exhibition, Brand]

    const BookmarkAll = bookmarkList;
    const BookmarkProduct = Item(bookmarkList, 'Product');
    const BookmarkCategoty = Item(bookmarkList, 'Category');
    const BookmarkExhibition = Item(bookmarkList, 'Exhibition');
    const BookmarkBrand = Item(bookmarkList, 'Brand');
    const BookmarkMenu =[BookmarkAll, BookmarkProduct, BookmarkCategoty, BookmarkExhibition, BookmarkBrand];

    return (
        <div className="BookmarkList_page">
            <Header/>
            <div className="ItemList_page_container">
                <div className="tab">
                    {tabmenu.map((el, idx) => {
                        return <Tab data={el} idx={idx} setCondition={setCondition}/>
                    })}
                </div>
                <div className="Items_container">
                {BookmarkMenu[condition].map((el) => {
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

export default BookmarkList_page