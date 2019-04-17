import { getStorageItem, setStorageItem } from './commons/storage';
import { LIST_FILTER_ALL } from './commons/constants';
import {
  deleteEventById,
  filterEvents,
  getDateString,
  getEventById,
  getNewEventId,
  toggleEventDoneById
} from './commons/eventUtils';

let activeListFilter = LIST_FILTER_ALL;

/*

  The function inits the application for the first application load.

  No parameters

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag
      * `listFilter` - Type of filter for the items.

 */
export const initApplication = () => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    activeListFilter = await getStorageItem('activeListFilter');
    const events = await getStorageItem('events');
    dispatch('data', { events: filterEvents(events, activeListFilter), listFilter: activeListFilter, isLoading: false });
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function saves the selected filter in the To-Do list.

  Parameters:
  * `listFilter` - a filter type value. Can be: `LIST_FILTER_ALL`, `LIST_FILTER_IN_PROGRESS`

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag
      * `listFilter` - Type of filter for the items
  * `success` - fires when filter is saved successfully, does not produce any data

 */
export const saveListFilter = ({listFilter}) => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    await setStorageItem('activeListFilter', listFilter);
    activeListFilter = listFilter;
    dispatch('data', { listFilter: activeListFilter, isLoading: false });
    dispatch('success');
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function gets all events from the storage and filters them according to the selected previously filter type.

  No parameters

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag

 */
export const getEvents = () => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    const events = await getStorageItem('events');
    dispatch('data', { events: filterEvents(events, activeListFilter), isLoading: false });
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function is used to show the dialog with the initial calendar event data

  Parameters:
  * `options`:
      * `startDate` - a start date of the event (Date object)
      * `allDate` - flag for indicating that event assigned to all day or not

  Dispatching:
  * `show` - flag for showing the dialog
  * `newToDoItem` - the calendar event data (the options argument)
      * `startDate` - a start date of the event (Date object)
      * `allDate` - flag for indicating that event assigned to all day or not

 */
export const startAddNewToDoItem = ({startDate, allDate}) => dispatch => {
  dispatch('show', true);
  dispatch('newToDoItem', {startDate, allDate});
};

/*

  The function is used to hide the dialog

  No parameters

  Dispatching:
  * `show` - flag for hiding the dialog

 */
export const stopAddNewToDoItem = () => dispatch => {
  dispatch('hide', false);
};

/*

  The function adds the new to-do item to the events list and saves new list into the storage.

  Parameters:
  * `options`:
      * `noteText` - text entered by the user
      * `startDate` - a start date of the event (Date object)

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag
  * `success` - fires when the new item is saved successfully, does not produce any data

 */
export const addNewToDoItem = ({noteText, startDate}) => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    let events = await getStorageItem('events');
    events = events || [];
    events.push({
      id: getNewEventId(events),
      title: noteText,
      start: getDateString(startDate)
    });
    await setStorageItem('events', events);
    dispatch('data', { events: filterEvents(events, activeListFilter), isLoading: false });
    dispatch('success');
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function saves the changed to-do item to the events list and saves new list into the storage.

  Parameters:
  * `calendarEvent`:
      * `id` - the id of the changed item
      * `start` - a start date of the event (string)
      * `end` - an end date of the event (string)

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag

 */
export const changeCalendarEvent = (calendarEvent) => async dispatch => {
  const {id, start, end} = calendarEvent;
  dispatch('data', { isLoading: true });
  try {
    const events = await getStorageItem('events');
    const foundEvent = getEventById(events, id);
    foundEvent.start = start;
    foundEvent.end = end;
    await setStorageItem('events', events);
    dispatch('data', { events: filterEvents(events, activeListFilter), isLoading: false });
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function finds the needed to-do item and toggles the state of it, then saves new list into the storage.

  Parameters:
  * `options`:
      * `id` - the id of the changed item

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag

 */
export const toggleToDoItemDone = ({id}) => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    const events = await getStorageItem('events');
    let newEvents = toggleEventDoneById(events, id);
    await setStorageItem('events', newEvents);
    dispatch('data', { events: filterEvents(newEvents, activeListFilter), isLoading: false });
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function finds the needed to-do item and deletes it from the list, then saves new list into the storage.

  Parameters:
  * `options`:
      * `id` - the id of the changed item

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag

 */
export const deleteToDoItem = ({id}) => async (dispatch) => {
  dispatch('data', { isLoading: true });
  try {
    const events = await getStorageItem('events');
    let newEvents = deleteEventById(events, id);
    await setStorageItem('events', newEvents);
    dispatch('data', { events: filterEvents(newEvents, activeListFilter) });
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};

/*

  The function pass the selected to-do item in the list to the calendar instance.

  Parameters:
  * `listItem` - the selected list item

  Dispatching:
  * `selectedItem` - the selected list item

 */
export const selectListItem = (listItem) => dispatch => {
  dispatch('selectedItem', listItem);
};

/*

  The function finds the needed to-do item and produces it to the list as selected item

  Parameters:
  * `calendarEvent`:
      * `id` - the id of the item in the calendar

  Dispatching:
  * `data`:
      * `events` - List of the to-do items
      * `error` - Error object with message
      * `isLoading` - Loading progress flag
  * `selectedItem` - the selected list item

 */
export const selectCalendarEvent = (calendarEvent) => async dispatch => {
  const {id} = calendarEvent;
  dispatch('data', { isLoading: true });
  try {
    const events = await getStorageItem('events');
    dispatch('data', { events, isLoading: false });
    dispatch('selectedItem', getEventById(events, id));
  } catch (e) {
    dispatch('data', { error: e, isLoading: false });
  }
};
