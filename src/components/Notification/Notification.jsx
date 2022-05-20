import React from 'react';
import PropTypes from 'prop-types';
import c from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <p className={c.text}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
