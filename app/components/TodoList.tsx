'use client';
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/type';

type TodoListProps = {
  todoList: Todo[] | null;
  updateTodoListByDelete: (id: string) => void;
};

function TodoList(props: TodoListProps) {
  const updateTodoList = (id: string) => {
    props.updateTodoListByDelete(id);
  };
  if (props.todoList == null) return <p>登録したtaskはまだありません</p>;
  return (
    <div className="space-y-2">
      {props.todoList.map((todo) => (
        <div
          key={todo.id}
          className={`p-3 rounded-lg transition-all duration-300 ${todo.complete ? 'bg-gray-800 bg-opacity-40' : 'bg-gray-800 bg-opacity-80 border-l-4 border-blue-500'}`}
        >
          <div className="flex items-center">
            <TodoItem todo={todo} updateTodoList={updateTodoList}></TodoItem>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
