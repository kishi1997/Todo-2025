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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-100">
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-80 flex flex-col justify-center items-center">
        <p className="text-lg text-gray-200 mb-5 text-center">「{props.task}」を削除しますか？</p>
        <div className="flex w-full justify-center space-x-4">
          <button
            onClick={(e) => deleteTodo(e)}
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-lg transition-colors duration-200"
          >
            削除する
          </button>
          <button
            onClick={props.onCancel}
            className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-2 rounded-lg transition-colors duration-200"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
