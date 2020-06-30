import React from 'react';
import './App.css';
import Header from './component/Header/Header'
import Currency from './component/CurrencyRow/Currency'
import { Container, Row } from 'react-bootstrap';

//API Exchange rate

function App() {

  
  return (
    <div className="App">
      <Header/>
      <Currency/>
         
      
    </div>
  );
}

export default App;
