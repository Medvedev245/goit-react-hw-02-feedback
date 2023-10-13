import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  counntTotal,
  calcPositiveFeedback,
  items: { good, neutral, bad },
}) => {
  let isStatisticsGiven = counntTotal();
  return isStatisticsGiven ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {counntTotal()}</p>
      <p>Positive feedback: {calcPositiveFeedback()} %</p>
    </div>
  ) : (
    <p>{title}</p>
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
