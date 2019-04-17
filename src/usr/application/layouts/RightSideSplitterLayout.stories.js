import React from 'react';
import PropTypes from 'prop-types';
import RightSideSplitterLayout from './RightSideSplitterLayout';

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
          <RightSideSplitterLayout />
        </div>
      )
    },
  }
]
