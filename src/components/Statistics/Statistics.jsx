import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className={css.feedbackList}>
      <li>
        <p>
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:
          <span> {positivePercentage ? positivePercentage : 0}%</span>
        </p>
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
