import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from './ToDoList';

export default [
  {
    story: 'when isLoading = true',
    renderStory: () => {
      return <ToDoList isLoading={true} />
    },
  },
  {
    story: 'with events',
    renderStory: () => {
      return (
        <ToDoList
          data={{
            events: [
              {
                id: '01',
                title: 'What to do title',
                start: '2019-04-17',
                end: '2019-04-19',
                done: true
              },
              {
                id: '02',
                title: 'What to do title 2',
                start: '2019-04-17',
                end: '2019-04-23'
              }
            ]
          }}
          isLoading={false}
        />
      );
    },
  }
]
