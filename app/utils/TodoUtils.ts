import { Todo } from '../types/type';

const todosApiUrl = `${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/todos`;

export const fetchTodoList = async (): Promise<Todo[]> => {
  const res = await fetch(todosApiUrl, {
    cache: 'no-store',
  });
  const todos = await res.json();
  return todos;
};

export const fetchAddTodo = async (newTodo: string): Promise<Todo> => {
  const res = await fetch(todosApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newTodo }),
  });
  const todo = await res.json();
  return todo;
};

export const fetchDeleteTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(todosApiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ deleteTodoId: id }),
  });
  const todo = await res.json();
  return todo;
};
export const fetchEditTodo = async (task: string, complete: boolean, id: string): Promise<Todo> => {
  const res = await fetch(todosApiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      task: task,
      complete: complete,
    }),
  });
  const editedTodo = await res.json();
  return editedTodo;
};
