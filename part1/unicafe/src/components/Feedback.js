import Button from "./Button";

const Feedback = ({ addGood, addNeutral, addBad }) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button name="good" onClick={addGood} />
      <Button name="neutral" onClick={addNeutral} />
      <Button name="bad" onClick={addBad} />
    </div>
  );
};

export default Feedback;
