import React, { useState } from 'react'
import Counter from './components/Counter'
import Reset from './components/Reset'
import './App.css';
const App = () => {
  const [count, setCount] = useState(0)
  const handleMinusBtnClick = () => {
    setCount(count - 1)
  }
  const handlePlusBtnClick = () => {
    setCount(count + 1)
  }
  const handleResteBtnClick = () => {
    setCount(0)
  }
  return (
    <div className='App-header'>
      <Counter
        count={count}
        handleMinusBtnClick={handleMinusBtnClick}
        handlePlusBtnClick={handlePlusBtnClick}
      />
      <Reset handleResteBtnClick={handleResteBtnClick} />
    </div>
  )
}
export default App