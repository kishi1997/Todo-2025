import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <ul className="space-y-2">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoList;
