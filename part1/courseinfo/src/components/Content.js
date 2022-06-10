import Part from "./Part";

const Content = ({ parts }) => {
  const content = parts.map((part) => {
    return <Part part={part} key={part.name} />;
  });

  return <div>{content}</div>;
};

export default Content;
