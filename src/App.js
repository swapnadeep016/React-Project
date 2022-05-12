import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import StoreView from './components/StoreView';
import Sales from './components/Sales';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product" element={<ProductScreen />}></Route>
        <Route path="/stores" element={<StoreView />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
