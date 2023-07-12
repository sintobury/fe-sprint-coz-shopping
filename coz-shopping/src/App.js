import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main_page from './Pages/Main_page';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Main_page/>}></Route>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
