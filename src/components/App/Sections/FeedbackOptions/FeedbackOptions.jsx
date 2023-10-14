export const FeedbackOptions = ({ options, getButtonName }) => {
  return (
    <div>
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
