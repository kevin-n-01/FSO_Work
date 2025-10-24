import { useState } from 'react'

const History = ({allClicks}) => {
  if(allClicks.length === 0) {
    return (
      <div>
        The App is used by Pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button Press History: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

const App2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setLeft(left + 1);
    setTotal(total + 1);
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
    setTotal(total + 1);
  }
  
  return (
    <div>
      <span>{left}</span>
      <Button onClick={handleLeftClick} />
      <Button onClick={handleRightClick} />
      <span>{right}</span>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App