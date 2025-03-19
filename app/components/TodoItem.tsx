import React, { useState } from 'react';
import { Todo } from '../types/type';
import Modal from './Modal';
import { CiEdit } from 'react-icons/ci';
import { CiTrash } from 'react-icons/ci';
import { CiSaveDown2 } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';
type TodoItemProps = {
  todo: Todo;
  updateTodoList: (id: string) => void;
};

const TodoItem = (props: TodoItemProps) => {
  // モーダルの開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditTask, setIsEditTask] = useState<string>(props.todo.task);

  const editTask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/todos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: props.todo.id,
        task: isEditTask,
        complete: props.todo.complete,
      }),
    });
    setIsEditTask('');
    setIsEdit(false);
  };
  return (
    <>
      <span
        className={`mr-3 text-xs px-2 py-1 rounded-xl hover:bg-gray-500 ${props.todo.complete ? 'text-gray-600 border-gray-600' : 'border-white'} border`}
      >
        {props.todo.complete ? '完了' : '未完了'}
      </span>
      <span
        className={`flex-grow text-gray-100 ${props.todo.complete ? 'line-through text-gray-500' : ''}`}
      >
        {props.todo.task}
      </span>
      {/* 編集フォーム */}
      {isEdit ? (
        <div className="relative">
          <input
            className="w-full bg-gray-900 text-gray-100 px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            type="text"
            value={isEditTask}
            onChange={(e) => {
              setIsEditTask(e.target.value);
            }}
          />
          <button
            onClick={(e) => editTask(e)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400"
          >
            <CiSaveDown2 className="w-6 h-6"></CiSaveDown2>
          </button>
        </div>
      ) : null}
      {/* task編集変更ボタン */}
      <button
        onClick={() => setIsEdit(!isEdit)}
        className="text-gray-500 hover:text-white transition-colors m-2"
      >
        {isEdit ? (
          <IoIosCloseCircleOutline className="w-6 h-6"></IoIosCloseCircleOutline>
        ) : (
          <CiEdit className="w-6 h-6"></CiEdit>
        )}
      </button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-gray-500 hover:text-red-500 transition-colors mr-2"
      >
        <CiTrash className="w-6 h-6"></CiTrash>
      </button>
      <span className="text-xs text-gray-500">{props.todo.createdAt}</span>
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
