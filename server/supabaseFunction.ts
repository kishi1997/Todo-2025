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
