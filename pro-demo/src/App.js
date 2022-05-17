import React from 'react';
// import axios from 'axios'
import Header from './headers/Header'
import './App.css';
import Product from './products/Product';
import Form from './form/Form';
import ProList from './productLists/ProList';
import ContextProProvider from './contexts/ContextPro';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <img className='app-img' src="https://cutewallpaper.org/21/website-design-background/Home-Web-Design-Education-Website-Background-Free-.png" alt="" />
        <ContextProProvider>
          <Header></Header>
          <div className='main-product'>
            <Product></Product>
          </div>
        </ContextProProvider>
      </div>
    </div>
  );
}

export default App;
