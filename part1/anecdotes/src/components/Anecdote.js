const Anecdote = ({ anecdotes, votes, selected }) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p style={{ maxWidth: "75ch" }}>{anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
    </div>
  );
};

export default Anecdote;
