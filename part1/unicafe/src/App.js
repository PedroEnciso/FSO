import { useState } from "react";

import Feedback from "./components/Feedback";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Unicafe</h1>
      <Feedback addGood={addGood} addBad={addBad} addNeutral={addNeutral} />
      <FeedbackStats good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
