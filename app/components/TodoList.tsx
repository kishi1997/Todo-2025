import React from 'react';
import TodoItem from './TodoItem';
import { db } from '@/server/db';
import { Todo } from '../types/type';

async function TodoList() {
  const todoList: Todo[] = await db.task.findMany();
  return (
    <div className="space-y-2">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className={`p-3 rounded-lg transition-all duration-300 ${todo.complete ? 'bg-gray-800 bg-opacity-40' : 'bg-gray-800 bg-opacity-80 border-l-4 border-blue-500'}`}
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
