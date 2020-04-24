import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>{text}</button>
)

const Title = () => <h1>Anecdote of the day</h1>
const ShowAnecdote = ({anecdote}) => <div>{anecdote}</div>

function generateIndex(){
  return Math.floor((Math.random() * anecdotes.length))
}

const Votes = ({votes}) => {
  return (
    <div>Has {votes} votes</div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const castVote = () => {
    votes[selected] = votes[selected] + 1
    setVotes([...votes])
  }

  function getMaxVotesIndex(){
    var max = votes[0];
    var maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
        if (votes[i] > max) {
            maxIndex = i;
            max = votes[i];
        }
    }

    return maxIndex;
  }

  return (
    <>
    <Title/>
    <ShowAnecdote anecdote = {props.anecdotes[selected]} />
    <Votes votes={votes[selected]}/>
    <Button onClick={castVote} text = "Vote"/>
    <Button onClick={() => setSelected(generateIndex())} text = "next anecdote"/>
    <ShowAnecdote anecdote = {props.anecdotes[getMaxVotesIndex()]} />
    <Votes votes={votes[getMaxVotesIndex()]}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)