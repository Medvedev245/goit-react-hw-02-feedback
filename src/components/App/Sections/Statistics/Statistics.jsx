import PropTypes from 'prop-types';

export const Statistics = ({
  counntTotal,
  calcPositiveFeedback,
  items: { good, neutral, bad },
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {counntTotal()}</p>
      <p>Positive feedback: {calcPositiveFeedback()} %</p>
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
