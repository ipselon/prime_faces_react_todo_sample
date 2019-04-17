import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import React from 'react';
import PropTypes from 'prop-types';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import LoadingOverlay from './LoadingOverlay';

import s from './ToDoCalendar.module.css';
import ErrorOverlay from './ErrorOverlay';
import { getCurrentDateString, getDateString } from './commons/eventUtils';

/*

  A wrapper of the FullCalendar component.
  It implements most features of the FullCalendar: drag & drop, resizing, navigation.

 */
class ToDoCalendar extends React.Component {
  static propTypes = {
    /*
      Includes:
       `events` - array of to-do items
       `isLoading` - loading progress flag
       `error` - error object with message
    */
    data: PropTypes.object,
    // selected event in the calendar
    selectedItem: PropTypes.object,
    // fires when user click on the cell in the calendar
    onDateClick: PropTypes.func,
    // fires when the user clicks on the event
    onEventClick: PropTypes.func,
    // fires when user finishes drag & drop or resizing of the event
    onEventChange: PropTypes.func,
  };

  static defaultProps = {
    data: {
      events: [],
      isLoading: false,
      error: null,
    },
    selectedItem: {
      start: getCurrentDateString()
    },
    onDateClick: () => {
      console.info('ToDoCalendar.onDateClick is not set');
    },
    onEventClick: () => {
      console.info('ToDoCalendar.onEventClick is not set');
    },
    onEventChange: () => {
      console.info('ToDoCalendar.onEventChange is not set');
    },
  };

  constructor (props) {
    super(props);
    this.fullCalendar = React.createRef();
    const { selectedItem, data } = this.props;
    this.state = {
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        defaultDate: selectedItem.start,
        header: {
          left: 'prev, next',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, timeGridDay'
        },
        views: {
          dayGrid: {
            // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
          },
          timeGrid: {
            // options apply to timeGridWeek and timeGridDay views
            displayEventEnd: true
          },
          week: {
            // options apply to dayGridWeek and timeGridWeek views
          },
          day: {
            // options apply to dayGridDay and timeGridDay views
          }
        },
        editable: true,
        droppable: false,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        eventResize: this.handleEventChange,
        eventDrop: this.handleEventChange
      },
      events: data.events
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { selectedItem, data } = this.props;
    if (selectedItem && selectedItem !== prevProps.selectedItem) {
      this.fullCalendar.current.calendar.gotoDate(selectedItem.start);
    }
    if (data && data !== prevProps.data) {
      if (data.events && data.events !== this.state.events) {
        this.setState({
          events: data.events,
        });
      }
    }
  }

  handleDateClick = (e) => {
    console.info(e);
    this.props.onDateClick({
      allDay: e.allDay,
      startDate: e.date,
    });
  };

  handleEventClick = (e) => {
    console.info(e);
    const { event } = e;
    this.props.onEventClick({
      id: event.id,
    });
  };

  handleEventChange = (e) => {
    console.info(e);
    const { event } = e;
    this.props.onEventChange({
      id: event.id,
      start: event.start ? getDateString(event.start) : null,
      end: event.end ? getDateString(event.end) : null,
    });
  };

  render () {
    const { events } = this.state;
    const { data } = this.props;
    let error = null;
    let isLoading = false;
    if (data) {
      error = data.error;
      isLoading = data.isLoading;
    }
    return (
      <div className={s.root}>
        {error && <ErrorOverlay error={error}/>}
        {isLoading && <LoadingOverlay/>}
        <FullCalendar ref={this.fullCalendar} events={events} options={this.state.options}/>
      </div>
    );
  }
}

export default ToDoCalendar;
