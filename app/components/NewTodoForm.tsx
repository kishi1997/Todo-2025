'use client';
import React, { useState } from 'react';
import { Todo } from '../types/type';
import { CiCirclePlus } from 'react-icons/ci';

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
        <CiCirclePlus className="w-8 h-8"></CiCirclePlus>
      </button>
    </form>
  );
};

export default NewTodoForm;
