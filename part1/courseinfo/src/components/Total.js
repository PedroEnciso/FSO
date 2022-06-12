function Total({ parts }) {
  const total = parts.reduce((sum, current) => {
    return sum + current.exercises;
  }, 0);
  return (
    <p>
      <strong>Number of exercises: {total}</strong>
    </p>
  );
}

export default Total;
