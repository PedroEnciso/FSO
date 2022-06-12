import { useState } from "react";
import Anecdote from "./components/Anecdote";
import Buttons from "./components/Buttons";
import TopAnecdote from "./components/TopAnecdote";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnecdote = () => {
    const randIndex = Math.floor(Math.random() * anecdotes.length);
    // check if the next anecdote is thesame as the one on the screen
    // if it is the same, try getting another random number
    if (randIndex === selected) {
      getRandomAnecdote();
      return;
    }
    setSelected(randIndex);
  };

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Anecdote selected={selected} votes={votes} anecdotes={anecdotes} />
      <Buttons vote={vote} getRandomAnecdote={getRandomAnecdote} />
      <TopAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  );
}

export default App;
