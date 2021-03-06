import React,{useEffect, useState} from 'react';
import CurrencyRow from './CurrencyRow'
import { Container, Row, Col } from 'react-bootstrap';
import './Currency.css'
//API Exchange rates
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

/* 
Currency Component
Currency is the parent of CurrencyRow

Currency render the whole proccess of the currency conversion

The organisation of the Component is  : 

Defining our Currency options as useState to manipulate the state undirectly.

Defining toAmount from Amount think os this line "toAmount = amount * exchangeRate" 
So you understand what define amount mean 

Fetching the data from the API URL 
Unpacking the data and distribute the options from our data

Then converting amount in both way depending of the input 
I use hooks useEffect() here more about it 
Hooks *** https://reactjs.org/docs/hooks-effect.html ***

Since this component is the parent bootstrap modules are imported to make the 
code shorter and cleaner

*/




function Currency() {

  // set currency options
  const [currencyOptions, setCurrencyOptions] = useState([])
  // from our current currency option
  const [fromCurrency, setFromCurrency] = useState()
  // to another currency options
  const [toCurrency, setToCurrency] = useState()
  // then echange rate from our option to other option
  const [exchangeRate, setExchangeRate] = useState()
  // amount define (input)
  const [amount, setAmount] = useState(1)
  // Display amount in From our currency tocurrency
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  // to amout -> to other option + echange rate = * 
  // opposite way same by divide
  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  // fetch data from our BASE_URL convert the res as json
  // then define each options unpacking the data
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[1] // 1 in the array = EU
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  // need to be nested in if statement otherwise fromCurrency And to Currency = not defined by compiler
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  return (
        <Container className="CurrencyRow-wrapper">
          <Row className="CurrencyRow-bg" >
          
              <Col  sm={12} className="d-flex justify-content-center align-items-center " >
                <div id="CurrencyRow-subWrapper" className="">
                  <CurrencyRow
                  currencyOptions={currencyOptions}
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={e => setFromCurrency(e.target.value)} // check your stackoverflow answer
                  onChangeAmount={handleFromAmountChange}
                  amount={fromAmount}
                  />
                  <div className="equals">=</div>
                  <CurrencyRow
                  currencyOptions={currencyOptions}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={e => setToCurrency(e.target.value)}
                  onChangeAmount={handleToAmountChange}
                  amount={toAmount}
                  />
                </div>
              </Col>
          </Row>
        </Container>
  );
}

export default Currency;
