'use client';
import React, { useEffect } from 'react';
import { useTodoStore } from '../store/TodoStore';

interface ModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  id: string;
  task: string;
}

const Modal = (props: ModalProps) => {
  const { removeTodo } = useTodoStore();
  // タスク削除
  const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeTodo(props.id);
    props.onOk();
  };
  // モーダルを開いた時にスクロールを無効にし、閉じたら有効にする
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden'; // スクロール無効
    } else {
      document.body.style.overflow = 'auto'; // スクロール有効
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'auto'; // モーダルが閉じられたらスクロールを戻す
    };
  }, [props.open]);
  return props.open ? (
    <div>
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-80 h-48 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <p className="text-lg text-gray-200 mb-5 text-center">「{props.task}」を削除しますか？</p>
        <div className="flex w-full justify-center">
          <button
            onClick={(e) => deleteTodo(e)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-lg transition-colors duration-200"
          >
            削除する
          </button>
        </div>
      </div>
      <div
        onClick={props.onCancel}
        className="fixed bg-black bg-opacity-60 w-full h-full z-10 top-0 left-0"
      ></div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
