import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from 'react-split-pane';
import './Resizer.css';
import s from './TopSideSplitterLayout.module.css';
import Placeholder from './Placeholder';

// Edit here the default values
const TOP_PANEL_HEIGHT = 150;
const TOP_PANEL_MIN_HEIGHT = 50;

/*
  Split pane into top and bottom panels

  * Change the top panel height by changing the constant `TOP_PANEL_HEIGHT`.
  * Change the minimal panel height by changing the constant `TOP_PANEL_MIN_HEIGHT`.

 */
const TopSideSplitterLayout = (props) => {
  return (
    <div className={s.root}>
      <SplitPane
        split="horizontal"
        minSize={TOP_PANEL_MIN_HEIGHT}
        defaultSize={TOP_PANEL_HEIGHT}
      >
        <div className={s.top}>{props.top}</div>
        <div className={s.bottom}>{props.bottom}</div>
      </SplitPane>
    </div>
  );
};

TopSideSplitterLayout.propTypes = {
  // Element placed in the top panel
  top: PropTypes.element,
  // Element placed in the bottom panel
  bottom: PropTypes.element,
};

TopSideSplitterLayout.defaultProps = {
  top: <Placeholder title="top" />,
  bottom: <Placeholder title="bottom" />,
};

export default TopSideSplitterLayout;
