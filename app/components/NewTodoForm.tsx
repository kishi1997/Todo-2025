'use client';
import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { useTodoStore } from '../store/Todostore';

const NewTodoForm = () => {
  const { addTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState<string>('');

  const addNewTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
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
