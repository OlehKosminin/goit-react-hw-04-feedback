import React from 'react';
import PropTypes from 'prop-types';
import buttonsCss from './buttons.module.css';

const FeedbackOptions = ({ options, actionFeedback }) => (
  <div className={buttonsCss.options}>
    {options.map(option => (
      <button
        className={buttonsCss.button}
        type="button"
        data-feedback={option}
        onClick={() => actionFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  actionFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
