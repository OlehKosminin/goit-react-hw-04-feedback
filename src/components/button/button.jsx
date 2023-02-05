import React from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';

const ButtonList = ({ options, onFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onFeedback(option)}
            type="button"
            data-feetback={option}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

ButtonList.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonList;
