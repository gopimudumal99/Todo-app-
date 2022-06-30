import React from "react";
import "./App.css"
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import {Route,Routes} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import ErrorPage from "./Error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/products" element={ <Products/>}/>
        <Route path="/products/:id" element={ <Product/>}/>
        <Route path="/cart" element={ <Cart/>}/>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
