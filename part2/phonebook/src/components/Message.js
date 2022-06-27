const Message = ({ message, type }) => {
  return <div className={`message-box ${type}`}>{message}</div>;
};

export default Message;
