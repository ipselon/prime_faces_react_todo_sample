## Components for building To-Do list with FullCalendar component.

Specification:
* Used library: [PrimeReact](https://primefaces.org/primereact)

### ToDoCalendar

A wrapper of the FullCalendar component.
It implements most features of the FullCalendar: drag & drop, resizing, navigation.

Properties:
* `data` - Object compatible with all `data` outputs of the `api` functions in this group.
    * `events` - Array of to-do items
    * `isLoading` - Loading progress flag
    * `error` - Error object with message
* `selectedItem` - Selected event object in the calendar
* `onDateClick` - Fires when user click on the cell in the calendar
* `onEventClick` - Fires when the user clicks on the event
* `onEventChange` - Fires when user finishes drag & drop or resizing of the event

---

### ToDoList

A list of the to-do items. The component receives the data compatible with the `ToDoCalendar` component.
The list lets delete, select and resolve items.

Properties:

* `data` - Object compatible with all `data` outputs of the `api` functions in this group.
    * `events` - List of the to-do items
    * `error` - Error object with message
    * `isLoading` - Loading progress flag
    * `listFilter` - Type of filter for the items.
* `selectedItem` - The selected to-do item object
* `addNewItemDialog` - The dialog element placeholder. **Put here the `ToDoAddDialog` component**
* `onToggleListFilter` - Fires when the user switches the list filter
* `onToggleItemDone` - Fires when the user resolves the to-do item
* `onDeleteItem` - Fires when the user deletes the to-do item
* `onSelectItem` - Fires when user selects the to-do item in the list

---

### ToDoAddDialog

A dialog used to add the new to-do item.
Includes one input element. Should be placed in the root component on page.

Properties:

* `data` - Any arbitrary data, dialog merges the data with text and passes in to submit point
> compatible with any `data` output of the functions in the `api` list 
* `isOpen` - Flag of the dialog visibility
> compatible with any `hide` and `show` outputs of the functions in the `api` list
* `onSubmit` - Fires when the user click on the Add button
* `onCancel` - Fires when user clicks on the Cancel button

---

### ToDoMenuBar

A toolbar component. Has a menu for switching between the To-Do pane layouts.
Has the `Usage` item for help.

Properties:
* `onLeftSidePanel` - Fires when user switches to the left-side To-Do list panel 
* `onRightSidePanel` - Fires when user switches to the right-side To-Do list panel 

---

## Functions for building To-Do list with FullCalendar


### initApplication

The function inits the application for the first application load.

No parameters

Dispatching:
* `data`:
  * `events` - List of the to-do items
  * `error` - Error object with message
  * `isLoading` - Loading progress flag
  * `listFilter` - Type of filter for the items.
  
---

### saveListFilter

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

---

### getEvents

The function gets all events from the storage and filters them according to the selected previously filter type.

No parameters

Dispatching:
* `data`:
  * `events` - List of the to-do items
  * `error` - Error object with message
  * `isLoading` - Loading progress flag
  
---

### startAddNewToDoItem

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
  
---

### stopAddNewToDoItem

The function is used to hide the dialog

No parameters

Dispatching:
* `show` - flag for hiding the dialog

---

### addNewToDoItem

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

---

### changeCalendarEvent

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
  
---

### toggleToDoItemDone

The function finds the needed to-do item and toggles the state of it, then saves new list into the storage.

Parameters:
* `options`:
  * `id` - the id of the changed item

Dispatching:
* `data`:
  * `events` - List of the to-do items
  * `error` - Error object with message
  * `isLoading` - Loading progress flag

---

### deleteToDoItem

The function finds the needed to-do item and deletes it from the list, then saves new list into the storage.

Parameters:
* `options`:
  * `id` - the id of the changed item

Dispatching:
* `data`:
  * `events` - List of the to-do items
  * `error` - Error object with message
  * `isLoading` - Loading progress flag
  
---

### selectListItem

The function pass the selected to-do item in the list to the calendar instance.

Parameters:
* `listItem` - the selected list item

Dispatching:
* `selectedItem` - the selected list item

---

### selectCalendarEvent

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
  
---

