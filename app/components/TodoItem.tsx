import React from 'react';

const TodoItem = () => {
  return (
    <li className="bg-gray-200 p-3 rounded-lg flex justify-between items-center">
      <span>Sample Todo</span>
      <div className="space-x-2">
        <button className="bg-blue-500 text-white p-1 rounded-lg">Edit</button>
        <button className="bg-red-500 text-white p-1 rounded-lg">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
