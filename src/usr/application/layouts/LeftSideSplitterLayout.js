import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from 'react-split-pane';
import './Resizer.css';
import s from './LeftSideSplitterLayout.module.css';
import Placeholder from './Placeholder';

// Edit here the default values
const LEFT_PANEL_WIDTH = 400;
const LEFT_PANEL_MIN_WIDTH = 300;

/*
  Split pane into right and left panels

  * Change the left panel width by changing the constant `LEFT_PANEL_WIDTH`.
  * Change the minimal panel width by changing the constant `LEFT_PANEL_MIN_WIDTH`.

 */
const LeftSideSplitterLayout = (props) => {
  return (
    <div className={s.root}>
      <SplitPane
        split="vertical"
        minSize={LEFT_PANEL_MIN_WIDTH}
        defaultSize={LEFT_PANEL_WIDTH}
      >
        <div className={s.left}>{props.left}</div>
        <div className={s.right}>{props.right}</div>
      </SplitPane>
    </div>
  );
};

LeftSideSplitterLayout.propTypes = {
  // Element placed in the left panel
  left: PropTypes.element,
  // Element placed in the right panel
  right: PropTypes.element,
};

LeftSideSplitterLayout.defaultProps = {
  left: <Placeholder title="left" />,
  right: <Placeholder title="right" />,
};

export default LeftSideSplitterLayout;
