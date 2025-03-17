import React from 'react';

interface ModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  updateTodoList: (id: string) => void;
  id: string;
  task: string;
}

const Modal = (props: ModalProps) => {
  // タスク削除
  const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement>, deleteTodoId: string) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleteTodoId }),
    });
    props.updateTodoList(props.id);
    props.onOk();
  };
  return props.open ? (
    <div>
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-80 h-48 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <p className="text-lg text-gray-200 mb-5 text-center">「{props.task}」を削除しますか？</p>
        <div className="flex w-full justify-center">
          <button
            onClick={(e) => deleteTodo(e, props.id)}
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
