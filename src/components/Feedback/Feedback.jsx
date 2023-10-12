import PropTypes from 'prop-types';

export const Feedback = ({ addTotal, calcPositiveFeedback, items: { good, neutral, bad } }) => {
  let isStatisticsGiven = addTotal();
  return isStatisticsGiven ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {addTotal()}</p>
      <p>Positive feedback: {calcPositiveFeedback()} %</p>
    </div>
  ) : (
    <p>There is no feedback</p>
  );
};

Feedback.propTypes = {
  addTotal: PropTypes.func.isRequired,
  calcPositiveFeedback: PropTypes.func.isRequired,
  items: PropTypes.exact({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};
