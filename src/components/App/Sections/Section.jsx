import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const Section = ({
  options,
  getButtonName,
  items,
  counntTotal,
  calcPositiveFeedback,
  title,
}) => {
  return (
    <div>
      <FeedbackOptions
        title={title}
        options={options}
        getButtonName={getButtonName}
      />
      <p>Statistics</p>
      <Statistics
        items={items}
        counntTotal={counntTotal}
        calcPositiveFeedback={calcPositiveFeedback}
        title={title}
      />
    </div>
  );
};
