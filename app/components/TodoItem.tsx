import React, { useState } from 'react';
import { Todo } from '../types/type';
import Modal from './Modal';

type TodoItemProps = {
  todo: Todo;
  updateTodoList: (id: string) => void;
};

const TodoItem = (props: TodoItemProps) => {
  // モーダルの開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <span
        className={`flex-grow text-gray-100 ${props.todo.complete ? 'line-through text-gray-500' : ''}`}
      >
        {props.todo.task}
      </span>
      <span
        className={`mr-3 text-xs px-2 py-1 rounded-xl hover:bg-gray-500 ${props.todo.complete ? 'text-gray-600 border-gray-600' : 'border-white'} border`}
      >
        {props.todo.complete ? '完了' : '未完了'}
      </span>
      <span className="mr-3 text-xs">{props.todo.createdAt}</span>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-gray-500 hover:text-red-500 transition-colors"
      >
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
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        id={props.todo.id}
        task={props.todo.task}
        updateTodoList={props.updateTodoList}
      ></Modal>
    </>
  );
};

export default TodoItem;
