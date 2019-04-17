import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import './commons/includes';
import { LIST_FILTER_ALL, LIST_FILTER_IN_PROGRESS } from './commons/constants';
import s from './ToDoList.module.css';
import LoadingOverlay from './LoadingOverlay';
import ErrorOverlay from './ErrorOverlay';

const listTabs = [
  {id: LIST_FILTER_ALL, label: 'All'},
  {id: LIST_FILTER_IN_PROGRESS, label: 'In Progress'}
];

/*

  A list of the to-do items. The component receives the data compatible with the `ToDoCalendar` component.
  The list lets delete, select and resolve items.

 */
class ToDoList extends React.Component {
  static propTypes = {
    /*
      Includes:
      `events` - list of the to-do items
      `error` - error object with message
      `isLoading` - progress flag
      `listFilter` - type of filter for the items
     */
    data: PropTypes.object,
    // the selected to-do item object
    selectedItem: PropTypes.object,
    // dialog element placeholder
    addNewItemDialog: PropTypes.element,
    // fires when the user switches the list filter
    onToggleListFilter: PropTypes.func,
    // fires when the user resolves the to-do item
    onToggleItemDone: PropTypes.func,
    // fires when the user deletes the to-do item
    onDeleteItem: PropTypes.func,
    // fires when user selects the to-do item in the list
    onSelectItem: PropTypes.func,
  };

  static defaultProps = {
    data: {
      events: [],
      error: null,
      isLoading: false,
      listFilter: LIST_FILTER_ALL
    },
    selectedItem: null,
    addNewItemDialog: null,
    onToggleListFilter: () => {
      console.info('ToDoList.onToggleListFilter is not set');
    },
    onToggleItemDone: () => {
      console.info('ToDoList.onToggleItemDone is not set');
    },
    onDeleteItem: () => {
      console.info('ToDoList.onDeleteItem is not set');
    },
    onSelectItem: () => {
      console.info('ToDoList.onSelectItem is not set');
    },
  };

  constructor (props) {
    super(props);
    const { data } = this.props;
    this.state = {
      listFilter: data.listFilter,
      events: data.events || [],
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { data } = this.props;
    if (data && data !== prevProps.data) {
      if (data.listFilter && data.listFilter !== this.state.listFilter) {
        this.setState({
          listFilter: data.listFilter,
        });
      }
      if (data.events && data.events !== this.state.events) {
        this.setState({
          events: data.events,
        });
      }
    }
  }

  titleTemplate = (rowData, colum) => {
    return rowData.done
      ? (
        <span style={{textDecoration: 'line-through'}}>
          {rowData.title}
        </span>
      )
        : (
        <span>
          {rowData.title}
        </span>

      );
  };

  actionTemplate = (rowData, column) => {
    return (
      <div style={{ display: 'flex' }}>
        {rowData.done
          ? (
            <Button
              type="button"
              className="p-button-success"
              icon="pi pi-check"
              style={{ marginRight: '.5em' }}
              onClick={this.handleToggleItemDone(rowData.id)}
            />
          )
          : (
            <Button
              type="button"
              className="p-button-secondary"
              icon="pi pi-check"
              style={{ marginRight: '.5em' }}
              onClick={this.handleToggleItemDone(rowData.id)}
            />
          )
        }
        <Button
          type="button"
          className="p-button-secondary"
          icon="pi pi-trash"
          onClick={this.handleDeleteItem(rowData.id)}
        />
      </div>
    );
  };

  handleToggleListFilter = (e) => {
    console.info('e: ', e);
    const {id} = e.value;
    this.props.onToggleListFilter({listFilter: id});
  };

  handleToggleItemDone = (id) => (e) => {
    this.props.onToggleItemDone({id});
  };

  handleDeleteItem = (id) => (e) => {
    this.props.onDeleteItem({id});
  };

  handleSelectItem = (e) => {
    this.props.onSelectItem(e.value);
  };

  render () {
    const { listFilter, events } = this.state;
    const { data, addNewItemDialog, selectedItem } = this.props;
    let error = null;
    let isLoading = false;
    if (data) {
      error = data.error;
      isLoading = data.isLoading;
    }
    const activeListTab = listTabs.find(tab => tab.id === listFilter);
    return (
      <div className={s.root}>
        {error && <ErrorOverlay error={error} />}
        {isLoading && <LoadingOverlay/>}
        <TabMenu
          model={listTabs}
          activeItem={activeListTab}
          onTabChange={this.handleToggleListFilter}/>
        <DataTable
          value={events}
          selection={selectedItem}
          selectionMode="single"
          onSelectionChange={this.handleSelectItem}
        >
          <Column
            field="title"
            header="ToDo"
            body={this.titleTemplate}
            style={{ textAlign: 'left' }}
          />
          <Column
            body={this.actionTemplate}
            style={{ textAlign: 'center', width: '7em' }}
          />
        </DataTable>
        {addNewItemDialog}
      </div>
    );
  }
}

export default ToDoList;
