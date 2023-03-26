import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option}>
          <button className={css.btn} onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        </li>
      ))}
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
