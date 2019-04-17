import maxBy from 'lodash/maxBy';
import { LIST_FILTER_IN_PROGRESS } from './constants';

export function filterEvents (events, listFilter) {
  let result = events || [];
  if (result.length > 0 && listFilter === LIST_FILTER_IN_PROGRESS) {
    result = result.filter(event => !event.done);
  }
  result = result.sort((a, b) => {
    return a.start.localeCompare(b.start);
  });
  return result;
}

export function deleteEventById (events, id) {
  let result = events;
  const foundIndex = events.findIndex(event => event.id === id);
  if (foundIndex >= 0) {
    result.splice(foundIndex, 1);
  }
  return result;
}

export function toggleEventDoneById (events, id) {
  let result = events;
  const foundIndex = events.findIndex(event => event.id === id);
  if (foundIndex >= 0) {
    result[foundIndex].done = !result[foundIndex].done;
    if (result[foundIndex].done) {
      result[foundIndex].backgroundColor = '#34A835';
    } else {
      delete result[foundIndex].backgroundColor;
    }
  }
  return result;
}

export function getEventById(events, id) {
  return events.find(event => event.id === id);
}

export function getCurrentDateString () {
  return new Date().toLocaleString('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
}

export function getDateString (date) {
  return date.toLocaleString('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
}

export function getNewEventId(events) {
  const withMaxId = maxBy(events, i => parseInt(i.id));
  return withMaxId ? '' + (parseInt(withMaxId.id) + 1) : '1';
}
