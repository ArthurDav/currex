import React from 'react'
import './CurrencyRow.css'

function CurrencyRow(props) {
    // props
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  // row 
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