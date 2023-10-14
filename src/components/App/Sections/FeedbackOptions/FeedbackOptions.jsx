export const FeedbackOptions = ({ title, options, getButtonName }) => {
  return (
    <div>
      <p>{title}</p>
      {options.map(name => (
        <button
          key={name}
          name={name}
          onClick={e => getButtonName(e.target.name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
