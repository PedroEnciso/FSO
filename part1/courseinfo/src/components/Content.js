import Part from "./Part";

const Content = ({ parts }) => {
  const content = parts.map((part) => {
    return <Part part={part} key={part.id} />;
  });

  return <div>{content}</div>;
};

export default Content;
