import { db } from './db';
// todolistの取得
export const getAllTodos = async () => {
  try {
    const todos = await db.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return todos;
  } catch (error) {
    console.error('No data found', error);
  }
};
// todo追加
export const addTodo = async (task: string) => {
  try {
    const newTodo = await db.task.create({
      data: {
        id: crypto.randomUUID(),
        task: task,
        complete: false,
      },
    });
    return newTodo;
  } catch (error) {
    console.error(error);
  }
};
// todo削除
export const deleteTodo = async (id: string) => {
  try {
    const deleteTodo = await db.task.delete({
      where: {
        id: id,
      },
    });
    return deleteTodo;
  } catch (error) {
    console.error(error);
  }
};
// todo編集
export const editTodo = async (id: string, task: string, complete: boolean) => {
  try {
    const editedTodo = await db.task.update({
      where: {
        id: id,
      },
      data: {
        task: task,
        complete: complete,
      },
    });
    return editedTodo;
  } catch (error) {
    console.error(error);
  }
};
