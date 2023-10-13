export const Btns = ({ items, getButtonName }) => {
  const btnNames = Object.keys(items);
  return (
    <div>
      {btnNames.map(name => (
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
