# A sample of the ToDo application with the FullCalendar component

**This project is an example of the Single-page Web application with React components tailored for the [Webcodesk](https://webcodesk.com)** 

## Specification

* Used libs: [PrimeReact](https://primefaces.org/primereact)
* Search tags: `PrimeReact`, `To-Do_List`, `FullCalendar`
* Address on the market: []() 
* Live demo: [prime-faces-react-todo-sample.firebaseapp.com](https://prime-faces-react-todo-sample.firebaseapp.com/);
 
#### Open the project in Webcodesk:
 * clone this project: `git clone https://github.com/ipselon/prime_faces_react_todo_sample.git`
 * install dependencies in the project's directory: `yarn install`
 * open project's directory in [Webcodesk](https://webcodesk.com)


## How to use components in your project - building instruction

1. Run Webcodesk and open `Market`

<p style="text-align: center">
<img src="/img/pic1.jpg" />
</p>

2. Find `Absolute_Layouts` components: `LeftSideSplitterLayout`, `RightSideSplitterLayout`, `TopToolbarLayout`

<p style="text-align: center">
<img src="/img/pic2.jpg" />
</p>

3. Install each of them into `layouts` directory

<p style="text-align: center">
<img src="/img/pic3.jpg" />
</p>

4. Close `Market` and find installed components in the `layouts` dir.

<p style="text-align: center">
<img src="/img/pic3.jpg" />
</p>

5. Open `Market` again

<p style="text-align: center">
<img src="/img/pic1.jpg" />
</p>

6. Find `ToDo_List` components

<p style="text-align: center">
<img src="/img/pic5.jpg" />
</p>

7. Install each of them into `todo` directory

<p style="text-align: center">
<img src="/img/pic6.jpg" />
</p>

8. Close `Market` and find newly installed components

<p style="text-align: center">
<img src="/img/pic7.jpg" />
</p>

9. Double click on the `main` page

<p style="text-align: center">
<img src="/img/pic8.jpg" />
</p>

10. Open `Structure` in the page editor and drag and drop `TopToolbarLayout` to root element on the page

<p style="text-align: center">
<img src="/img/pic9.jpg" />
</p>

11. Drag and drop `LeftSideSplitterLayout` to `content`, and `ToDoMenuBar` to `top`

<p style="text-align: center">
<img src="/img/pic10.jpg" />
</p>

12. Drag and drop `ToDoList` to `left`, and `ToDoCalendar` to `right`

<p style="text-align: center">
<img src="/img/pic11.jpg" />
</p>

13. Drag and drop `ToDoList` to `left`, and `ToDoCalendar` to `right`

<p style="text-align: center">
<img src="/img/pic11.jpg" />
</p>

14. Drag and drop `ToDoAddDialog` to `addNewItemDialog`, and click the `Save` button

<p style="text-align: center">
<img src="/img/pic12.jpg" />
</p>

15. Double click on the `start` flow, drag and drop `initApplication` into the flow editor, and connect `Application` with `initApplication`

<p style="text-align: center">
<img src="/img/pic13.jpg" />
</p>

16. Click on the `plus` icon. Create `add_new_todo_item` flow.

<p style="text-align: center">
<img src="/img/pic14.jpg" />
</p>

17. Drop `toDoCalendar` onto the `Application` element. Add `startAddNewToDoItem`, and two `toDoAddDialog` to the flow. Connect them.

<p style="text-align: center">
<img src="/img/pic15.jpg" />
</p>

18. Drop `toDoCalendar` onto the `Application` element. Add `startAddNewToDoItem`, and two `toDoAddDialog` to the flow. Connect them.

<p style="text-align: center">
<img src="/img/pic15.jpg" />
</p>

19. Add `stopAddNewToDoItem`, and `toDoAddDialog` to the flow. Connect them.

<p style="text-align: center">
<img src="/img/pic16.jpg" />
</p>

20. Add `addNewToDoItem`, `stopAddNewToDoItem`, `toDoAddDialog`, `toDoList`, and `toDoCalendar` to the flow. Connect them.

<p style="text-align: center">
<img src="/img/pic17.jpg" />
</p>






