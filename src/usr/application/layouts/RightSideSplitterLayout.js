import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from 'react-split-pane';
import './Resizer.css';
import s from './RightSideSplitterLayout.module.css';
import Placeholder from './Placeholder';

// Edit here the default values
const RIGHT_PANEL_WIDTH = 400;
const RIGHT_PANEL_MIN_WIDTH = 300;

/*
  Split pane into right and left panels

  * Change the right panel width by changing the constant `RIGHT_PANEL_WIDTH`.
  * Change the minimal panel width by changing the constant `RIGHT_PANEL_MIN_WIDTH`.

 */
const RightSideSplitterLayout = (props) => {
  return (
    <div className={s.root}>
      <SplitPane
        split="vertical"
        primary="second"
        minSize={RIGHT_PANEL_MIN_WIDTH}
        defaultSize={RIGHT_PANEL_WIDTH}
      >
        <div className={s.left}>{props.left}</div>
        <div className={s.right}>{props.right}</div>
      </SplitPane>
    </div>
  );
};

RightSideSplitterLayout.propTypes = {
  // Element placed in the left panel
  left: PropTypes.element,
  // Element placed in the right panel
  right: PropTypes.element,
};

RightSideSplitterLayout.defaultProps = {
  left: <Placeholder title="left" />,
  right: <Placeholder title="right" />,
};

export default RightSideSplitterLayout;
