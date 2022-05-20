import React from 'react';
import PropTypes from 'prop-types';
import c from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={c.text}>Good:{good}</p>
      <p className={c.text}>Neutral:{neutral}</p>
      <p className={c.text}>Bad:{bad}</p>
      <p className={c.text}>Total:{total}</p>
      <p className={c.text}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
