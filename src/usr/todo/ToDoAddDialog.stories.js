import React from 'react';
import PropTypes from 'prop-types';
import ToDoAddDialog from './ToDoAddDialog';

export default [
  {
    story: 'when isOpen = true',
    renderStory: () => {
      return <ToDoAddDialog isOpen={true} />
    },
  },
]
