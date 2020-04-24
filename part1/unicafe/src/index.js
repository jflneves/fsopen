import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>{text}</button>
)

const Statistic = ({text, val, suffix = ""}) => (
  <tr>
    <td>{text}</td>
    <td>{val + suffix}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const getAll = () => good + neutral + bad

  if(getAll() === 0){
    return (
      <div>
        <h2>Statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  }

  const getAverage = () => {
    if(getAll() === 0){
      return 0
    }
    return (good - bad) / getAll()
  }

  const getPositive = () => {
    if(getAll() === 0){
      return 0
    }
    const res = good * 100 / getAll()
    return res
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text = "Good" val = {good}/>
          <Statistic text = "Neutral" val = {neutral}/>
          <Statistic text = "Bad" val = {bad}/>
          <Statistic text = "All" val = {getAll()}/>
          <Statistic text = "Average" val = {getAverage()}/>
          <Statistic text = "Positive" val = {getPositive()} suffix = "%"/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button onClick = {goodClick} text="Good"/>
      <Button onClick = {neutralClick} text="Neutral"/>
      <Button onClick = {badClick} text="Bad"/>
      <Statistics good = {good} bad = {bad} neutral ={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)