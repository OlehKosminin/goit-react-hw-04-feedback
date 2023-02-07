import PropTypes from 'prop-types';
import statisticsCss from './statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <ul className={statisticsCss.box}>
        <li className={statisticsCss.options}> Good:{good} </li>
        <li className={statisticsCss.options}> Neutral:{neutral} </li>
        <li className={statisticsCss.options}> Bad:{bad} </li>
        <li className={statisticsCss.options}> Total:{total} </li>
        <li className={statisticsCss.options}>
          Positive feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
