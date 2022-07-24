import { useState } from "react";
import React from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Stastistics = ({ good, neutral, bad }) => {

  const total = () => { return good + neutral + bad }

  if (good + neutral + bad === 0) {
    return (<div>No Feddback Given</div>)
  }

  return (
    <><table>
      <StatisticLine text={"Good"} value={good} />
      <StatisticLine text={"Neutral"} value={neutral} />
      <StatisticLine text={"Bad"} value={bad} />
      <StatisticLine text={"All"} value={total()} />
      <StatisticLine text={"Average"} value={(good - bad) / total()} />
      <StatisticLine text={"Positive"} value={(good / total() || 0) * 100 + " %"} />
    </table>
    </>
  )
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setTo = (setPar) => {
    setPar((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setTo(setGood)} text={"Good"} />
      <Button handleClick={() => setTo(setNeutral)} text={"Neutral"} />
      <Button handleClick={() => setTo(setBad)} text={"Bad"} />
      <h2>Statistics</h2>

      <Stastistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
