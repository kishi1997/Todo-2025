'use client';
import React, { useState } from 'react';
import { Todo } from '../types/type';
type NewTodoFormProps = {
  updataTodoList: (newTodo: Todo) => void;
};
const NewTodoForm = ({ updataTodoList }: NewTodoFormProps) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const addNewTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newTodo }),
    });
    const newTodoItem = await res.json();
    // propsで受け取った関数で親側のtodoListを更新
    updataTodoList(newTodoItem);
    setNewTodo('');
  };
  return (
    <form onSubmit={addNewTodo} className="relative mb-6">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        className="w-full bg-gray-900 text-gray-100 px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
        placeholder="新しいタスクを入力..."
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </form>
  );
};

export default NewTodoForm;
