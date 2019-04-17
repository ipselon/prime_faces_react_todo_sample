import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from 'react-split-pane';
import './Resizer.css';
import s from './BottomSideSplitterLayout.module.css';
import Placeholder from './Placeholder';

// Edit here the default values
const BOTTOM_PANEL_HEIGHT = 150;
const BOTTOM_PANEL_MIN_HEIGHT = 50;

/*
  Split pane into top and bottom panels

  * Change the bottom panel height by changing the constant `BOTTOM_PANEL_HEIGHT`.
  * Change the minimal panel height by changing the constant `BOTTOM_PANEL_MIN_HEIGHT`.

 */
const BottomSideSplitterLayout = (props) => {
  return (
    <div className={s.root}>
      <SplitPane
        split="horizontal"
        primary="second"
        minSize={BOTTOM_PANEL_MIN_HEIGHT}
        defaultSize={BOTTOM_PANEL_HEIGHT}
      >
        <div className={s.top}>{props.top}</div>
        <div className={s.bottom}>{props.bottom}</div>
      </SplitPane>
    </div>
  );
};

BottomSideSplitterLayout.propTypes = {
  // Element placed in the top panel
  top: PropTypes.element,
  // Element placed in the bottom panel
  bottom: PropTypes.element,
};

BottomSideSplitterLayout.defaultProps = {
  top: <Placeholder title="top" />,
  bottom: <Placeholder title="bottom" />,
};

export default BottomSideSplitterLayout;
