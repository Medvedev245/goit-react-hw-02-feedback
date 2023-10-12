export const Btns = items => {
  return (
    <div>
      <button onClick={items.pressGood}>Good</button>
      <button onClick={items.pressNeutral}>Neutral</button>
      <button onClick={items.pressBad}>Bad</button>
    </div>
  );
};
