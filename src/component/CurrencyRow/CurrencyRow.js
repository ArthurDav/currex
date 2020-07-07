import React from 'react'
import './CurrencyRow.css'

// CurrencyRow is the child of the Currency Component
// CurrencyRow Component is charged of the rendering and conversion of the currency in a select and input element
// a simple function declaration has been used to keep a simpler code
// all our options are declared as props so a simple func is easier and keep the code shorter,..
// to be able to define all our options


function CurrencyRow(props) {
    // props define as our option from Currency, Currency is the parent of this Component 
    // defining all our options from currency as props .. 
    // We can call them below 
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div id="CurrencyRow" className="box">
      <input  type="number" className="input" value={amount || 0} onChange={onChangeAmount} />

      <select id="select" className="select" value={selectedCurrency || 0} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyRow