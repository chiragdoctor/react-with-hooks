import React, { useState } from 'react';
import './App.css';

const initState = [
  'Buy Groceries',
  'Take Dog for walk',
  'Shopping',
  'Learn React',
];
function App() {
  const [todoList, setTodoList] = useState(initState);
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStartHandler = (e, index) => {
    setDraggedItem(todoList[index]);
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOverHandle = (index) => {
    const draggedOverItem = todoList[index];
    if (draggedOverItem === draggedItem) {
      return;
    }

    const items = todoList.filter((item) => item !== draggedItem);
    items.splice(index, 0, draggedItem);
    setTodoList(items);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Drag and Drop Todo List</h1>
        <ul>
          {todoList.map((todo, idx) => (
            <li
              key={idx}
              onDragOver={() => onDragOverHandle(idx)}
              className='item-style'
            >
              <div draggable onDragStart={(e) => onDragStartHandler(e, idx)}>
                {todo}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
