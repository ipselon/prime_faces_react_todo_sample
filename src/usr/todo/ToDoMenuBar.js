import React from 'react';
import PropTypes from 'prop-types';
import {Menubar} from 'primereact/menubar';
import './commons/includes';
import './ToDoMenuBar.css';

/*

  A toolbar component. Has menu for switching between the To-Do pane layouts.
  Has the `Usage` item for help.

 */
const ToDoMenuBar = (props) => {
  return (
    <Menubar model={[
      {
        label: 'Change Layout',
        items: [
          {
            label: 'Left Side Panel',
            command: () => { props.onLeftSidePanel(); }
          },
          {
            label: 'Right Side Panel',
            command: () => { props.onRightSidePanel(); }
          },
        ]
      },
      {
        label: 'Usage / Help',
        command: () => {
          alert('Click on the calendar cell to add new note.\n\nDrag & drop events on the calendar.\n\nResize events on the calendar.');
        }
      },
    ]} />
  );
};

ToDoMenuBar.propTypes = {
  // Fires when user switches to the left-side To-Do list panel
  onLeftSidePanel: PropTypes.func,
  // Fires when user switches to the right-side To-Do list panel
  onRightSidePanel: PropTypes.func,
};

ToDoMenuBar.defaultProps = {
  onLeftSidePanel: () => {},
  onRightSidePanel: () => {},
};

export default ToDoMenuBar;
