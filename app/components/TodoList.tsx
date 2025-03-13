import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/type';

const todoList: Todo[] = [
  { id: 1, text: 'タスクナンバー１', completed: false },
  { id: 2, text: 'タスクナンバー２', completed: true },
  { id: 3, text: 'タスクナンバー３', completed: false },
  { id: 4, text: 'タスクナンバー４', completed: false },
];
function TodoList() {
  return (
    <div className="space-y-2">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className={`p-3 rounded-lg transition-all duration-300 ${todo.completed ? 'bg-gray-800 bg-opacity-40' : 'bg-gray-800 bg-opacity-80 border-l-4 border-blue-500'}`}
        >
          <div className="flex items-center">
            <TodoItem {...todo}></TodoItem>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
