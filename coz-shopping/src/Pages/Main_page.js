import React from "react";
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import ItemList from "../Components/ItemList";
import BookmarkList from "../Components/Bookmark"; 
import "./Main_page.css"

const Main_page = ({data, bookmarkList, setBookmarkList}) => {
       
    return (
        <div className="main">
            <Header/>
            <ItemList data ={data} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
            <BookmarkList bookmarkList={bookmarkList} setBookmarkList={setBookmarkList}/>
            <Footer/>
        </div>
    )
}
export default Main_page;