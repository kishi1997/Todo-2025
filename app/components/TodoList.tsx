'use client';
import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useTodoStore } from '../store/Todostore';

function TodoList() {
  const { todos, getTodoList } = useTodoStore();
  useEffect(() => {
    getTodoList();
  }, []);

  if (todos.length === 0) return <p>登録したtaskはまだありません</p>;
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`p-3 rounded-lg transition-all duration-300 ${todo.complete ? 'bg-gray-800 bg-opacity-40' : 'bg-gray-800 bg-opacity-80 border-l-4 border-blue-500'}`}
        >
          <div className="flex items-center">
            <TodoItem todo={todo}></TodoItem>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
