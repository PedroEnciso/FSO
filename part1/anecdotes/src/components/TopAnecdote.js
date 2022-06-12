const TopAnecdote = ({ votes, anecdotes }) => {
  let mostVotes = 0;
  let topAnecdote = "";
  const emptyArray = new Array(anecdotes.length).fill(0);

  const getTopAnecdote = () => {
    if (votes.join(",") == emptyArray.join(",")) {
      return "No votes yet.";
    } else {
      votes.forEach((vote, index) => {
        if (vote > mostVotes) {
          mostVotes = vote;
          topAnecdote = anecdotes[index];
        }
      });
    }
  };

  getTopAnecdote();

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {mostVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <p>{topAnecdote}</p>
          <p>Votes: {mostVotes}</p>
        </div>
      )}
    </div>
  );
};

export default TopAnecdote;
