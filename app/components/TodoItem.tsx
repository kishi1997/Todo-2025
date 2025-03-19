'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../types/type';
import Modal from './Modal';
import { CiEdit } from 'react-icons/ci';
import { CiTrash } from 'react-icons/ci';
import { CiSaveDown2 } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useTodoStore } from '../store/TodoStore';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { editTodo } = useTodoStore();
  // モーダルの開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [task, setTask] = useState<string>(todo.task);
  // const [isEditTask, setIsEditTask] = useState<string>(todo.task);
  const editorRef = useRef<HTMLInputElement>(null);
  const editTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    editTodo(task, todo.complete, todo.id);
    setIsEdit(false);
  };
  useEffect(() => {
    if (isEdit && editorRef.current) {
      editorRef.current.focus();
    }
  }, [isEdit]);

  return (
    <>
      <span
        className={`mr-3 text-xs px-2 py-1 rounded-xl hover:bg-gray-500 ${todo.complete ? 'text-gray-600 border-gray-600' : 'border-white'} border`}
      >
        {todo.complete ? '完了' : '未完了'}
      </span>
      <input
        className={`px-2 py-2 flex-grow text-gray-100 ${todo.complete ? 'line-through text-gray-500' : ''} bg-transparent focus:outline-none focus:bg-white focus:bg-opacity-10`}
        type="text"
        value={task}
        readOnly={!isEdit}
        disabled={!isEdit}
        ref={editorRef}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      {/* 編集保存ボタン */}
      {isEdit ? (
        <div className="relative">
          <button
            onClick={(e) => editTask(e)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400"
          >
            <CiSaveDown2 className="w-6 h-6"></CiSaveDown2>
          </button>
        </div>
      ) : null}
      {/* task編集ボタン */}
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
      {/* 削除ボタン */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-gray-500 hover:text-red-500 transition-colors mr-2"
      >
        <CiTrash className="w-6 h-6"></CiTrash>
      </button>
      <span className="text-xs text-gray-500">{todo.createdAt}</span>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        id={todo.id}
        task={todo.task}
      ></Modal>
    </>
  );
};

export default TodoItem;
