import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './Placeholder';
import s from './TopToolbarLayout.module.css';

// Edit here the default height of the top panel
const TOP_PANEL_HEIGHT = '48px';

/*
 Use as a root component on the page. Has the absolute positioning.

 * Change the top panel height by changing the constant `TOP_PANEL_HEIGHT`.

 */
const TopToolbarLayout = props => {
  return (
    <div className={s.root}>
      <div className={s.top} style={{height: TOP_PANEL_HEIGHT}}>
        {props.top}
      </div>
      <div className={s.content} style={{top: TOP_PANEL_HEIGHT}}>
        {props.content}
      </div>
    </div>
  );
};

TopToolbarLayout.propTypes = {
  // Element placed in the top panel
  top: PropTypes.element,
  // Element placed in the central panel under the top panel
  content: PropTypes.element,
};

TopToolbarLayout.defaultProps = {
  top: <Placeholder title="top" />,
  content: <Placeholder title="content" />,
};

export default TopToolbarLayout;
