'use client';
import React from 'react';
import TodoItem from '../TodoItem';
import { useTodoStore } from '@/app/store/TodoStore';

function UnCompleteTodoList() {
  const { todos } = useTodoStore();
  if (todos.length === 0) return <p>登録したtaskはまだありません</p>;
  return (
    <div className="space-y-4 pr-4 w-2/6">
      <div className="bg-blue-500 text-white mr-3 text-sm px-4 py-1 rounded-xl inline-block">
        Uncomplete
      </div>
      {todos
        .filter((todo) => !todo.complete)
        .map((todo) => (
          <div key={todo.id} className="rounded-lg transition-all duration-300">
            <TodoItem todo={todo}></TodoItem>
          </div>
        ))}
    </div>
  );
}

export default UnCompleteTodoList;
