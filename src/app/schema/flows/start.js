
export default [{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.api.initApplication"},"events":[{"name":"data","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoList","componentInstance":"toDoList","propertyName":"data"}},{"type":"component","props":{"componentName":"usr.todo.ToDoCalendar","componentInstance":"toDoCalendar","propertyName":"data"}}]}]}]}]}];