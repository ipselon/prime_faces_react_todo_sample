import React from 'react';
import PropTypes from 'prop-types';
import ToDoCalendar from './ToDoCalendar';

export default [
  {
    story: 'when isLoading = true',
    renderStory: () => {
      return <ToDoCalendar isLoading={true} />
    },
  },
  {
    story: 'with events',
    renderStory: () => {
      return (
        <ToDoCalendar
          data={{
            events: [
              {
                id: '01',
                title: 'What to do title',
                start: '2019-04-17',
                end: '2019-04-19'
              },
              {
                id: '02',
                title: 'What to do title 2',
                start: '2019-04-17',
                end: '2019-04-23'
              }
            ]
          }}
          onDateClick={(e) => {
            console.info(e);
          }}
          onEventClick={(e) => {
            console.info(e);
          }}
          onEventChange={(e) => {
            console.info(e);
          }}
          isLoading={false}
        />
      );
    },
  }
]
