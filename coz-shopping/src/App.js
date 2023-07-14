import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main_page from './Pages/Main_page';
import ItemList_Page from './Pages/ItemList_page';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Main_page/>}></Route>
          <Route path='/products/list' element={<ItemList_Page/>}></Route>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
