import React from 'react';
import './App.css';
import Header from './component/Header/Header'
import Currency from './component/CurrencyRow/Currency'
import Footer from './component/Footer/Footer'

//API Exchange rate

function App() {

  
  return (
    <div className="App">
      <Header/>
      <Currency/>
      <Footer/>
         
      
    </div>
  );
}

export default App;
