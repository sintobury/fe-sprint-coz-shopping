import React, {useEffect, useState} from "react";
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import axios from 'axios';

const Main_page = () => {
    const [data, setData] = useState('')

    const getData = () => {
        return axios
        .get('http://cozshopping.codestates-seb.link/api/v1/products')
        .then( (res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err.response.data)
        });
    };

    useEffect(()=>{
        getData();
    }, []);
    window.localStorage.setItem('itemdata', JSON.stringify(data))
    const localdata = JSON.parse(window.localStorage.getItem('itemdata'))
    
    return (
        <div>
            <Header></Header>
            <Footer/>
        </div>
    )
}
export default Main_page;