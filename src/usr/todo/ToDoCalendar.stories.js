import React from 'react';
import PropTypes from 'prop-types';
import ToDoCalendar from './ToDoCalendar';

const padding = '3em';

const rootStyle = {
  position: 'absolute',
  top: padding,
  left: padding,
  right: padding,
  bottom: padding,
};

export default [
  {
    story: 'when isLoading = true',
    renderStory: () => {
      return <ToDoCalendar isLoading={true}/>;
    },
  },
  {
    story: 'with events',
    renderStory: () => {
      return (
        <div style={rootStyle}>
          <ToDoCalendar
            data={{
              events: [
                {
                  id: '01',
                  title: 'Install components',
                  start: '2019-04-09',
                  end: '2019-04-09'
                },
                {
                  id: '01',
                  title: 'Install Webcodesk',
                  start: '2019-04-16',
                  end: '2019-04-20',
                  backgroundColor: '#34A835'
                },
                {
                  id: '02',
                  title: 'Do the tutorial',
                  start: '2019-04-19',
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
        </div>
      );
    },
  }
];
