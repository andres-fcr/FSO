import { useState } from "react";

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const arr = Array(anecdotes.length).fill(0)
  const random = () => { return Math.floor(Math.random() * anecdotes.length) };
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arr)


  const setVote = (sel) => {
    const newVotes = [...votes]
    const suma = newVotes[sel] += 1
    console.log(suma);
    setVotes(newVotes)
  }

  const mostVotes = Math.max(...votes)
  const mostVotesIndex = votes.findIndex(el => el === mostVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>Has {votes[selected]} votes</p>
      <br />
      <button onClick={() => setVote(selected)}>Vote</button>
      <button onClick={() => setSelected(random)}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesIndex]} </p>
      <p>Has {mostVotes} votes</p>
    </div>
  )
}

export default App;
