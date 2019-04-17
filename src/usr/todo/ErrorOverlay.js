import React from 'react';
import PropTypes from 'prop-types';
import s from './ErrorOverlay.module.css';

/*
  ErrorOverlay is used for showing the error text

  **Note** add `relative` position to the root of the main component

 */
const ErrorOverlay = ({error}) => {
  return (
    <div className={s.root}>
      <p style={{color: 'red'}}>{error ? error.message : 'Empty error'}</p>
    </div>
  );
};

export default ErrorOverlay;
