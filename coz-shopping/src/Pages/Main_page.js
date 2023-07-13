import React, {useEffect, useState} from "react";
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import ItemList from "../Components/ItemList";
import axios from 'axios';
import "./Main_page.css"

const Main_page = () => {
    const [bookmarkList, setBookmarkList] = useState([]);

    const getData = () => {
        return axios
        .get('http://cozshopping.codestates-seb.link/api/v1/products')
        .then( (res) => {
            window.localStorage.setItem('itemdata', JSON.stringify(res.data));
        })
        .catch((err) => {
            console.log(err.response.data)
        });
    };
    useEffect(()=>{
        getData();
    }, []);
    const localdata = JSON.parse(window.localStorage.getItem('itemdata'))
    console.log(localdata[0])
    return (
        <div className="main">
            <Header/>
            <ItemList addBookmark={setBookmarkList} list={bookmarkList}/>
            <Footer/>
        </div>
    )
}
export default Main_page;