import React from 'react';
import PropTypes from 'prop-types';
import TopToolbarLayout from './TopToolbarLayout';

const padding = '4em';

const rootStyle = {
  position: 'absolute',
  top: padding,
  left: padding,
  right: padding,
  bottom: padding,
};

export default [
  {
    story: 'for publishing',
    renderStory: () => {
      return (
        <div style={rootStyle}>
          <TopToolbarLayout />
        </div>
      )
    },
  }
]
