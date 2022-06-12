const Buttons = ({ vote, getRandomAnecdote }) => {
  return (
    <div>
      <button onClick={vote}>vote</button>
      <button onClick={getRandomAnecdote}>New anecodote</button>
    </div>
  );
};

export default Buttons;
