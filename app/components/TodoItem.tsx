import React from 'react';
import { Todo } from '../types/type';

const TodoItem = (todo: Todo) => {
  return (
    <>
      <div className="relative flex items-center">
        <input type="checkbox" className="opacity-0 absolute h-6 w-6" />
        <div
          className={`border-2 rounded-md w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 ${todo.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-500'}`}
        >
          <svg
            className={`fill-current w-3 h-3 text-white pointer-events-none ${todo.completed ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
      </div>
      <span
        className={`flex-grow text-gray-100 ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      <button className="text-gray-500 hover:text-red-500 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </>
  );
};

export default TodoItem;
