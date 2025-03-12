import React from 'react';

function TodoForm() {
  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="Enter a new todo..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
