import PropTypes from 'prop-types';

export const Statistics = ({
  counntTotal,
  calcPositiveFeedback,
  items: { good, neutral, bad },
}) => {
  console.log(good, neutral, bad);
  return (
    <div>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {counntTotal()}</h3>
      <h3>Positive feedback: {calcPositiveFeedback()}%</h3>
    </div>
  );
};

Statistics.propTypes = {
  counntTotal: PropTypes.func.isRequired,
  calcPositiveFeedback: PropTypes.func.isRequired,
  items: PropTypes.exact({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};
