import './App.css';
import React ,{useState, useEffect} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import axios from "axios";
import Main_page from './Pages/Main_page';
import ItemList_Page from './Pages/ItemList_page';
import BookmarkList_page from './Pages/Bookmark_page';


function App() {
  const localBookmarkList = JSON.parse(window.localStorage.getItem('bookmarkList'))
  const [data,setData] = useState([]);
  const [bookmarkList, setBookmarkList] = useState(localBookmarkList? localBookmarkList : []);

  const getData = () => {
      return axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then( (res) => {
          setData(res.data);
          window.localStorage.setItem('itemdata', JSON.stringify(res.data));
      })
      .catch((err) => {
          console.log(err.response.data)
      });
  };
  useEffect( ()=>{
      getData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Main_page data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList}/>}></Route>
          <Route path='/products/list' element={<ItemList_Page data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList}/>}></Route>
          <Route path='/bookmark' element={<BookmarkList_page data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList}/>}></Route>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
