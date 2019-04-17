import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import './commons/includes';
/*

  A dialog used to add the new to-do item.
  Includes one input element. Should be placed in the root component on page.

 */
class ToDoAddDialog extends React.Component {
  constructor (props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      noteText: '',
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { isOpen } = this.props;
    if (isOpen && !prevProps.isOpen) {
      this.inputElement.current.element.focus();
    }
  }

  handleChangeNoteText = (e) => {
    this.setState({noteText: e.target.value});
  };

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { data, onSubmit } = this.props;
    const {noteText} = this.state;
    onSubmit({...data, noteText});
  };

  handleCancel = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onCancel } = this.props;
    onCancel();
  };

  handleKeyDown = (e) => {
    if (e && e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  render () {
    const { isOpen } = this.props;
    const { noteText } = this.state;
    return (
      <Dialog
        header="Add new note"
        footer={
          <div>
            <div>
              <Button
                label="Cancel"
                className="p-button-secondary"
                onClick={this.handleCancel}
              />
              <Button
                type="submit"
                label="Add"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        }
        visible={isOpen}
        style={{ width: '50vw' }}
        modal={true}
        onHide={this.handleCancel}
      >
        <InputText
          ref={this.inputElement}
          style={{ width: '100%' }}
          value={noteText}
          onChange={this.handleChangeNoteText}
          onKeyDown={this.handleKeyDown}
        />
      </Dialog>
    );
  }
}

ToDoAddDialog.propTypes = {
  // Any arbitrary data, dialog merges the data with text and passes in to submit point
  data: PropTypes.object,
  // Flag of the dialog visibility
  isOpen: PropTypes.bool,
  // Fires when the user click on the Add button
  onSubmit: PropTypes.func,
  // Fires when user clicks on the Cancel button
  onCancel: PropTypes.func,
};

ToDoAddDialog.defaultProps = {
  data: {},
  isOpen: false,
  onSubmit: () => {
    console.info('ToDoAddDialog.onSubmit is not set');
  },
  onCancel: () => {
    console.info('ToDoAddDialog.onCancel is not set');
  },
};

export default ToDoAddDialog;
