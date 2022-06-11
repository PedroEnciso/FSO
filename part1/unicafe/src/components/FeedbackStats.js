import StatisticLine from "./StatisticLine";

const FeedbackStats = ({ good, bad, neutral }) => {
  const calcTotal = () => {
    return good + bad + neutral;
  };

  const calcAverage = () => {
    // divide by three since neutral has no value
    // expression is this: (good(1) + bad(-1) + neutral(0)) / total
    return (good - bad) / (good + bad + neutral);
  };

  const calcPositive = () => {
    const positive = (good / (good + bad + neutral)) * 100;
    return positive + "%";
  };

  const statistics = [
    {
      name: "good",
      stat: good,
    },
    {
      name: "bad",
      stat: bad,
    },
    {
      name: "neutral",
      stat: neutral,
    },
    {
      name: "total",
      stat: calcTotal(),
    },
    {
      name: "average",
      stat: calcAverage(),
    },
    {
      name: "positive",
      stat: calcPositive(),
    },
  ];

  return calcTotal() === 0 ? (
    <p>no feedback given</p>
  ) : (
    <div>
      <h2>stats</h2>
      <table>
        <tbody>
          {statistics.map((stat) => {
            return (
              <StatisticLine
                name={stat.name}
                stat={stat.stat}
                key={stat.name}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackStats;
